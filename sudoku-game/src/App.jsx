import { useState } from 'react'
import './App.css'

function Square({value}){
  return (
    <button
      className="square"
    >
      {value}
    </button>
  );
}

function App() {
  const [currentMove, setCurrentMove] = useState(0);
  
  const gridColumns = [];
  for(let x = 0; x < 9; x++){
    const gridRow = [];
    for(let y = 0; y < 9; y++){
      gridRow.push(<Square value={y+(x*9)}/>)
    }
    gridColumns.push(<div className="board-row">{gridRow}</div>)
  }
  return (
    <>
      <h1>Sudoku</h1>
      <div>
        {gridColumns} 
      </div>
    </>)
}

export default App
