import type { Card } from '../types/board'
import "./CardItem.css"
import "./PriorityBadge.css"
interface CardItemProps {// ts won't work without this when starting
    card: Card
}
export function CardItem({card}: CardItemProps) {
    return (
        <div className="carditem">
            {card.title}
            {card.description && <p>{card.description}</p>}
            {card.priority}
            {card.dueDate && <p>{card.dueDate}</p>}
            {card.labels.map(label => (
                <span className={`priority-${card.priority}`} key={label}>
                    {label}
                </span>
            ))}
        </div>
    )
}