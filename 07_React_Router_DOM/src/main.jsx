import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Users from './components/User/User.jsx'
import Github ,{githubInfoLoader} from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//    path:'/', 
//    element:<App/>,
//    children:[
//     {
//       path:"/",
//       element:<Home/>
//     },{
//       path:"/About",
//       element:<About/>
//     },
//     {
//       path:"/Contact",
//       element:<Contact/>
//     }
//    ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<Users/>}></Route>
      <Route 
      loader={githubInfoLoader}
      path='Github' 
      element={<Github/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
