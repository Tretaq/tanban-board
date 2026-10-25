import type {Card} from '../types/board'
import "./CardItem.css"
import "./PriorityBadge.css"
import {useBoard} from "../hooks/useBoard.ts";
import {EditableText} from "./EditableText.tsx";
import { useSortable} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"
interface CardItemProps {
    card: Card
}

export function CardItem({card}: CardItemProps) {
    const {dispatch} = useBoard()
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({id: card.id})
    const style= {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
    }
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="carditem">


            <EditableText value={card.title} onSave={t => dispatch({type: 'EDIT_CARD', cardId: card.id, title: t})}/>
            {card.description && <p>{card.description}</p>}
            <span className={`badge priority-${card.priority}`}>{card.priority}</span>
            {card.dueDate && <p>{card.dueDate}</p>}
            <div className="labels">
                {card.labels.map(label => (
                    <span className="label" key={label}>
                        {label}
                    </span>
                ))}
            </div>
            <div>
                <button
                    aria-label="Delete card"
                    onClick={() => dispatch({type: "DELETE_CARD", cardId: card.id})}
                >
                    X
                </button>
            </div>

        </div>
    )
}