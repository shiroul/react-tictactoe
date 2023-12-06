import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board.jsx'

function App() {

  const [endGame, setEndGame] = useState(0)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('O')

  function handleClick(x){
    if(!endGame){
      if(!board[x]){
        const newBoard = board.slice()
        newBoard[x] = turn
        setBoard(newBoard)
        if(checkWinning(newBoard)){
          setEndGame(1)   
        }
        if(turn == 'O'){
          setTurn('X')
          return
        }
        setTurn('O')
        
        dumbCpu()
      }
    }
  }

  function dumbCpu(){
    let temp      
    while(true){
      temp = Math.floor(Math.random() * 9)
      if(!board[temp]){
        const newBoard = board.slice()
        newBoard[temp] = turn
        setBoard(newBoard)
        if(checkWinning(newBoard)){
          setEndGame(1)   
        }
        if(turn == 'O'){
          setTurn('X')
          return
        }
        setTurn('O')
        break
      }
    }
  }

  function checkWinning(newBoard){
    if(newBoard[0] == turn && newBoard[1] == turn && newBoard[2] == turn){
      return true   
    }
  }

  return (      
    <div className='container'>
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
