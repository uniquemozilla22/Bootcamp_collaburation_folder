import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Team Bhattarai


/**
 * Leader has assigned uniquemozilla22 to create a counter in state
 * 
 * Leader has assigned yogeshtakeo to append that counter in the jsx
 */

function App() {

  const [counter, setCounter] = useState(0)


  function addCounter(payload){
    setCounter((prevState => prevState+payload))
  }

  return (
    <>
    <button onClick={()=>addCounter(3)}> add </button>
    <h1>{counter}</h1>
    </>
  )
}

export default App
