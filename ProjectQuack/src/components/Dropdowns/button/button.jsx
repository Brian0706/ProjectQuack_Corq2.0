import React from 'react'
import { HiChevronDown } from "react-icons/hi";
import { HiCheveronUp } from "react-icons/hi";
import './button.css'

const DropdownButton = ({children, open, toggle}) => {
  return (
    <div className={`dropdown-button ${open ? "button-open" : null}}`} onClick={toggle}>
        {children}
        <span className='dropdown-button-toggleIcon'>
            {open ? <HiCheveronUp/> : <HiChevronDown />}
        </span>
    </div>
  )
}

export default DropdownButton