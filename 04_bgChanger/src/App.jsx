import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    < >
      <div className=" w-screen h-screen " style={{backgroundColor:color}}>

        <div className=" bg-white fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 p-2 text-white gap-2">
          <button className='border w-20 p-1  bg-red-600 rounded-lg duration-100 hover:scale-90' onClick={()=> setColor(" rgb(196, 53, 53)")}>red</button>
          <button className='border w-20 p-1  bg-yellow-400 rounded-lg duration-100 hover:scale-90' onClick={()=> setColor("yellow")}>Yellow</button>
          <button className='border w-20 p-1 bg-green-600 rounded-lg duration-100 hover:scale-90' onClick={()=> setColor("rgb(76, 121, 76)")}>Green</button>
          <button className='border w-20 p-1 bg-orange-600 rounded-lg duration-100 hover:scale-90' onClick={()=> setColor("rgb(248, 159, 5)")}>Orange</button>
          <button className='border w-20 p-1 bg-violet-700 rounded-lg duration-100 hover:scale-90' onClick={()=> setColor("violet")}>violet</button>
          <button className='border w-20 p-1 bg-green-400 rounded-lg duration-100 hover:scale-90' onClick={()=> setColor("rgb(27, 159, 84)")}>SeaGreen</button>
        </div>
      </div>
    </>
  )
}

export default App
