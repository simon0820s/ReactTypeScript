import { useState } from 'react'
import './App.css'

function App() {
  const [number,setNumber]=useState<number | string>(2)

  const changeNumber=()=>{
    setNumber("2")
  }

  return (
    <div className='app'>
      {number}
      <button onClick={changeNumber}>Change number</button>
    </div>
  )
}

export default App
