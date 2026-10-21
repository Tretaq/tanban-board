import { useContext} from 'react';
import { BoardContext } from '../context/BoardContext';

export function useBoard() {
    const value  = useContext(BoardContext);
    if(!value) throw new Error('useBoard() must be used within BoardContext');
    return value;
}