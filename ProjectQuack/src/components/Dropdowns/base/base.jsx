import React, { useState } from 'react'
import DropdownButton from '../button/button'
import DropdownContent from '../content/content'

const Dropdown = ({buttonText, buttonContent}) => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen((open) => !open);
    }
  return (
    <div className='dropdown-base'>
        <DropdownButton toggle={toggleDropdown} open={open}>
            {buttonText}
        </DropdownButton>
        <DropdownContent open={open}>
            {buttonContent}
        </DropdownContent>
    </div>
  )
}

export default Dropdown