import type {Board, Card, Column} from "../types/board.ts";
import {createId} from "../utils/id.ts";
import {initialBoard} from "../utils/seed.ts";

export type BoardAction = | {type: 'ADD_CARD'; columnId: string; title: string}
    | {type: 'DELETE_CARD'; cardId: string}
    | {type: 'EDIT_CARD'; cardId: string; title: string}
    | {type: 'ADD_COLUMN';  title: string}
    | {type: 'DELETE_COLUMN';  columnId: string}
    | {type: 'RENAME_COLUMN';  columnId: string;  title: string}
    | {type: 'MOVE_CARD';  cardId: string;  fromColumnId: string, toColumnId: string,toIndex: number}
    | {type: 'RESET_BOARD'}
    | {type: 'UPDATE_CARD'; cardId: string; changes: Partial<Omit<Card, 'id'>>};


export function boardReducer(state: Board, action: BoardAction):Board {
    switch (action.type) {
        case 'ADD_CARD': {
            const id = createId()
            const newCard: Card = {id, title: action.title, priority: 'medium', labels: []}
            const column = state.columns[action.columnId];
            if(!column) return state;
            return {
                ...state,
                cards  : {...state.cards, [id]: newCard},
                columns: {
                    ...state.columns, [column.id]: {...column, cardIds: [...column.cardIds, id]},
                    // weź wszystkie colmuny i daj je do nowego boarda , weź columne i nadpisz ją starymi kartami plus nowym id
                },
            }
        }
        case 'DELETE_CARD': {
            if(!state.cards[action.cardId]) return state;

            const newCards = { ...state.cards}
            delete newCards[action.cardId];

            const newColumns = { ...state.columns}
            for(const id in newColumns){
                const column = newColumns[id];
                newColumns[id] = {
                    ...column,
                    cardIds: column.cardIds.filter(cardId => cardId !== action.cardId),
                }
            }
            return { ...state, cards: newCards , columns: newColumns};
        }
        case "DELETE_COLUMN": {
            const column = state.columns[action.columnId];
            if(!column) return state;

            const newCards = { ...state.cards };
            for(const cardId of column.cardIds){
                delete newCards[cardId];
            }
            const newColumns = {...state.columns}
            delete newColumns[column.id];

            const newOrder = state.columnOrder.filter(columnId => columnId !== action.columnId);

            return { ...state , cards: newCards, columns: newColumns, columnOrder: newOrder};

        }
        case 'EDIT_CARD': {
            const card = state.cards[action.cardId];
            if(!card) return state;
            return {...state, cards: {...state.cards, [card.id]: { ...card, title: action.title} }};
        }
        case 'RENAME_COLUMN': {
            const column = state.columns[action.columnId];
            if(!column) return state;
            return {...state, columns: {...state.columns, [column.id]: {...column, title: action.title} }};
        }
        case 'ADD_COLUMN': {
            const id = createId();
            const newColumn: Column = {id,title: action.title,cardIds: []};
            return {...state,columns: {...state.columns, [id]: newColumn},columnOrder: [...state.columnOrder, id]};
        }
        case 'MOVE_CARD': {
            const from = state.columns[action.fromColumnId];
            const to = state.columns[action.toColumnId];
            if(!from || !to) return state;

            const newColumns = {
                ...state.columns,[from.id]: { ...from, cardIds: from.cardIds.filter(cardId => cardId !== action.cardId) },
            }
            const destinations = newColumns[to.id];
            if(!destinations) return state;

            const newCardIds = [
                ...destinations.cardIds.slice(0,action.toIndex),
                action.cardId,
                ...destinations.cardIds.slice(action.toIndex),
            ]
            newColumns[destinations.id] = {...destinations, cardIds: newCardIds}

            return { ...state, columns: newColumns};

        }
        case 'RESET_BOARD': {
            return initialBoard;
        }
        case 'UPDATE_CARD': {
            const card = state.cards[action.cardId];
             if(!card) return state;
             return {
                 ...state,
                 cards: { ...state.cards, [card.id]: { ...card, ...action.changes}}
             }

        }
        default: {
            return state;
        }
    }
}