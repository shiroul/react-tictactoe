import { useState, useRef, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board.jsx'
import Reset from './components/Button.jsx'
import Turn from './components/Turn.jsx'

function App() {

  const [endGame, setEndGame] = useState(0)
  const [board, setBoard] = useState(Array(9).fill(null))
  const turnRef = useRef('O')
  const smartCpu = useRef(0)

  useEffect(() => {
    setBoard(dumbCpu(board.slice()))
  }, []);

  function handleClick(x){
    if(!endGame){
      if(!board[x]){
        const newBoard = board.slice()
        newBoard[x] = turnRef.current
        setBoard(newBoard)
        if(checkWinning(newBoard)){
          console.log(newBoard)
          setEndGame(1)
          return
        }
        turnRef.current = switchTurn(turnRef.current)
        setBoard(dumbCpu(newBoard))
      }
    }
  }

  function changeTurn(){
    handleReset()
  }

  function switchTurn(turn){
    if(turn == 'X'){
      return 'O'
    }
    return 'X'
  }

  function handleReset(){
    setEndGame(0)
    turnRef.current = 'O'
    setBoard(dumbCpu(Array(9).fill(null)))
  }

  function dumbCpu(newBoard){
    if(!smartCpu.current){
      let temp
      while(true){
        temp = Math.floor(Math.random() * 9)
        if(!newBoard[temp]){
          newBoard[temp] = turnRef.current
          if(checkWinning(newBoard)){
            console.log(newBoard)
            setEndGame(1)
          }
          turnRef.current = switchTurn()
          return newBoard
        }
      }
    }
  }

  function checkWinning(newBoard){
    if(newBoard[0] == turnRef.current && newBoard[1] == turnRef.current && newBoard[2] == turnRef.current){
      return true   
    }
    if(newBoard[0] == turnRef.current && newBoard[4] == turnRef.current && newBoard[8] == turnRef.current){
      return true   
    }
    if(newBoard[0] == turnRef.current && newBoard[3] == turnRef.current && newBoard[6] == turnRef.current){
      return true   
    }
    if(newBoard[1] == turnRef.current && newBoard[4] == turnRef.current && newBoard[7] == turnRef.current){
      return true   
    }
    if(newBoard[2] == turnRef.current && newBoard[4] == turnRef.current && newBoard[6] == turnRef.current){
      return true   
    }
    if(newBoard[2] == turnRef.current && newBoard[5] == turnRef.current && newBoard[8] == turnRef.current){
      return true   
    }
    if(newBoard[3] == turnRef.current && newBoard[4] == turnRef.current && newBoard[5] == turnRef.current){
      return true   
    }
    if(newBoard[6] == turnRef.current && newBoard[7] == turnRef.current && newBoard[8] == turnRef.current){
      return true   
    }
    return false
  }

  return (      
    <div className='container'>
      <Reset onHandleReset={()=>handleReset()}/>
      <Turn onHandleTurn={()=>changeTurn()}/>
      <div className='gameBoard'>
        <Board value={board[0]} onHandleClick={()=>handleClick(0)}/>
        <Board value={board[1]} onHandleClick={()=>handleClick(1)}/>
        <Board value={board[2]} onHandleClick={()=>handleClick(2)}/>
        <Board value={board[3]} onHandleClick={()=>handleClick(3)}/>
        <Board value={board[4]} onHandleClick={()=>handleClick(4)}/>
        <Board value={board[5]} onHandleClick={()=>handleClick(5)}/>
        <Board value={board[6]} onHandleClick={()=>handleClick(6)}/>
        <Board value={board[7]} onHandleClick={()=>handleClick(7)}/>
        <Board value={board[8]} onHandleClick={()=>handleClick(8)}/>
      </div>
    </div>
  )
}

export default App
