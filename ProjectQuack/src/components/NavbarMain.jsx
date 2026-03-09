import BreadCrumbs from "./navbarComponents/BreadCrumbs";
import Navbar from "./navbarComponents/Navbar";
import PageProgressBar from "./navbarComponents/PageProgressBar";

import './NavbarMain.css'

function NavbarMain() {
    return (
        <div>
            <div className="navbar-main-container">
                <Navbar/>
                <PageProgressBar/>
                <BreadCrumbs/>
            </div>
        </div>
    )
}

export default NavbarMain
