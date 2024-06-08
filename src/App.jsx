import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Main from './components/Main'
import { Routes,Route } from 'react-router-dom'
import Products from './components/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
     </Routes>
     
    </>
  )
}

export default App
