
import {initialBoard} from "./utils/seed.ts";
import {Board} from "./components/Board.tsx";

function App() {


  return (
    <main>
      <h1>Tanban Board</h1>
    <Board board={initialBoard}></Board>
    </main>
  )
}

export default App
