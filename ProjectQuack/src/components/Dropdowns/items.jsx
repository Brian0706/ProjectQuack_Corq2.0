import React from 'react'

const DropdownItems = ({children, onClick}) => {
  return (
    <div className='dropdown-items' onClick={onClick}>
        {children}
    </div>
  )
}

export default DropdownItems