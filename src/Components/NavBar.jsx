import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar-brand">
                <Link to="/">🎬 Movie App</Link>
            </div>
            <nav className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </nav>
        </header>
    );
}

export default NavBar;
