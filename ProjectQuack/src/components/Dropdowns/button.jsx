import React from 'react'
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import './button.css'

// If Open, className is button-open, else it's just dropdown-button.
const DropdownButton = ({children, open, toggle}) => {
  return (
    <div className={`dropdown-button ${open ? "button-open" : null}}`} onClick={toggle}> 
        {children}
        <span className='dropdown-button-toggleIcon'>
            {open ? <HiChevronUp/> : <HiChevronDown />}
        </span>
    </div>
  )
}

export default DropdownButton