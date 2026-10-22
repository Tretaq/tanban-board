import type {Card, Column as ColumType} from "../types/board.ts"
import {CardItem} from "./CardItem.tsx";
import "./Column.css"
import {useBoard} from "../hooks/useBoard.ts";
interface ColumnProps{
    column: ColumType;
    cards: Card[];
}
export function Column({column, cards}: ColumnProps) {
        const { dispatch } = useBoard()
        return( <div className="column">
        <div className="column-title">{column.title}</div>
        {column.cardIds.length}
        {cards.length === 0 ? "No cards found." : cards.map((card: Card) => (
            <CardItem key={card.id} card={card}></CardItem>
        ))}
                onAdd={title => dispatch({type: 'ADD_CARD', columnId: , title})}
    </div>
)
}