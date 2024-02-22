import Avatar from '../assets/avatar.png';
import Competences from './Competences';
import Quetes from './Quetes';
import Profil from './Profil';
import '../styles/__Styles.scss';

function Header({ openModal }) {
    return (
        <header>
            <nav>
                <div className="header-container">
                    <div className="avatar-container">
                        <img src={Avatar} alt="Avatar" className="avatar" />
                    </div>
                    <div className="nav-links">
                        <button className="button" onClick={() => openModal("Mes compétences", <Competences />)}>
                            Mes compétences
                        </button>
                        <button className="button" onClick={() => openModal("Mes quêtes", <Quetes />)}>
                            Mes quêtes
                        </button>
                        <button className="button" onClick={() => openModal("Profil", <Profil />)}>
                            Profil
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
