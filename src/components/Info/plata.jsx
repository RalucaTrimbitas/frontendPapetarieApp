import React from "react";
import Footer from "../utils/footer";

const Plata = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header text-center">Cum plătesc?</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0" id="card-text">
            <p className="mb-0 ">
              <strong>Modalități de plată</strong>
            </p>
            <br></br>

            <p className="mb-0">
              <stron>Plata Ramburs</stron>
            </p>
            <br></br>
            <p className="mb-0">
              PapetariaDiana.ro acceptă plata ramburs (clientul plătește cash în momentul ridicării comenzii).
            </p>
            <br></br>

            <br></br>
            {/*<p className="mb-0">*/}
            {/*  {" "}*/}
            {/*  Clienții pot plăti online, cu cardul, direct pe site, în momentul*/}
            {/*  comenzii. Ca și procesator de plăți folosim EuPlatesc.ro, deci*/}
            {/*  datele dvs. vor fi procesate în siguranță.{" "}*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  {" "}*/}
            {/*  <strong>*/}
            {/*    3. Online cu card bancar prin EuPlatesc (Visa/Visa*/}
            {/*    Electron/Maestro/MasterCard)*/}
            {/*  </strong>{" "}*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  {" "}*/}
            {/*  Dacă ați ales metoda de plată " Online prin card bancar " este*/}
            {/*  necesar să completați un formular cu informațiile despre cardul*/}
            {/*  dumneavoastră în pagina securizată a procesatorului de plăți.{" "}*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  {" "}*/}
            {/*  - Plățile cu carduri de credit/debit emise sub sigla Visa și*/}
            {/*  MasterCard (Visa/Visa Electron și MasterCard/Maestro) se*/}
            {/*  efectuează prin intermediul sistemului "3-D Secure" elaborat de*/}
            {/*  organizațiile care asigură tranzacțiilor on-line același nivel de*/}
            {/*  securitate ca cele realizate la bancomat sau în mediul fizic, la*/}
            {/*  comerciant.{" "}*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  - "3-D Secure" asigură în primul rând că nici o informație legată*/}
            {/*  de cardul dumneavoastră nu este transferată sau stocată, la nici*/}
            {/*  un moment de timp, pe serverele magazinului sau pe serverele*/}
            {/*  procesatorului de plăți, aceste date fiind direct introduse în*/}
            {/*  sistemele Visa și MasterCard.*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  Important de știut! - Pentru plățile prin card bancar nu este*/}
            {/*  perceput nici un comision!*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  Online în rate egale fără dobândă prin card de cumpărături.*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  După ce veți introduce numărul de card în pagina procesatorului de*/}
            {/*  plăți, sistemul va detecta automat dacă este un card eligibil*/}
            {/*  pentru plata în rate, la una din băncile agreate de către magazin*/}
            {/*  și va afișa o listă de unde puteți alege numărul de rate dorit.*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">Start la cumpărături !</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  <strong>Notă:</strong>*/}
            {/*</p>*/}
            {/*<br></br>*/}
            {/*<p className="mb-0">*/}
            {/*  PapetariaDiana.ro nu stocheaza în vreun fel datele bancare ale*/}
            {/*  clienților. Toate operațiunile de plată online sunt realizate*/}
            {/*  exclusiv prin procesatorul EuPlatesc.ro.*/}
            {/*</p>*/}
            {/*<br></br>*/}
          </blockquote>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Plata;
