import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
function Header(){
    return (
        <header className="header">
            <nav className="header__navbar">
                <img src={Logo} alt="Kasa logo" className="header__logo" />
                <div className="header__navbar-links">
                    <Link to="/" className="header__link">Accueil</Link>
                    <Link to="/propos" className="header__link">A Propos</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;