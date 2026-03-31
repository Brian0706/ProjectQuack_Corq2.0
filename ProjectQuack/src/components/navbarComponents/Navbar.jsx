import './Navbar.css'
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import PageProgressBar from './PageProgressBar';
import TextField from '@mui/material/TextField';
import Dropdown from '../Dropdowns/base';
import { FaInbox } from "react-icons/fa";
import DropdownItems from '../Dropdowns/items';


function Navbar() {
    // const [searchText, setSearchText] = useState('')
    // const searchInputRef = useRef(null)

    // const handleClearClick = () => {
    //     setSearchText('')
    //     searchInputRef.current?.focus()
    // }
    const items = ['test', 'test'];
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
            <Dropdown 
                buttonName = {"INBOX"}
                buttonContent={["test", "test"]} />
                buttonIcon = {null}
                cheveron = {false}
                alignment = {"RIGHT"};
            <Dropdown 
                buttonName = {"PROFILE"}
                buttonContent={<>{items.map((item) => (<DropdownItems key={item}>{`Item ${item}`}</DropdownItems>))}</>}/>
                buttonIcon = {null}
                cheveron = {false}
                alignment = {"LEFT"};
        </div>
    </div>
    )
}

export default Navbar