import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObje={
    name:"Dhruv",
    age:21
  }
// let newArr=[1,2,3,4,]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-3 mb-6'>Tailwind Test </h1>


      <Card username="chai or code" some={myObje} btn="Visit ME"/>
      <Card username="Dhruv" some={myObje}  btn="Click me"/>
    </>
  )
}

export default App
