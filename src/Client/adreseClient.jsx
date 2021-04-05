import React, {Component} from "react";
import SidebarClient from "../SideBars/sidebarClient";
import {AiOutlineHome, FaSignOutAlt, FiSettings, RiHistoryFill} from "react-icons/all";
import Footer from "../utils/footer";


class AdreseClient extends Component {

    render() {
        return (
            <React.Fragment>
                        <main className="col-md-12 col-xs-11">
                            <div className="card">
                                <div className="card-header text-center" id="card-client">Adrese</div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0" id="card-text">
                                        <p className="mb-0 ">
                                            <strong>Livrare</strong>
                                        </p>
                                        <br></br>

                                        <p className="mb-0">
                                            Timpul de livrare al comenzii va fi confirmat in functie de disponibilitate
                                            de catre un operator prin e-mail si/sau telefonic.
                                        </p>
                                        <br></br>

                                        <p className="mb-0">
                                            Costul de livrare este de 22 RON si se calculeaza doar la comenzi cu o
                                            valoare mai mica de 199 RON, livrata prin Fan Courier. Consumatorul are
                                            dreptul sa notifice in scris comerciantului ca renunta la cumparare, fara
                                            penalitati si fara invocarea unui motiv, in termen de 14 zile calendaristice
                                            de la primirea produsului sau, in cazul prestarilor de servicii, de la
                                            incheierea contractului.
                                        </p>
                                        <br></br>
                                        <p className="mb-0">
                                            Comenzile livrate prin Sameday este de 18 lei si se calculeaza doar la
                                            comenzi cu o valoare mai mica de 199 RON.
                                        </p>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <p className="mb-0">
                                            <strong>Metode de Livrare</strong>
                                        </p>
                                        <br></br>
                                        <p className="mb-0"> Curierul va aduce produsele comandate pana la usa casei
                                            tale.</p>
                                        <br></br>
                                        <p className="mb-0"> Poti ridica produsele comandate de la sediul nostru din
                                            Blaj. </p>
                                        <br></br>
                                        <p className="mb-0">
                                            <strong>Plata</strong>
                                        </p>
                                        <br></br>
                                        <p className="mb-0">
                                            Platesti curierului ramburs la livrare.
                                        </p>
                                        <br></br>
                                        <p className="mb-0">
                                            Platesti cu cardurile bancare acceptate in cadrul procesului de comanda.
                                        </p>
                                        <br></br>
                                        <p className="mb-0">
                                            Tipareste si plateste factura din Contul de Client aferenta comenzii tale
                                            prin transfer bancar (OP), si trimite dovada platii la contact@papetarie.ro.
                                        </p>
                                        <br></br>
                                    </blockquote>
                                </div>
                            </div>
                        </main>

            </React.Fragment>
        )}
}
export default AdreseClient;