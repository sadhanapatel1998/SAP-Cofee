import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Header from './component/Header'
import Coffees from './component/Coffees'
import About from './component/About'
import Blog from './component/Blog'
import Contact from './component/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/coffees' element={<Coffees/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App