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