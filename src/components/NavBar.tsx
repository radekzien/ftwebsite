import NavButton from './NavButton';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        
        <div className='header'>
            <div className='nav-bar'>
                <div className='name-logo'>
                    <NavLink to="/" end>
                        <img src='/ftlogoiconpng.png' alt="logo" className='logo' /><img src='/ftlogotextpng.png' alt="logotext" className='logo-text' />
                    </NavLink>
                </div>
            <NavLink to="/About">
                {({ isActive }) => <NavButton label="About Us" isActive={isActive} />}
            </NavLink>
            <NavLink to="/Clients">
                {({ isActive }) => <NavButton label="Clients" isActive={isActive} />}
            </NavLink>
            <NavLink to="/Contact">
                {({ isActive }) => <NavButton label="Contact" isActive={isActive} />}
            </NavLink>
            </div>
        </div>
    );
}