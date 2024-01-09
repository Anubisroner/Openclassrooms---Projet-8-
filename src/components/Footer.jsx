import React from 'react';
import Logo from '../assets/logo.png';
import '../styles/__Style.scss';


function Footer() {
    return (
        <div className="footer-container">
            <img src={Logo} alt="Logo" className="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
