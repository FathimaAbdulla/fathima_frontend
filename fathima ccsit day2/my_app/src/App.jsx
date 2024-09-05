import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Couter from './components/Couter'
import Fathi from './components/Fathi'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> welcome react</h1>
     
     
     <Navbar/>
     
     
     <Routes>
     <Route path='/s' element={<Statebasics/>}/>
      <Route path='/' element={<Signup/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/C' element={<Couter/>}/>
      <Route path='/F' element={<Fathi/>}/>
      <Route path='/A' element={<Api/>}/>
      <Route path='/P' element={<Pokemon/>}/>
      
      
     </Routes>
    </>
  )
}

export default App
