// import AvatarImage from '../assets/avatar.png';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // logique pour envoyer les données du formulaire
    };

    return (
        <div className="contact-container">
            <div className="logo-container">
                <p>logo-mail</p>
                <p>logo-telephone</p>
                {/* <img src={AvatarImage} alt="Avatar" className="avatar" /> */}
            </div>
            <form onSubmit={handleSubmit}>
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
        </div>
    );
}

export default Contact;

