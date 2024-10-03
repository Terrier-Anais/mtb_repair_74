import React from 'react';
import shopt from '../src/images/shoptaninges.jpg';
import '../magasin.css';

function Shopt() {
  return (

<main>
    <section class="accueil-introduction">
        <div class="taninges">
            <h1>Atelier Taninges</h1>
            <p>Votre atelier de réparation de VTT, vous accueil à Taninges toute l'année.
            </p>

            <p>99 rue de la poste, 74440 Taninges</p>
        </div>
        <img src={shopt} alt="shop taninges"/>
    </section>
    <section class="horaire">
        <h2>Horaire d'ouverture</h2>
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
    </section>
</main>
  );
}
export default Shopt;