import type {Board, Card} from '../types/board'

export function getColumnCards(board: Board,columnId: string): Card[] {
    const column = board.columns[columnId];

    if(!column) {
        return [];
    }
    return column.cardIds // we return only things that are in the cardIds
        .map((id) => board.cards[id])
        .filter((card): card is Card => !!card);
}
export function findColumnId(board: Board, cardId: string): string | undefined {
    for(let i = 0; i < board.columnOrder.length; i++) {
        const columnId = board.columnOrder[i];
        const column = board.columns[columnId];
        if(column && column.cardIds.includes(cardId)) {
            return columnId
        }
    }
    return undefined
}