import type {Card} from '../types/board'
import "./CardItem.css"
import "./PriorityBadge.css"
import {useBoard} from "../hooks/useBoard.ts";
import {EditableText} from "./EditableText.tsx";

interface CardItemProps {// ts won't work without this when starting
    card: Card
}

export function CardItem({card}: CardItemProps) {
    const {dispatch} = useBoard()
    return (

        <div className="carditem">

            <EditableText value={card.title} onSave={t => dispatch({type: 'EDIT_CARD', cardId: card.id, title: t})}/>
            {card.description && <p>{card.description}</p>}
            <span className={`badge priority-${card.priority}`}>{card.priority}</span>
            {card.dueDate && <p>{card.dueDate}</p>}
            <div className="labels">
                {card.labels.map(label => (
                    <span key={label}>
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