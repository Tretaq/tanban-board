import {getColumnCards} from "../utils/board.ts";
import {Column} from "./Column.tsx";
import "./Board.css"
import {useBoard} from "../hooks/useBoard.ts";

export function Board() {
    const { board } = useBoard()
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