import React from 'react'
import Calendar from '../../../assets/Calendar.svg'
import SBEngaged from '../../../assets/SBEngaged.png'
import SBU_Logo_Shield from '../../../assets/SBU_Logo_Shield.png'
import SBU_Logo_ShieldText from '../../../assets/SBU_Logo_ShieldText.png'
import Menu from '../../../assets/Menu.svg'
import { Router, Routes, Link } from 'react-router-dom'


const Navbar = () => {  

  const handleClikc = () => {

  }
  return (
    <div>
      <nav class="navbar">
        <button class="nav-button">
          <img src={Menu}/>
        </button>
        <a href="http://localhost:5173/">
          <img src={SBEngaged} />
        </a>
      </nav>
    </div>
  )
}

export default Navbar