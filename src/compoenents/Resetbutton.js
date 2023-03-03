import React from 'react'
import './Resetbutton.css'

function Resetbutton({resetboard}) {
  return (
    <div>
      <button className='reset' onClick={resetboard}>Reset</button>
    </div>
  )
}

export default Resetbutton
