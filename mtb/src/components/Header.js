import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../src/images/logo2.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <Link to="/mtb_repair_74" className="lien-icone">
          <img src={logo2} alt="mtbrepair74" height="125px" width="auto" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? '✖' : 'Menu ☰'} 
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
     
          <div className={`close-icon ${menuOpen ? 'visible' : ''}`} onClick={toggleMenu}>✖</div>
          <Link className="nav" to="/mtb_repair_74" onClick={closeMenu}>Accueil</Link>
          <Link className="nav" to="/Shopt" onClick={closeMenu}>Shop Taninges</Link>
          <Link className="nav" to="/Shopg" onClick={closeMenu}>Shop Les Gets</Link>
          <Link className="nav" to="/Service" onClick={closeMenu}>Services</Link>
          <Link className="nav" to="/Marque" onClick={closeMenu}>Marques</Link>
          <Link className="nav" to="/Contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
