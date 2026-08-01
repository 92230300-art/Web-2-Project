import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login.js';
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contact from '../Pages/Contact.js';
import Register from '../Pages/Register.js';

function Header() {
    return (
        <div>
            <nav className="Header">
                <div className="logo"> Sol Events Planner</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                    {/*<li><a href="Home.html">Home</a></li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Contact.html">Contact</a></li>
                    <li><a href="Login.html">Login</a></li>
                    <li><a href="Register.html">Register</a></li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default Header;