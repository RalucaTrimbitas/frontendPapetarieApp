import React from 'react';
import Footer from '../utils/footer';

const Livrare = () => {
    return (
    <React.Fragment>
    <div class="card">
      <div class="card-header text-center">Informații Livrare și Plată</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0" id="card-text">
          <p class="mb-0 ">
            <strong>Livrare</strong>
          </p>
          <br></br>

          <p class="mb-0">
          Timpul de livrare al comenzii va fi confirmat in functie de disponibilitate de catre un operator prin e-mail si/sau telefonic.
          </p>
          <br></br>

          <p class="mb-0">
            Costul de livrare este de 22 RON si se calculeaza doar la comenzi cu o valoare mai mica de 199 RON, livrata prin Fan Courier. Consumatorul are dreptul sa notifice in scris comerciantului ca renunta la cumparare, fara penalitati si fara invocarea unui motiv, in termen de 14 zile calendaristice de la primirea produsului sau, in cazul prestarilor de servicii, de la incheierea contractului.
          </p>
          <br></br>
          <p class="mb-0"> 
          Comenzile livrate prin Sameday este de 18 lei si se calculeaza doar la comenzi cu o valoare mai mica de 199 RON.
            </p>
          <br></br>
          <br></br>
          <br></br>
          <p class="mb-0"> 
          <strong>Metode de Livrare</strong>
          </p>
          <br></br>
          <p class="mb-0"> Curierul va aduce produsele comandate pana la usa casei tale.</p>
          <br></br>
          <p class="mb-0"> Poti ridica produsele comandate de la sediul nostru din Blaj. </p>
          <br></br>
          <p class="mb-0">
            <strong>Plata</strong> 
          </p>
          <br></br>
          <p class="mb-0">
          Platesti curierului ramburs la livrare.
          </p>
          <br></br>
          <p class="mb-0">
          Platesti cu cardurile bancare acceptate in cadrul procesului de comanda.
          </p>
          <br></br>
          <p class="mb-0">
          Tipareste si plateste factura din Contul de Client aferenta comenzii tale prin transfer bancar (OP), si trimite dovada platii la contact@papetarie.ro.
          </p>
          <br></br>
        </blockquote>
      </div>
    </div>
    <Footer></Footer>
  </React.Fragment>
    )
}
export default Livrare;