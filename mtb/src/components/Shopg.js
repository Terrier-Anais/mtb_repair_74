import React from 'react';
import shopg from '../src/images/lesgets.jpeg';
import '../magasin.css';

function Shopg() {
  return (

<main>
    <section className="accueil-introduction">
        <div className="taninges">
            <h1>Atelier Les Gets</h1>
            <p>
    Bienvenue à votre atelier de réparation de VTT ! Nous vous accueillons aux Gets 
    de début juin à mi-septembre, prêts à vous fournir un service de qualité pour 
    garantir que votre vélo soit toujours en parfait état.
</p>
            <p><strong>Adresse :</strong>320 route du front de neige, 74260 Les Gets</p>
        </div>
        <img src={shopg} alt="shop taninges"/>
    </section>
    <section className="horaire">
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