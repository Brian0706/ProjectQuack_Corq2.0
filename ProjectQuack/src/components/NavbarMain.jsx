import Navbar from "./navbarComponents/Navbar";
import PageProgressBar from "./navbarComponents/PageProgressBar";
import './NavbarMain.css'

function NavbarMain() {
    return (
        <div>
            <div className="navbar-main-container">
                <Navbar/>
                <PageProgressBar/>
            </div>
        </div>
    )
}

export default NavbarMain
