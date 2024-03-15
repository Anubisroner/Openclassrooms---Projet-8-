import React, { useState } from 'react';
import MailLogo from '../assets/logo-mail.png';
import TelLogo from '../assets/logo_tel.png';
import TelSonneLogo from '../assets/logo_tel_sonne.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [telLogo, setTelLogo] = useState(TelLogo);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (event) => {
        event.preventDefault();
        try {
            await emailjs.sendForm('service_0xfbsoe', 'template_hke6yev', event.target, 'gLpsQxbBpUGoUbdIZ');
            setConfirmationMessage('Votre message a été envoyé avec succès.');
            setErrorMessage('');
        } catch (error) {
            setConfirmationMessage('');
            setErrorMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
        }
        setTimeout(() => {
            setConfirmationMessage('');
            setErrorMessage('');
        }, 5000);
    };

    return (
        <div className="contact-container">
            <div className="logo-container">
                <div className="contact-info">
                    <img src={MailLogo} alt="Mail Logo" className="mail-logo" />
                    <p>f.machrouh@gmail.com</p>
                </div>
                <div className="contact-info">
                    <img 
                        src={telLogo} 
                        alt="Tel Logo" 
                        className="tel-logo"
                        onMouseEnter={() => setTelLogo(TelSonneLogo)} 
                        onMouseLeave={() => setTelLogo(TelLogo)} 
                    />
                    <p>07-83-27-95-38</p>
                </div>
            </div>
            <form onSubmit={sendEmail}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="sujet">Sujet</label>
                <input type="text" id="sujet" name="sujet" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Envoyer" />
            </form>
            {confirmationMessage && <p className="confirmation">{confirmationMessage}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
}

export default Contact;
