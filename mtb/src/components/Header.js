// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../src/images/logo2.png';
function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="lien-icone">
          <img src={logo2} alt="mtbrepair74" height="125px" width="auto" />
        </Link>
        <div>
         <Link className="nav" to="/">Accueil</Link>
          <Link className="nav" to="/Shopt">Shop Taninges</Link>
          <Link className="nav" to="/Shopg">Shop Les Gets</Link>
          <Link className="nav" to="/Service">Services</Link>
          <Link className="nav" to="/Marque">Marques</Link>
          <Link className="nav" to="/Contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;


