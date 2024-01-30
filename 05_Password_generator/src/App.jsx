import { useState ,useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght, setLength] = useState(8)
  const [numberAllowed,setNumberAllowerd] =useState('false')
  const [charAllowed,setCharAllowed]=useState('false')
  const [passwords,setPassword]=useState("dsa");

  //useref hook
  const passwordref = useRef(null)

  const copyPasswordToclipBoard = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(2,10)
    window.navigator.clipboard.writeText(passwords)
  },[passwords])

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str+="123456798";
    if(charAllowed) str+="!~@#$%^&*";

    for(let i=0;i<lenght;i++){
      let ind = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(ind);
    }
    
    setPassword(pass);
  },[lenght,numberAllowed,charAllowed,setPassword])

   useEffect(()=>{
    passwordGenerator();
   },[lenght,numberAllowed,charAllowed,passwordGenerator])

  
  return (
    <>
    <div className=' bg-gray-500 w-full max-w-md mx-auto shadow-md px-4 my-8 py-4 text-white rounded-lg'>
      <h1 className='text-white text-center text-lg'>Password Generator</h1>
      <div className='flex flex-wrap bg-transparent m-2 rounded-md overflow-hidden'>
        <input type="text"  className='w-[80%] outline-none py-1 px-1 text-black'
        placeholder='Password'
        value={passwords}
        ref={passwordref}
        readOnly
        />
        <button className='flex bg-blue-700 w-[20%] text-center text-md text-white px-3 py-2 hover:scale-90'
        onClick={copyPasswordToclipBoard}>Copy</button>
      </div>
      <div className='flex justify-evenly'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={lenght} 
        className=' cursor-pointer w-[50%]'
        onChange={(e)=>setLength(e.target.value)}
        />
        <label>lenght {lenght}</label>
      </div>
      <div className='flex gap-x-1 px-1 m-1'>
        <input type="checkbox" defaultChecked={charAllowed}
        onChange={()=> setCharAllowed((prev)=>!prev)} 
        />
        <label>CharAllowed</label>
      </div>
      <div className='flex gap-x-1 px-1 m-1'>
        <input type="checkbox" defaultChecked={numberAllowed}
        onChange={()=> setNumberAllowerd((prev)=>!prev)} 
        />
        <label>NumAllowed</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
 