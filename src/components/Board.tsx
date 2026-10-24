import {getColumnCards} from "../utils/board.ts";
import {Column} from "./Column.tsx";
import "./Board.css"
import {useBoard} from "../hooks/useBoard.ts";
import {AddForm} from "./AddForm.tsx";
import {DndContext, PointerSensor, KeyboardSensor, useSensors, useSensor, type DragEndEvent} from "@dnd-kit/core";

export function Board() {
    const { board } = useBoard()
    const { dispatch } = useBoard();
    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: {distance: 5}}),
        useSensor(KeyboardSensor)
    )

    function handleDragEnd() {

    }

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
        </DndContext>
    )
}
{/*<div className="AddColumn">*/}
{/*    <AddForm placeholder={"New Column"} buttonLabel={"Add Column"}  onAdd={title => dispatch({ type: 'ADD_COLUMN', title })}/>*/}
{/*</div>*/}