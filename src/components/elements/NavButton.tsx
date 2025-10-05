import React from "react";

interface NavButtonProps {
    label: string;
    onClick: () => void;
    isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick, isActive }) => {
    return (
        <button
            className={`nav-button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default NavButton;