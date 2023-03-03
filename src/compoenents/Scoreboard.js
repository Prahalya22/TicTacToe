import React from 'react'
import './Scoreboard.css'

function Scoreboard({scores,xplaying}) {

    const {xscore,oscore}=scores;
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xplaying && "inactive"}`}>X - {xscore}</span>
      <span className={`score o-score ${xplaying && "inactive"}`}>O - {oscore}</span>
    </div>
  )
}

export default Scoreboard
