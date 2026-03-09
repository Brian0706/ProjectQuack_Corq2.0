import './Navbar.css'
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BreadCrumbs from './BreadCrumbs';

function Navbar() {
    const [searchText, setSearchText] = useState('')
    const searchInputRef = useRef(null)

    const handleClearClick = () => {
        setSearchText('')
        searchInputRef.current?.focus()
    }

    return (
        
    <div className='navbar'>
        
        <img src="/src/assets/Logo.png" className='navbar-logo'/>

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