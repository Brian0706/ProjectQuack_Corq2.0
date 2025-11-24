import React from 'react'
import Calendar from '../../../assets/Calendar.svg'
import SBEngaged from '../../../assets/SBEngaged.png'
import SBU_Logo_Shield from '../../../assets/SBU_Logo_Shield.png'
import SBU_Logo_ShieldText from '../../../assets/SBU_Logo_ShieldText.png'
import Menu from '../../../assets/Menu.svg'
import { Router, Routes, Link } from 'react-router-dom'


const Navbar = () => {
  const handleClick = () => {

  }
  
  return (
    <div>
      <nav class="navbar">
        <button class="nav-button">
          <img src={Menu}/>
        </button>
        <button class="nav-button" onClick={handleClick}>
          <img src={SBEngaged} />
        </button>
      </nav>
    </div>
  )
}

export default Navbar