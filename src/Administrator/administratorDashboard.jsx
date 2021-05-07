import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Link} from "react-router-dom";

class AdministratorDashboard extends Component {

    constructor() {
        super();
        this.state = {
            clienti: [],
            administratori: [],
            comenzi: [],
            produse: []
        }

        fetch('http://localhost:8080/client', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({clienti: json});
                    });
                } else {
                    console.log("error")
                }
            })

        fetch('http://localhost:8080/administrator', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({administratori: json});
                    });
                } else {
                    console.log("error")
                }
            })

        fetch('http://localhost:8080/comenzi-plasate', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({comenzi: json});
                    });
                } else {
                    console.log("error")
                }
            })

        fetch('http://localhost:8080/produse', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            // .then(resource => resource.blob())
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({produse: json});
                    });
                } else {
                    console.log("error")
                }
            })

    }

    handleLogout = () => {
        localStorage.clear()
    }


    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return ( 
            <React.Fragment>
            {/*<h2>Salutare, {localStorage.getItem("name")}!</h2>*/}
                <div className="container-help mt-5">
                        <div className="page-header" id="help">
                            {/*<h1>Just In Case You Need Any Help</h1>*/}
                        </div>
                        <div className="row text-center">
                            <div className="col-md-3">
                                <Link to="/adaugare-produse" className="services-circle text-center"><i className="fa fa-plus-square-o fa-3x mt-4"
                                                                                 aria-hidden="true"/></Link>
                                <h4>Adăugă produs</h4>
                            </div>
                            <div className="col-md-3">
                                <Link to="/admin/produse/accesorii-birou/agende-si-blocnotes-uri" className="services-circle text-center"><i className="fa fa-wrench fa-3x mt-4"
                                                                                 aria-hidden="true"/></Link>
                                <h4>Gestionare produse</h4>
                            </div>
                            <div className="col-md-3">
                                <Link to="/admin/vizualizare-comenzi" className="services-circle text-center"><i className="fa fa-eye fa-3x mt-4"
                                                                                 aria-hidden="true"/></Link>
                                <h4>Vizualizare comenzi</h4>
                            </div>
                            <div className="col-md-3">
                                <Link  to="/autentificare" onClick={this.handleLogout.bind(this)} className="services-circle text-center"><i className="fa fa-sign-out fa-3x mt-4"
                                                                                 aria-hidden="true"/></Link>
                                <h4>Deconectare</h4>
                            </div>
                        </div>
                </div>

                <div className="container bootstrap snippets bootdey">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="panel panel-dark panel-colorful">
                                <div className="panel-body text-center">
                                    <p className="text-uppercase mar-btm text-sm">Clienți înregistrați</p>
                                    <i className="fa fa-users fa-5x"/>
                                    <hr/>
                                        <p className="h2 text-thin"> { this.state.clienti.length}</p>
                                        {/*<small><span className="text-semibold">7%</span> Higher than yesterday</small>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="panel panel-danger panel-colorful">
                                <div className="panel-body text-center">
                                    <p className="text-uppercase mar-btm text-sm">Administratori</p>
                                    <i className="fa fa-user-secret fa-5x"/>
                                    <hr/>
                                        <p className="h2 text-thin">{this.state.administratori.length}</p>
                                        {/*<small><span className="text-semibold">*/}
                                        {/*    <GrUserAdmin/> 154</span> Unapproved*/}
                                        {/*    comments</small>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="panel panel-primary panel-colorful">
                                <div className="panel-body text-center">
                                    <p className="text-uppercase mar-btm text-sm">Comenzi</p>
                                    <i className="fa fa-shopping-cart fa-5x"/>
                                    <hr/>
                                        <p className="h2 text-thin">{this.state.comenzi.length}</p>
                                        {/*<small><span className="text-semibold"><i*/}
                                        {/*    className="fa fa-shopping-cart fa-fw"/> 954</span> Comenzi luna aceasta</small>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="panel panel-info panel-colorful">
                                <div className="panel-body text-center">
                                    <p className="text-uppercase mar-btm text-sm">Produse</p>
                                    <i className="fa fa-product-hunt fa-5x"/>
                                    <hr/>
                                        <p className="h2 text-thin">{this.state.produse.length}</p>
                                        {/*<small><span className="text-semibold"><i className="fa fa-dollar fa-fw"/> 22,675</span> Total*/}
                                        {/*    Earning</small>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
const Dashboard = withRouter(AdministratorDashboard);
export default Dashboard