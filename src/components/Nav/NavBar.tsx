import NavButton from './NavButton';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
import { Menu, X} from 'lucide-react';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className='header'>
            <div className='nav-bar'>
                <div className='name-logo'>
                    <NavLink to="/" end>
                        <img src='/ftlogoiconpng.png' alt="logo" className='logo' /><img src='/ftlogotextpng.png' alt="logotext" className='logo-text' />
                    </NavLink>
                </div>
                <NavLink to="/">
                    {({ isActive }) => <NavButton label="Home" isActive={isActive} />}
                </NavLink>
                <NavLink to="/About">
                    {({ isActive }) => <NavButton label="About Us" isActive={isActive} />}
                </NavLink>
                <NavLink to="/Clients">
                    {({ isActive }) => <NavButton label="Clients" isActive={isActive} />}
                </NavLink>
                <NavLink to="/Contact">
                    {({ isActive }) => <NavButton label="Contact" isActive={isActive} />}
                </NavLink>


                <button
                    className='menuToggle'
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                
                <nav className={`mobileLinks ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About Us</NavLink>
                <NavLink to="/Clients">Clients</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                </nav>
            </div>
        </div>
    );
}