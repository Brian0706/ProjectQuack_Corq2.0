import React from 'react'
import './content.css'

const DropdownContent = ({children, open, toggle}) => {

  return (
    <div className={`dropdown-content ${open ? "content-open" : null}`}>
      
        {children}
    </div>
  )
}

export default DropdownContent