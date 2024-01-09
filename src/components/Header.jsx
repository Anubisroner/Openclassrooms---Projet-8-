import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/__Style.scss';

function Header() {
    return (
        <header>
            <nav>
                <div className="header-container">
                    <div className="logo-container">
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
                    <div className="nav-links">
                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/APropos">A Propos</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
