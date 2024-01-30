import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1 className='bg-green-400 text-black p-5 rounded-lg cursor-pointer'>Tailwind test</h1>
     <Cards name="jacket" btnText="click over me" />
     <Cards name="caps" btnText="dont click"/>
    </>
  )
}

export default App
