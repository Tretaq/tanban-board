export type Priority = 'low' | 'medium' | 'high';

export interface Card {
    id:string;
    title:string;
    description?: string;
    priority: Priority;
    dueDate?: string;
    labels:string[];
}
export interface Column {
    id: string;
    title: string;
    cardIds: string[];
}
export interface Board {
    cards: Record<string, Card>;
    columns: Record<string, Column>;
    columnOrder: string[];
}