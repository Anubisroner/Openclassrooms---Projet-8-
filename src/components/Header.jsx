import Competences from './Competences';
import Quetes from './Quetes';
import Profil from './Profil';
import Separateur from '../assets/separateur-menu.png';

function Header({ openModal }) {
    return (
        <header>
            <nav>
                <div className="header-container">
                    <p>MENU</p>
                    <img src={Separateur} alt="Separateur" />
                    <div className="nav-links">
                        <button className="button" onClick={() => openModal("", <Profil />, "profilModal")}>
                            Profil
                        </button>
                        <button className="button" onClick={() => openModal("Compétences", <Competences />, "competencesModal")}>
                            Compétences
                        </button>
                        <button className="button" onClick={() => openModal("", <Quetes />, "quetesModal")}>
                            Quêtes
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
