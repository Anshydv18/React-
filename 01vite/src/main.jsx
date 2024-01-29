import React from 'react'
import ReactDOM from 'react-dom/client'


const username = "Ansh Yadav"

const ReacteElement = React.createElement(
  'a',
  {
    href:"https//:www.google.com",
    target:'_blank'
  },
  'click on me to visit google ', username 
)

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank' },
//   'click me to visit google',
// )

const anotherElement = (
  <a href="https://google.com" target='_blank'>google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReacteElement
)
