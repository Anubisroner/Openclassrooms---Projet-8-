import Portrait from '../assets/portrait.png'; 
import '../styles/__Styles.scss';

const Profil = () => {
    return (
        <div className="profil-container">
            <img src={Portrait} alt="Portrait" />
            <p>Bonjour, je m'appelle Farid Machrouh...</p>
        </div>
    );
}

export default Profil;
