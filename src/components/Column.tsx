import type {Card, Column as ColumType} from "../types/board.ts"
import {CardItem} from "./CardItem.tsx";

interface ColumnProps{
    column: ColumType;
    cards: Card[];
}
export function Column({column, cards}: ColumnProps) {
        return( <div >
        {column.title}
        {column.cardIds.length}
        {cards.length === 0 ? "No cards found." : cards.map((card: Card) => (
            <CardItem key={card.id} card={card}></CardItem>
        ))}
    </div>
)
}