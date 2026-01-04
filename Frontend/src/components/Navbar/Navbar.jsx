import React from 'react'
import Calendar from '../../../assets/Calendar.svg'
import SBEngaged from '../../../assets/SBEngaged.png'
import SBU_Logo_Shield from '../../../assets/SBU_Logo_Shield.png'
import SBU_Logo_ShieldText from '../../../assets/SBU_Logo_ShieldText.png'
import Menu from '../../../assets/Menu.svg'
import Inbox from '../../../assets/Inbox.svg'
import {Calendar, SBEngaged, Inbox} from '../../../assets'
import { Router, Routes, Link } from 'react-router-dom'


const Navbar = () => {  

  const handleClikc = () => {

  }
  return (
    <div class="topbarcontainer">
    <ul class="topleft">
        <li>
          <a href="#menu"> 
            <img src="./assets/Menu.png" alt="<menu>" style="width:48px; height:36px;" />
          </ a>
        </li>
        <li>
          <a href="http://localhost:xxxx"> 
            <img src="./assets/Logo.png" alt="<logo>" style="width:286px; height:69px;"/>
          </a>
        </li>
    </ul>


    <ul class="topright">
        <li><Link to='/inbox'> <img src={Inbox} alt="<inbox>" style="width:34px; height:28px;"> </Link>
        <li><a href="#settings"> <img src={Settings} alt="<settings>" style="width:37px; height:37px;"> </a>
        <li><a href="#profile"> <img src="./assets/Profile.png" alt="<profile>" style="width:61px; height:61px;"> </a>
    </ul>
    <img src="./assets/Rectangle.png" alt="<bg>" style="width:130; height:46; position: fixed; z-index: 2; top: 10px; right: 39px;">
    </div>
  )
}

export default Navbar