import React from 'react';
import insta from '../src/images/instagram.png';
import facebook from '../src/images/facebook.png';
import logo2 from '../src/images/logo2.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer>
  <Link to="/mtb_repair_74" className="lien-icone">
    <img src={logo2} alt="Mtbrepair74" height="70px" width="auto" />
  </Link>

  <div>
    <a
      href="https://www.facebook.com/people/MTB-Repair-74/100066453647623/"
      target="_blank"
      rel="noopener noreferrer"
      className="lien-icone"
    >
      <img src={facebook} alt="facebook" />
    </a>
    <a
      href="https://www.instagram.com/mtb_repair_74/?hl=fr"
      target="_blank"
      rel="noopener noreferrer"
      className="lien-icone"
    >
      <img src={insta} alt="instagram" />
    </a>
  </div>
</footer>

  );
}

export default Footer;