import type {Board, Card} from "../types/board.ts";
import {createId} from "../utils/id.ts";

export type BoardAction = | {type: 'ADD_CARD'; columnId: string; title: string}
    | {type: 'DELETE_CARD'; cardId: string}
    | {type: 'EDIT_CARD'; cardId: string; title: string}
    | {type: 'ADD_COLUMN';  title: string}
    | {type: 'DELETE_COLUMN';  columnId: string}
    | {type: 'RENAME_COLUMN';  columnId: string;  title: string}
    | {type: 'MOVE_CARD';  cardId: string;  fromColumnId: string, toColumnId: string,toIndex: number}
    | {type: 'RESET_BOARD'}


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
    }
}