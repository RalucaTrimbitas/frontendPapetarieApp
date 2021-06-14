import React from "react";
import Footer from "../utils/footer";

const Termeni = () => {
  return (
    <React.Fragment>
      <div className="card card-info">
        <div className="card-header text-center" id="card-client">Termeni și Condiții</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0" id="card-text">
            <p className="mb-0 ">
              <strong>Despre noi:</strong>
            </p>
            <br/>
            <p className="mb-0">
              Site-ul www.papetariaDiana.ro se află in proprietatea și
              administrarea SC Diana Servimpex SRL, cu sediul în Blaj
              Str. Simion Bărnuțiu Bl. 5, Scara A, Parter
            </p>
            <br/>
            <p className="mb-0">
              {" "}
              <strong>Contact:</strong>
            </p>
            <br/>
            <p className="mb-0"> Program de lucru: L- V 08:00 – 16:00 </p>
            <br/>
            <p className="mb-0"> Departamentul vânzări: +40 751 215 309 </p>
            <br/>
            <p className="mb-0"> papetariadiana@gmail.com </p>
            <br/>
            <p className="mb-0"> Suport tehnic: +40 751 639 975 </p>
            <br/>
            <p className="mb-0">
              {" "}
              Folosirea acestui site implică acceptarea termenilor si
              conditiilor de mai jos. Recomandăm citirea cu atenție a acestora.
              SC Diana Servimpex SRL își asumă dreptul de a modifica aceste
              prevederi fără o altă notificare.
            </p>
            <br/>
            <p className="mb-0">
              <strong>Inregistrarea ca utilizator</strong>{" "}
            </p>
            <br/>
            <p className="mb-0">
              {" "}
              Aplicația poate fi accesă în mod gratuit, iar simpla
              navigare în paginile acestuia nu este condiționată de
              înregistrarea ca utilizator (crearea unui cont de utilizator).
            </p>
            <br/>
            <p className="mb-0">
              Pentru a beneficia însă de anumite servicii oferite de magazinul
              online, precum rezervarea produselor oferite de acesta sau verificarea
              situatiei unor comenzi proprii, va trebui să vă înregistrați ca
              utilizator (să vă creați un cont de utilizator). Înregistrarea ca
              utilizator presupune acceptarea prealabilă de către dvs. a
              termenilor si condițiilor de utilizare a www.papetariaDiana.ro și
              a Politicii Privind Protectia Datelor Personale a acestuia. Aceste
              reglementari constituie baza contractuala a raporturilor dintre
              utilizatori si societate.
            </p>
            <br/>
            <p className="mb-0">
              Intrucat prevederile termenilor si condițiilor de utilizare și ai
              Politicii Privind Protectia Datelor Personale pot fi modificate,
              vă rugam să le revedeți periodic. În condițiile în care nu veți
              mai fi de acord cu prevederile acestora, vă rugăm să nu mai
              accesați/folosiți serviciile oferite de papetărie.
            </p>
            <br/>
            <p className="mb-0">
              Daca folositi informatii din acest site, sunteti responsabil cu
              privire la pastrarea confidențialității datelor de acces în contul
              dumneavoastră de utilizator și sunteți de acord să vă asumați
              responsabilitatea pentru toate activitățile efectuate din contul
              dumneavoastră de utilizator, creat pe site.
            </p>
            <br/>
            <p className="mb-0">
              Papetăria Diana își rezervă dreptul de a închide conturi de
              utilizatori, de a modifica sau elimina texte, imagini,
              hyperlinkuri, sau de a refuza vânzarea de produse, la propria sa
              discreție.
            </p>
            <br/>
          </blockquote>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Termeni;
