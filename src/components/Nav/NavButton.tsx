import React from "react";
import './NavButton.css';

interface NavButtonProps {
    label: string;
    isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ label, isActive }) => {
    return (
        <div
            className={`nav-button ${isActive ? 'active' : ''}`}
        >
            {label}
        </div>
    );
}

export default NavButton;