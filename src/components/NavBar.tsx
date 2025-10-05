import NavButton from './NavButton';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        
        <div className='header'>
            <div className='name-logo'>
                <img src='/ftlogoiconpng.png' alt="logo" className='logo' />
                <h1>Friendly Transport Ltd.</h1>
            </div>
            <div className='nav-bar'>
             <NavLink to="/" end>
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
            </div>
        </div>
    );
}