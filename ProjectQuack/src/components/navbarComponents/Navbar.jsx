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


function Navbar() {
    const [searchText, setSearchText] = useState('')
    const searchInputRef = useRef(null)

    const handleClearClick = () => {
        setSearchText('')
        searchInputRef.current?.focus()
    }

    return (
        
    <div className='navbar'>
        <button id = 'button_navbar-logo' className = 'button_navbar-logo'>
        <img src="/src/assets/Logo.png" className='navbar-logo'/>
        </button>
        <Box 
        sx={{ width: 500, maxWidth: '100%' }}
        >
            <TextField fullWidth label="Search for clubs, events, and more..." id="searchbar" 
            type="search" 
            color='red'
            className='searchbar'
            />
        </Box>

        <div className='navbar-right'>
            <div className='navbar-notifications'>
                <p>NOTIFICATIONS</p>
            </div>
            

            <div className='navbar-profile'>
                <p>PROFILE</p>
            </div>  
        </div>

        
    
    </div>
    )
}

export default Navbar