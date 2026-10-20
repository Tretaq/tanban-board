import type {Board as BoardType} from "../types/board.ts";
import {getColumnCards} from "../utils/board.ts";

export interface BoardProps {
    board: BoardType;
}
export function GetBoard({ board }: BoardProps) {
    return (
        <div>
            {
                board.columnOrder.map(columnId => {
                    const column = board.columns[columnId];
                    if(!column) {} return null;
                    return (
                        <
                    )
                })
            }
        </div>
    )
}