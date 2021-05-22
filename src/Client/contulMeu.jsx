import React from "react";
import {Link} from "react-router-dom";
const ContulMeu = () => {
    document.body.classList = "";
    document.body.classList.add("background-general");

    return (
        <React.Fragment>
            {/*<div className="card card-panou" style={{marginTop: "80px", marginBottom: "100px", marginRight: "100px"}}>*/}
            {/*    <div className="card-header text-center" id="card-client">Panou control</div>*/}
            {/*    <div className="card-body">*/}
            {/*        <blockquote className="blockquote mb-0" id="card-text">*/}
            {/*            <p className="mb-lg-5 ">*/}
            {/*                <strong><h4>Bună, {localStorage.getItem("name")}!</h4></strong>*/}
            {/*            </p>*/}
            {/*            <p className="mb-0">*/}
            {/*                În panoul de control al contului tău poți să-ți vezi comenzile recente, să-ți administrezi adresele de livrare și de facturare și să-ți editezi parola și detaliile contului.*/}
            {/*            </p>*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*        </blockquote>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<p className="mb-lg-5">*/}
                <strong><h4 className="subtitle-circle mb-lg-5">Bună, {localStorage.getItem("name")}!</h4></strong>
            {/*</p>*/}
            <h5 className="text-center subtitle-circle">
                În panoul de control al contului tău poți să-ți vezi comenzile recente, să-ți administrezi datele personale și să-ți editezi parola și detaliile contului.
            </h5>
            <div className="container-help mt-5 mb-5">
                <div className="page-header" id="help">
                    {/*<h1>Just In Case You Need Any Help</h1>*/}
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <Link to="/contul-meu/setari-cont" className="services-circle text-center"><i className="fa fa-wrench fa-3x mt-4" aria-hidden="true"/></Link>
                        <h4 className="subtitle-circle">Setări cont</h4>
                    </div>
                    <div className="col-md-4">
                        <Link to="/contul-meu/istoric-comenzi" className="services-circle text-center"><i className="fa fa-history fa-3x mt-4"
                                                                                                aria-hidden="true"/></Link>
                        <h4 className="subtitle-circle">Istoric comenzi</h4>
                    </div>
                    <div className="col-md-4">
                        <Link to="/contul-meu/actualizare-date" className="services-circle text-center"><i className="fa fa-home fa-3x mt-4"
                                                                                                         aria-hidden="true"/></Link>
                        <h4 className="subtitle-circle">Actualizare date</h4>
                    </div>
                    {/*<div className="col-md-3">*/}
                    {/*    <Link  to="/autentificare" onClick={handleLogout()} className="services-circle text-center"><i className="fa fa-sign-out fa-3x mt-4"*/}
                    {/*                                                                                                                 aria-hidden="true"/></Link>*/}
                    {/*    <h4>Deconectare</h4>*/}
                    {/*</div>*/}
                </div>
            </div>


        </React.Fragment>
    );
};

export default ContulMeu;