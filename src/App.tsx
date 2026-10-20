import "./App.css";
import {initialBoard} from "./utils/seed.ts";
import {GetBoard} from "./components/Board.tsx";

function App() {


  return (
    <main>
      <h1>Tanban Board</h1>
    <GetBoard board={initialBoard}></GetBoard>
    </main>
  )
}

export default App
