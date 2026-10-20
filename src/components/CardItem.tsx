import type { Card } from '../types/board'

interface CardItemProps {// ts won't work without this when starting
    card: Card
}
export function CardItem({card}: CardItemProps) {
    return (
        <div>
            {card.title}
            {card.description && <p>{card.description}</p>}
            {card.priority}
            {card.dueDate && <p>{card.dueDate}</p>}
            {card.labels.map(label => (
                <span key={label}>
                    {label}
                </span>
            ))}
        </div>
    )
}