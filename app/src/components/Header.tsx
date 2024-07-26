import React from 'react';
import logo from '../assets/logo.png';
import '../css/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Firm Finder Logo" className="logo" />
        </div>
    );
};

export default Header;
