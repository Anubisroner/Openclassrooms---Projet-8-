import ContactLogo from '../assets/contact-logo.png'; 
import Contact from './Contact';

function PanneauLateral({ openModal }) {
    return (
        <div className="panneau-lateral">
            <div className="contact-section">
                <h2>Contact</h2>
                <div className="contact-logo-container" onClick={() => openModal("Contact", <Contact />)}>
                    <img src={ContactLogo} alt="Contact Logo" className="contact-logo" />
                </div>
            </div>
        </div>
    );
}

export default PanneauLateral;
