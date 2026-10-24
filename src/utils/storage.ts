import type {Board} from "../types/board.ts";
const STORAGE_KEY = 'tanban-board'

function isBoard(value: unknown): value is Board{
    const obj = value as Record<string, unknown>
    return (
        typeof value === 'object' && value !== null  &&
        typeof obj.cards === 'object' && obj.cards !== null &&
        typeof obj.columns === 'object' &&
        obj.columns !== null &&
        'columnOrder' in value &&
        Array.isArray(obj.columnOrder)
    );
}
export function loadBoard(fallback: Board): Board{
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return fallback;
        }
        const parsed: unknown = JSON.parse(raw);
        return isBoard(parsed) ? parsed : fallback;
    } catch {
        return fallback;
    }
}

export function saveBoard(board: Board): void {
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
    }catch(e){
    }

}