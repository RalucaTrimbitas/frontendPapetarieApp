import React from 'react';
import Footer from '../utils/footer';

const ProtectiaDatelor = () => {
  document.body.classList = "";
  document.body.classList.add("background-general");
    return (
    <React.Fragment>
      {/*<NavBar/>*/}
    <div className="card card-info">
      <div className="card-header text-center" id="card-client">Politica Privind Protecția Datelor Personale</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0" id="card-text">
          <p className="mb-0"><strong>Datele Personale</strong></p>
          <br/>
          <p className="mb-0">
            Prin inregistrarea ca utilizator al acestei aplicatii va vom
            solicita o serie de date personale, precum numele si prenumele,
            adresa de email, dar si alte informatii cu caracter
            personal, care sa permita identificarea dvs. ca utilizator al
            serviciului oferit de papetarie.
          </p>
          <br/>
          <p className="mb-0">
            Papetaria Diana nu solicita si nu stocheaza nici un fel de
            informatii referitoare la cardul sau cardurile bancare ale
            Clientului.
          </p>
          <br/>
          <p className="mb-0">
            <strong>Politica Privind Protecția Datelor Personale</strong>
          </p>
          <br/>
          <p className="mb-0">
            Conform cerintelor Legii nr. 677/2001 pentru protectia persoanelor
            cu privire la prelucrarea datelor cu caracter personal si libera
            circulatie a acestor date, modificata si completata,
            www.papetariaDiana.ro are obligatia de a administra in conditii de
            siguranta si numai pentru scopurile specificate, datele personale
            pe care ni le furnizati despre dumneavoastra.
          </p>
          <br/>
          <p className="mb-0">
            Scopul colectarii datelor este: informarea utilizatorilor privind
            situatia contului, informarea utilizatorilor privind evolutia si
            starea comenzilor, evaluarea produselor si serviciilor oferite,
            pentru reclama, marketing si publicitate.
          </p>
          <br/>
        </blockquote>
      </div>
    </div>
    <Footer/>
  </React.Fragment>
    )
}
export default ProtectiaDatelor;