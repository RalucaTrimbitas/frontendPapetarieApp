import React from 'react';
import Footer from '../utils/footer';

const Livrare = () => {
    return (
    <React.Fragment>
    <div className="card">
      <div className="card-header text-center">Informații Livrare și Plată</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0" id="card-text">
          <p className="mb-0 ">
            <strong>Livrare</strong>
          </p>
          <br/>

          <p className="mb-0">
          Timpul de livrare al comenzii va fi confirmat in funcție de disponibilitate de catre un operator prin e-mail și/sau telefonic.
          </p>
          <br/>
          <p className="mb-0">
            Livrarea la domiciliu se face doar pe raza municipiului Blaj.
          </p>

          <br/>
          <p className="mb-0">
          <strong>Metode de Livrare</strong>
          </p>
          <br/>
          <p className="mb-0"> Curierul va aduce produsele comandate pana la ușa casei tale.</p>
          <br/>
          <p className="mb-0"> Dacă nu optezi pentru varianta de livrare la domiciliu poți ridica produsele comandate de la sediul nostru din Blaj. </p>
          <br/>
          {/*<p className="mb-0">*/}
          {/*  <strong>Plata</strong> */}
          {/*</p>*/}
          <br/>
          {/*<p className="mb-0">*/}
          {/*Platesti curierului ramburs la livrare.*/}
          {/*</p>*/}
          {/*<br/>*/}
          {/*<p className="mb-0">*/}
          {/*Platesti cu cardurile bancare acceptate in cadrul procesului de comanda.*/}
          {/*</p>*/}
          <br/>
          {/*<p className"mb-0">*/}
          {/*Tipareste si plateste factura din Contul de Client aferenta comenzii tale prin transfer bancar (OP), si trimite dovada platii la contact@papetarie.ro.*/}
          {/*</p>*/}
          <br/>
        </blockquote>
      </div>
    </div>
    <Footer/>
  </React.Fragment>
    )
}
export default Livrare;