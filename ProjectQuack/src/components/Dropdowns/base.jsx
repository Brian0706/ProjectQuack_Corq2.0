import React, { useState } from 'react'
import DropdownButton from './button'
import DropdownContent from './content'
import './base.css'

const Dropdown = ({buttonName, buttonContent, buttonIcon, cheveron, alignment}) => {
    const [openState, setOpen] = useState(false); 
    
    const toggleDropdown = () => { 
        setOpen((open) => !open);
    }
  return (
    <div className='dropdown-base'>
        <DropdownButton 
            cheveron={cheveron}
            alignment={alignment}
            toggle={toggleDropdown}
            openState={openState}>
            {buttonText}
        </DropdownButton>
        <DropdownContent 
            openState={openState}>
            alignment={alignment}
            {buttonContent}
        </DropdownContent>
    </div>
  )
}

export default Dropdown