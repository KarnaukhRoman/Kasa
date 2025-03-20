import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg';
import './Header.scss'
function Header(){
    return (
        <header className="kasa-header">
            <nav className="kasa-navigation">
                <img src={Logo} alt="Kasa logo" className="logo" />
                <div className="nav-links">
                    <Link to="/" className="link">Accueil</Link>
                    <Link to="/propos" className="link">A Propos</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;