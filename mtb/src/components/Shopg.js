import React from 'react';
import shopg from '../src/images/lesgets.jpeg';
import '../magasin.css';

function Shopg() {
  return (

<main>
    <section class="accueil-introduction">
        <div class="taninges">
            <h1>Atelier Les Gets</h1>
            <p>Votre atelier de réparation de VTT, vous accueil aux Gets de début juin à mi-septembre.
            </p>

            <p>320 route du front de neige, 74260 Les Gets</p>
        </div>
        <img src={shopg} alt="shop taninges"/>
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
        <td>9h-18h30</td>
    </tr>
    <tr>
        <td>Mardi</td>
        <td>9h-18h30</td>
    </tr>
    <tr>
        <td>Mercredi</td>
        <td>9h-18h30</td>
    </tr>
    <tr>
        <td>Jeudi</td>
        <td>9h-18h30</td>
    </tr>
    <tr>
        <td>Vendredi</td>
        <td>9h-18h30</td>
    </tr>
    <tr>
        <td>Samedi</td>
        <td>9h-18h30</td>
    </tr>
    <tr>
        <td>Dimanche</td>
        <td>9h-18h30</td>
    </tr>
</tbody>
</table>
    </section>
</main>
  );
}
export default Shopg;