import type {Card, Column as ColumType} from "../types/board.ts"
import {CardItem} from "./CardItem.tsx";
import "./Column.css"
import {useBoard} from "../hooks/useBoard.ts";
import {AddForm} from "./AddForm.tsx";
import  {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import { useDroppable} from "@dnd-kit/core";

interface ColumnProps{
    column: ColumType;
    cards: Card[];
}

export function Column({column, cards}: ColumnProps) {
            function handleDelete(){
                if(window.confirm(`Delete "${column.title}" and its ${cards.length} cards?`)){
                    dispatch({type: 'DELETE_COLUMN', columnId: column.id});
                }
            }
            const {setNodeRef} = useDroppable({id: column.id})
        const { dispatch } = useBoard()
        return(

                <div className="column">
                    <div className="column-title"><div className="columntitle">{column.title} <button onClick={ e => handleDelete()}>X </button></div></div>
                    <div ref={setNodeRef} className="column-container">
                    <SortableContext items={column.cardIds} strategy={verticalListSortingStrategy}>
                    {cards.length === 0 ? "No cards found." : cards.map((card: Card) => (
                        <CardItem key={card.id} card={card}></CardItem>
                    ))}
                    </SortableContext>
                    </div>
                        <AddForm placeholder={"Add a card"} buttonLabel={"Add"} onAdd={title => dispatch({type: 'ADD_CARD',columnId: column.id, title})}></AddForm>
                </div>
        )
}