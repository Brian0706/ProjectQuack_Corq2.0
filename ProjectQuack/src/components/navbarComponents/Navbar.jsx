import './Navbar.css'
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Dropdown from '../Dropdowns/base/base';


function Navbar() {
    const [searchText, setSearchText] = useState('')
    const searchInputRef = useRef(null)

    const handleClearClick = () => {
        setSearchText('')
        searchInputRef.current?.focus()
    }

    return (
    
    <div className='navbar'>

        {/* Navbar Logo should direct back to homepage. Will test once more than one page exist. */}
        <button id = 'button_navbar-logo' className = 'button_navbar-logo' href=''>
            <img src="/src/assets/Logo.png" className='navbar-logo' href=''/>
        </button>

        {/* Usage of MaterialUI's Search Box with custom CSS Elements */}
        <Box 
            sx={{ 
                width: 500, 
                maxWidth: '100%' 
                }}>
            <TextField
                fullWidth label="Search for clubs, events, and more..." 
                id="searchbar" 
                type="search" 
                color='red'
                className='searchbar'
            />
        </Box>

        <div className='navbar-right'>
            <div className='navbar-notifications'>
                <button className='notifications-button'>NOTIFICATIONS</button>
                <div className='notifications-content'>
                    <a href=''>Option 1</a>
                    <a href=''>Option 2</a>
                    <a href=''>Option 3</a>
                </div>
            </div>
            
            <div className='navbar-profile'>
                <button className='profile-button'>PROFILE</button> 
                <div className='profile-content'>
                    <a href=''>Option 1</a>
                    <a href=''>Option 2</a>
                    <a href=''>Option 3</a>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Navbar