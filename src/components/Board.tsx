import type {Board as BoardType} from "../types/board.ts";
import {getColumnCards} from "../utils/board.ts";
import {Column} from "./Column.tsx";
import "./Board.css"
export interface BoardProps {
    board: BoardType;
}
export function GetBoard({ board }: BoardProps) {
    return (
        <div className="board">
            {
                board.columnOrder.map(columnId => {
                    const column = board.columns[columnId];
                    if(!column) return null;
                    return (
                        <Column key={column.id} column={column} cards={getColumnCards(board, columnId)}></Column>
                    )
                })
            }
        </div>
    )
}