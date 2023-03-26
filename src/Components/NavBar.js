import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
function NavBar() {
    const navRef = useRef()
    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <header>

            <nav ref={navRef}>
               

                    <a href="/#" className="navElem">Home</a>
                    <a href="/#" className="navElem">Activities</a>
                    <a href="/#" className="navElem">Events</a>
                    <a href="/#" className="navElem">Hall of fame</a>
                    <a href="/#" className="navElem">Shop</a>
                    <a href="/#" className="navElem">Contact Us</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes></FaTimes>

                    </button>
                    
                
            </nav>
            <button className="nav-btn nav-menu-btn" onClick={showNavBar}>
                <FaBars></FaBars>
            </button>


        </header>

    );
}
export default NavBar;