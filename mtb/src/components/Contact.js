import React from 'react';
import '../contact.css';

function Contact() {
  return (
    <main>
      <section className="contact">
        <div>
          <h1>Contactez-moi</h1>

          <div className="adresse">
            <p>MTB Repair 74 <br />
               99 route de la poste, 74440 Taninges</p>

            <p>MTB Repair 74 <br />
               320 route du front de neige, 74260 Les Gets</p>
          </div>
          
          {/* <div className="centre">
          <div className="tel">
             <p><a href="tel:+33625060079">tél: +33 6 25 06 00 79</a></p>
            </div>
        <div className="email">
        <p><a href="mailto:mtbrepair74@gmail.com">mtbrepair74@gmail.com</a></p>
        </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}

export default Contact;