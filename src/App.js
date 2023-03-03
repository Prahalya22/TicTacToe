import React,{useState} from 'react';
import Box from './compoenents/Box';
import './App.css';
import Board from './compoenents/Board';
import Scoreboard from './compoenents/Scoreboard';
import Resetbutton from './compoenents/Resetbutton';


function App() {
const win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
const [scores,setscores]=useState({xscore : 0, oscore : 0})
 const [board,setboard]=useState(Array(9).fill(null));
const [xplaying,setxplaying]=useState(true);
const [gameover,setgameover] =useState(false);

  const handleBoxclick=(boxIdx)=>{
    const updatedboard=board.map((value,idx)=>{
      if(idx===boxIdx){
        return xplaying===true?"X":"O";
      }
      else{
        return value;
      }
    })
    const winner = checkwinner(updatedboard);
    if(winner){
      if(winner==="O"){
          let {oscore}=scores;
          oscore+=1;
          setscores({...scores,oscore});
      }else{
        let {xscore}=scores;
        xscore+=1;
        setscores({...scores,xscore});

      }
    }

    setboard(updatedboard);

    setxplaying(!xplaying);
  }

  const checkwinner=(board)=>{
    for(let i=0;i<win.length;i++)
    {
      const [x,y,z]=win[i];

      if(board[x] && board[x] === board[y] && board[y]===board[z]){
        setgameover(true);
        return board[x];
      }
    }
  }

const resetboard =()=>{
  setgameover(false);
  setboard(Array(9).fill(null))
  scores=0;
  setscores(scores);

}

 return (
    <>
    <Scoreboard scores={scores} xplaying={xplaying}/>
     <Board board={board} onClick={gameover ? resetboard: handleBoxclick}/>
     <Resetbutton resetboard={resetboard}/>
   </>
  );
}

export default App;
