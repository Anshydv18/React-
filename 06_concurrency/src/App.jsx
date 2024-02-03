import { useState } from 'react' 
import './App.css'
import { Inputbox } from './components'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[50%] m-6  h-[60%] backdrop-blur-sm bg-[rgb(255,255,255,0.4)] p-4 rounded-lg max-md:w-full'>
          <Inputbox/>
        </div>
      </div>
    </>
  )
}

export default App
