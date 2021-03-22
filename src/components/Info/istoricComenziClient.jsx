

import React, {Component} from "react";
import SidebarClient from "../SideBars/sidebarClient";
import {AiOutlineHome, FaSignOutAlt, FiSettings, RiHistoryFill} from "react-icons/all";
import Footer from "../utils/footer";


class IstoricComenziClient extends Component {

    render() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row" >
                    <div
                        className="col-md-3 col-xs-1 p-l-0 p-r-0 in"
                        id="sidebar"
                        style={{paddingLeft: "0px", marginTop: "100px"}}
                    >
                        <div className="list-group panel">
                            <a
                                href="/setari-cont"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <FiSettings style={{marginRight: "10px"}}></FiSettings>
                                <span className="hidden-sm-down">Setări cont</span>{" "}
                            </a>

                            <a
                                href="/istoric-comenzi"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <RiHistoryFill style={{marginRight:"10px"}}></RiHistoryFill>
                                <span className="hidden-sm-down">Istoric comenzi</span>
                            </a>
                            <a
                                href="/adrese-client"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                {/*<i className="fa fa-book"></i>{" "}*/}
                                <AiOutlineHome  style={{marginRight:"10px"}}></AiOutlineHome>
                                <span className="hidden-sm-down">Adrese</span>
                            </a>
                            <a
                                href="/autentificare"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <FaSignOutAlt style={{marginRight:"10px"}}></FaSignOutAlt>
                                <span className="hidden-sm-down">Deconectare</span>
                            </a>

                        </div>
                    </div>
                    <main className="col-md-8 col-xs-11 ml-5">
                        <div className="card">
                            <div className="card-header text-center" id="card-client">Istoric comenzi</div>
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
                </div>
            </div>

            <Footer></Footer>
        </React.Fragment>
    )
    }
}
export default IstoricComenziClient;