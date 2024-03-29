import React from "react";
import Footer from '../utils/footer';

const Retur = () => {
  return (
    <React.Fragment>
    <div className="card card-info">
      <div className="card-header text-center" id="card-client">Politica de Retur</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0" id="card-text">
          <p className="mb-0 ">
            <strong>Politica de Retur</strong>
          </p>
          <br/>

          {/*<p className="mb-0">*/}
          {/*Conform legislatiei romanesti in vigoare, renuntarea la cumparare prin denuntarea unilaterala a contractului se poate face in termen de 14 zile calendaristice de la primirea produsului si este aplicabila doar consumatorilor clienti persoane fizice care au achizitionat produsul la distanta respectand conditiile O.U.G. 34/2014.*/}
          {/*</p>*/}
          {/*<br/>*/}

          {/*<p className="mb-0">*/}
          {/*Consumatorul are dreptul sa notifice in scris comerciantului ca renunta la cumparare, fara penalitati si fara invocarea unui motiv, in termen de 14 zile calendaristice de la primirea produsului sau, in cazul prestarilor de servicii, de la incheierea contractului.*/}
          {/*</p>*/}
          {/*<br/>*/}
          {/*<p className="mb-0">*/}
          {/*Incheierea contractului de vanzare-cumparare are loc in momentul emiterii facturii fiscale (acest document tine loc de contract conform legislatiei romanesti) si nu la plasarea comenzii sau la trimiterea prin email (sau alte mijloace de comunicare) a confirmarii automate de primire a comenzii.*/}
          {/*</p>*/}
          {/*<br/>*/}
          <p className="mb-0"> Produsele returnate trebuie sa fie in aceeasi stare in care au fost ridicate, cu toate accesoriile si documentele care l-au insotit, fara sa prezinte modificari fizice, lovituri, zgarieturi, etc la niciuna din elementele enumerate. Cheltuielile directe de returnare a produselor vor fi suportate de client iar rambursarea contravalorii acestora se va face in cel mult 14 de zile lucratoare de la data denuntarii si numai prin transfer bancar. </p>
          <br/>
          <p className="mb-0"> Retragerea din contract se poate face printr-o declaratie inechivoca, prin oricare din metodele urmatoare: mail, posta, telefon, SMS, verbal etc. Indiferent de metoda aleasa, alaturi de produsele pe care doriti sa le returnati, puteti atasa un formular de retragere din contract, exemplificat in modelul urmator (formularul prezentat mai jos este doar un model si nu este obligatorie redactarea sa intocmai):</p>
          <br/>
          <p className="mb-0"> Catre: </p>
          <br/>
          <p className="mb-0">
            SC Diana Servimpex SRL 
          </p>
          <br/>
          <p className="mb-0">
            Adresa: Strada Simion Barnutiu, bloc 5, scara A, Parter
          </p>
          <br/>
          <p className="mb-0">
          Va informez prin prezenta cu privire la retragerea mea din contractul referitor la vanzarea urmatoarelor produse:
          </p>
          <br/>
          <p className="mb-0">
          Produs 1:
          </p>
          <br/>
          <p className="mb-0">
          Produs 2:
          </p>
          <br/>
          <p className="mb-0">
          Ridicate la data: __ / __ / ____
          </p>
          <br/>
          <p className="mb-0">
          Numele consumatorului:
          </p>
          <br/>
          <p className="mb-0">
          Adresa consumatorului:
          </p>
          <br/>
          <p className="mb-0">
          Semnatura consumatorului:
          </p>
          <br/>
          <p className="mb-0">
          Data:
          </p>
          <br/>
          <p className="mb-0">
          Formularul de retur este doar un model și nu este obligatoriu.
          </p>
          <br/>
        </blockquote>
      </div>
    </div>
    <Footer/>
  </React.Fragment>
  );
};

export default Retur;
