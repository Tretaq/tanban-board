import type {Board, Column, Card} from '../types/board'

export function getColumnCards(board: Board,columnId: string): Card[] {
    const column = board.columns[columnId];

    if(!column) {
        return [];
    }
    return column.cardIds
        .map((id) => board.cards[id])
        .filter((card): card is Card => !!card);
}