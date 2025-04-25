import { Link } from "react-router-dom"
import "../css/Navbar.css"
import logo from '../images/pokedex.png';
export default function Navbar() {
     return (
        <nav className="navbar">
        <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/about">PokemonGo</Link></li>
          
        </ul>
        </nav>
        
      
    )
}