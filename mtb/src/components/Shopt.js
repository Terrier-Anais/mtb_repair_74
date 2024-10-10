import React from 'react';
import shopt from '../src/images/shoptaninges.jpg';
import '../magasin.css';

function Shopt() {
  return (
    <main>
      <section className="accueil-introduction">
        <div className="taninges">
        <h1>Bienvenue à l'Atelier Taninges</h1>
    <p>
        Votre atelier de réparation de VTT est là pour vous accompagner tout au long de l'année. 
        Que vous soyez un passionné de cyclisme ou un simple amateur, nous sommes ici pour garantir 
        que votre vélo soit toujours prêt à prendre la route.
    </p>
    <p>
        <strong>Adresse :</strong> 99 rue de la Poste, 74440 Taninges
    </p>
        </div>
        <img src={shopt} alt="shop taninges" />
      </section>
      <section className="horaire">
        <h2>Horaire d'ouverture</h2>
        <div className="table-responsive"> {/* Ajout d'un conteneur pour rendre le tableau responsive */}
          <table>
            <thead>
              <tr>
                <th>Jour</th>
                <th>Heure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>Fermé</td>
              </tr>
              <tr>
                <td>Mardi</td>
                <td>9h-12h/14h-18h</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>9h-12h/14h-18h</td>
              </tr>
              <tr>
                <td>Jeudi</td>
                <td>9h-12h/14h-18h</td>
              </tr>
              <tr>
                <td>Vendredi</td>
                <td>9h-12h/14h-18h</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>9h-12h/14h-18h30</td>
              </tr>
              <tr>
                <td>Dimanche</td>
                <td>Fermé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
export default Shopt;
