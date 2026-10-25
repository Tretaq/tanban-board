import {findColumnId, getColumnCards} from "../utils/board.ts";
import {Column} from "./Column.tsx";
import "./Board.css"
import {useBoard} from "../hooks/useBoard.ts";
import {AddForm} from "./AddForm.tsx";
import {
    DndContext,
    PointerSensor,
    KeyboardSensor,
    useSensors,
    useSensor,
    type DragEndEvent,
    type DragStartEvent, DragOverlay
} from "@dnd-kit/core";
import {useState} from "react";
import type {Card} from "../types/board.ts";
import {CardItem} from "./CardItem.tsx";

export function Board() {
    const { board } = useBoard()
    const { dispatch } = useBoard();
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
    const selectedCard = selectedCardId ? board.cards[selectedCardId] : undefined
    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: {distance: 5}}),
        useSensor(KeyboardSensor)
    )

    function handleDragEnd(event: DragEndEvent) {

        const {active, over} = event;
        if(!over) return;
        const activeId = String(active.id);
        const overId = String(over.id);
        const fromColumnId = findColumnId(board, activeId);
        let toColumnId: string | undefined;
        let toIndex: number;

        const overColumn = board.columns[overId];
        if(overColumn) {
            toColumnId = overColumn.id;
            toIndex = overColumn.cardIds.length;
        } else{
            toColumnId = findColumnId(board, overId);
            const targetColumn = toColumnId ? board.columns[toColumnId] : undefined;
            if (!targetColumn) return;
            toIndex = targetColumn.cardIds.indexOf(overId);
        }
        if(!fromColumnId || !toColumnId ) {
            return;
        }
        console.log('active:', event.active.id, 'over:', event.over?.id ?? null)
        dispatch({type: "MOVE_CARD", cardId: activeId, fromColumnId, toColumnId, toIndex});
        
    }

    return (<>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <div className="board">
                {
                    board.columnOrder.map(columnId => {
                        const column = board.columns[columnId];
                        if(!column) return null;
                        return (
                            <Column  key={column.id} column={column} cards={getColumnCards(board, columnId)}></Column>
                        )
                    })

                }
            </div>

        </DndContext>
            {/*{selectedCardId && (<CardItem card={selectedCard} key={selectedCard.id} onClose{() => setSelectedCardId(null)} />)}*/}
        </>
    )
}
