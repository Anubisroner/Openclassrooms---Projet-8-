import React, { useState } from 'react';
import Contact from './Contact';
import Credits from './Credits';
import ContactLogo from '../assets/contact-logo.png';
import LivreLogo from '../assets/livre.png';
import LivreOuvertLogo from '../assets/livre_ouvert.png';

function PanneauLateral({ openModal }) {
    const [livreLogo, setLivreLogo] = useState(LivreLogo);

    return (
        <div className="panneau-lateral">
            <div className="contact-section">
                <div className="contact-logo-container" onClick={() => openModal("Contact", <Contact />, "contact-modal")}>
                    <img src={ContactLogo} alt="Contact Logo" className="contact-logo" />
                </div>
            </div>
            <div className="credits-section">
                <div className="contact-logo-container" onClick={() => openModal("Crédits", <Credits />, "credit-modal")}>
                    <img
                        src={livreLogo}
                        alt="Livre Logo"
                        className="livre-logo"
                        onMouseEnter={() => setLivreLogo(LivreOuvertLogo)}
                        onMouseLeave={() => setLivreLogo(LivreLogo)}
                    />
                </div>
            </div>
        </div>

    );
}

export default PanneauLateral;
