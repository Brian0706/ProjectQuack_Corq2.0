import React from 'react'
import './content.css'

const DropdownContent = ({children}) => {
  return (
    <div className='dropdown-content'>
        {children}
    </div>
  )
}

export default DropdownContent