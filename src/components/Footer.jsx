import Logo from '../assets/logo.png';
import '../styles/__Style.scss';


function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo" className="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
