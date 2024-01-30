import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(15)

  const addvalue = ()=>{
    setCount(counter+1);
  }

  const decvalue = ()=>{
    setCount(counter-1);
  }

  return (
    <>
     <h2>A number counter</h2>
     <h2>counter {counter} </h2>

     <button onClick={addvalue} >increment {counter}</button>
     <button onClick={decvalue} >Decrement {counter} </button>

     <footer> current count value is {counter} </footer>
    </>
  )
}

export default App
