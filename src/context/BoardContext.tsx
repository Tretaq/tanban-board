import {createContext, useReducer, type ReactNode, type Dispatch, useEffect} from 'react'
import type {Board} from "../types/board.ts";
import {type BoardAction, boardReducer} from "./boardReducer.ts";
import {initialBoard} from "../utils/seed.ts";
import {loadBoard, saveBoard} from "../utils/storage.ts";

interface BoardContextValue {
    board: Board
    dispatch: Dispatch<BoardAction>
}
export const BoardContext = createContext<BoardContextValue | null>(null)

interface BoardProviderProps {
    children: ReactNode
}
export function BoardProvider({ children }: BoardProviderProps) {
    const [board, dispatch] = useReducer(boardReducer,  initialBoard, loadBoard);

    useEffect(() => {
        saveBoard(board)
    }, [board])

    return (
        <BoardContext.Provider value={{board, dispatch}}>
                {/* Provides baord and dispatch to its children which is everything under it  */}
            {children}
        </BoardContext.Provider>
    )
}