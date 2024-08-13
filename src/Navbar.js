import { useState } from "react";
import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return ( 
        <div className="nav">
            <div>
                <h1 id="Titulo">Templo de Ártemis</h1>
            </div>
            <div id="caixa2">
                <button className="menuButton" onClick={toggleMenu}>
                ☰
                </button>
                {menuOpen && (
                <div className="menuLinks">
                    <Link to="/" className="Redirecionandos">Página Principal</Link>
                    <Link to="/Reportagem" className="Redirecionandos">Reportagem</Link>
                    <Link to="/Viagens" className="Redirecionandos">Viagens</Link>
                    <Link to="/SobreNos" className="Redirecionandos">Sobre Nós</Link>
                </div>
                )}
                <div id="Originais">
                    <Link to="/" className="Redirecionandos">Página Principal</Link>
                    <Link to="/Reportagem" className="Redirecionandos">Reportagem</Link>
                    <Link to="/Viagens" className="Redirecionandos">Viagens</Link>
                    <Link to="/SobreNos" className="Redirecionandos">Sobre Nós</Link>
                </div>

            </div>

            
        </div>
     );
}
 
export default Navbar;