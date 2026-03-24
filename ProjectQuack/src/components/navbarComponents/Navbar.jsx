import './Navbar.css'
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function btnAssigner(input) {
    var btn = document.getElementById(input);
    btn.addEventListener("click", breadcrumbUpdater(input));
}

function breadcrumbUpdater(input) {

}

function modal(type) {
    if(type == 'navbar_notif') {
        
    }
}


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
        <button id = 'button_navbar-logo' className = 'button_navbar-logo'>
            <img src="/src/assets/Logo.png" className='navbar-logo'/>
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
            <button className='navbar-notifications' onClick="modal('navbar_notif')">
                <div className='navbar-notifications'>
                    <p>NOTIFICATIONS</p>
                </div>
            </button>

            <button className='navbar-profile'>
                <div className='navbar-profile'>
                    <p>PROFILE</p>
                </div>
            </button>  
        </div>
    </div>
    )
}

export default Navbar