import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Calendar from '../assets/Calendar.svg'
import { BrowserRouter, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <p>aifhnaowe</p>

      <Home />
      <img src={Calendar} />

      <BrowserRouter>
          <Route path='/' element={<Home />} />
      </BrowserRouter>
    </div>
  )
}

export default App
