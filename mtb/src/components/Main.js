import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <main>
      <section id="main-image">
        <div className="wrapper">
          <h2>Offrez à votre VTT l'entretien professionnel qu'il mérite</h2>
          <Link to="/Contact" className="button-1">Contact</Link>
        </div>
      </section>

      <section id="steps">
        <div className="wrapper">
          <ul>
            <li id="step-1">
              <h4>Révision amortisseurs</h4>
              <p>Faites réviser vos fourches et amortisseurs par un professionnel de confiance</p>
            </li>
            <li id="step-2">
              <h4>Montage vélo neuf</h4>
              <p>Assemblage, lubrification, et serrage</p>
            </li>
            <li id="step-3">
              <h4>Montage Frein Hope</h4>
              <p>Faites évoluer votre vélo avec des nouveaux freins</p>
            </li>
            <div className="clear"></div>
          </ul>
        </div>
      </section>

      <section id="possibilities">
        <div className="wrapper">
          <div className="overlay">
          <h4>Atelier Taninges</h4>
          <p><small>Magasin ouvert à l'année</small></p>
          <article className="postan">
          <Link to="/shopt" className="button-2">Shop</Link>
          </article>
          </div>

          <div className="overlay">
          <h4>Atelier Les Gets</h4>
          <p><small>Ouverture saisonnière </small></p>
          <article className="posgets">
          <Link to="/shopg" className="button-2">Shop</Link>
           </article>
          </div>

          <div className="clear"></div>
        </div>
      </section>
    </main>
  );
}

export default Main;


