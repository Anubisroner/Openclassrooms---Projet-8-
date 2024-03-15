import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import LinkedinLogo from '../assets/logo-linkedin.png';


const Credits = () => {
    return (
        <div className="credits-container">
            <div className="logo-credits-container">
                <ul>
                    <li>
                        <a href="https://drive.google.com/file/d/1fY89g6fOFj_GRgff4jmwQCSPPOjfrUBZ/view?usp=sharing" target="_blank">
                            <FontAwesomeIcon icon={faFileInvoice} className="logo-credits" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Anubisroner" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="logo-credits" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/farid-machrouh-675923165/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="logo-credits" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="texte-credits-container">
                <div class="msg-container">
                    <div class="msg">
                        <p className="titre-credits">Designer</p>
                        <p>Machrouh Farid</p>
                        <p className="titre-credits">Developper</p>
                        <p>Machrouh Farid</p>
                        <p className="titre-credits">Chara design</p>
                        <p>Lexica - IA</p>
                        <p className="titre-credits">Background</p>
                        <p>Lexica - IA</p>
                        <p className="titre-credits">Techno</p>
                        <p>React, Sass</p>
                        <p className="titre-credits">Formation</p>
                        <p>OpenclassRooms, 2023-2024</p>
                        <br />
                        <p className="titre-credits">Portfolio - 2024</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="titre-credits">Merci d'avoir regardé !</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Credits;
