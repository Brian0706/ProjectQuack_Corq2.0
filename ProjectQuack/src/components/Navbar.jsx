import './Navbar.css'
import { useRef, useState } from 'react';

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

        <div className='navbar-searchbar'>
            <img src="" alt=""/>
            <input 
                ref={searchInputRef}
                type="text" 
                placeholder='Search for clubs, events, and more...' 
                value={searchText} 
                onChange={(e) => 
                setSearchText(e.target.value)}
            />
            
            <button 
                className='navbar-searchbar_Fclear' 
                type="button" 
                onClick={handleClearClick}>
                X
            </button>
            
        </div>

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