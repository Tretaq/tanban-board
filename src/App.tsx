import "./Index.css"
import {Board} from "./components/Board.tsx";
import {AddForm} from "./components/AddForm.tsx";
import {useBoard} from "./hooks/useBoard.ts";


function App() {
    const  { dispatch } = useBoard()
    function handleReset() {
        if(window.confirm("Reset the board? All your changess will be lost")){
            dispatch({ type: "RESET_BOARD" });
        }
    }
  return (
    <main>
      <h1>Tanban Board</h1>
        <div className="AddColumn">
            <AddForm placeholder={"New Column"} buttonLabel={"Add Column"}  onAdd={title => dispatch({ type: 'ADD_COLUMN', title })}/>
        </div>
        <div >
            <button onClick={handleReset}>Reset Board</button>
        </div>
        <Board></Board>
    </main>

  )
}

export default App
