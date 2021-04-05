import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import SidebarCategorii from "../SideBars/sidebarCategorii";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../utils/footer";


export class ProduseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            produse: []
        };

        console.log(this.props.match.params.id)

        this.renderProduse = this.renderProduse.bind(this);

        fetch('http://localhost:8080/produse', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({produse: json});
                    });
                    // LOGIN PERSISTANCE
                } else {
                    console.log("error")
                }
            })
    }

    componentDidMount() {
        // this.props.history.replace("/produse/accesorii-birou/:id");
    }


    renderProduse = (produs) => {
        const {codDeBare,denumire,pret,descriere,src} = produs;
        return (
                <div className="card card-produse" key={codDeBare}>
                    <Link to={`/produse/detalii/${codDeBare}`}>
                        <img src={src} alt="imagine-produs" />
                    </Link>
                    <div className="content">
                        <h4>
                            <Link to={`/produse/detalii/${codDeBare}`} onClick={localStorage.setItem("codDeBare", codDeBare)} style={{color:"#4b1515de"}}>{denumire}</Link>
                        </h4>
                        <span>{pret} lei</span>
                        <p>{descriere}</p>
                        <button>Adaugă în coș</button>
                    </div>
                </div>
        )
    }

    renderCategoriiProduse(text) {
        return (
            // <React.Fragment>
            //     <div className="container-fluid">
            //     <div className="row">
            //         <div className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in">
            //             <SidebarCategorii show={this.show}/>
            //         </div>
            //         <div className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2" id="produs">
            //         {this.state.produse
            //             .filter(item => {
            //                 return item.idCategorieProdus === text
            //             })
            //             .map(produs => this.renderProduse(produs))}
            //         </div>
            //     </div>
            //     </div>
            //     <Footer/>
            //
            // </React.Fragment>


            <Container fluid>
                <Row>
                    <Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
                        <SidebarCategorii show={this.show}/>
                    </Col>
                    <Col className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2" id="produs">
                        {this.state.produse
                            .filter(item => {
                                return item.idCategorieProdus === text
                            })
                            .map(produs => this.renderProduse(produs))}
                    </Col>
                    <Footer/>
                </Row>
            </Container>
        )
    }

    render() {

        //Categoria 1 -  Accesorii de birou
        if (this.props.match.params.id === "accesorii-birou") {
            return this.renderCategoriiProduse("1")
        }
        if (this.props.match.params.id === "agende-si-blocnotes-uri") {
            // this.props.history.replace("/produse/accesorii-birou/agende-si-blocnotes-uri");
            return this.renderCategoriiProduse("1.1")
        }
        if (this.props.match.params.id === "bibliorafturi") {
            return this.renderCategoriiProduse("1.2")
        }
        if (this.props.match.params.id === "calculatoare-birou-si-stiintifice") {
            return this.renderCategoriiProduse("1.3")
        }
        if (this.props.match.params.id === "capsatoare-perforatoare") {
            return this.renderCategoriiProduse("1.4")
        }
        if (this.props.match.params.id === "dosare-mape-si-folii") {
            return this.renderCategoriiProduse("1.5")
        }
        if (this.props.match.params.id === "foarfece-si-cuttere") {
            return this.renderCategoriiProduse("1.6")
        }
        if (this.props.match.params.id === "plicuri") {
            return this.renderCategoriiProduse("1.7")
        }
        if (this.props.match.params.id === "lipici") {
            return this.renderCategoriiProduse("1.8")
        }

        //Categoria 2 -  Instrumente de scris
        if (this.props.match.params.id === "creioane-negre-si-creioane-mecanice") {
            return this.renderCategoriiProduse("2.1")
        }
        if (this.props.match.params.id === "markere-si-evidentiatoare") {
            return this.renderCategoriiProduse("2.2")
        }
        if (this.props.match.params.id=== "pixuri") {
            return this.renderCategoriiProduse("2.3")
        }
        if (this.props.match.params.id === "stilouri-si-rollere") {
            return this.renderCategoriiProduse("2.4")
        }
        if (this.props.match.params.id === "seturi-instrumente-de-scris") {
            return this.renderCategoriiProduse("2.5")
        }

        //Categoria 3 - Rechizite scolare
        if (this.props.match.params.id === "caiete") {
            return this.renderCategoriiProduse("3.1")
        }
        if (this.props.match.params.id === "coperti-si-etichete-scolare") {
            return this.renderCategoriiProduse("3.2")
        }
        if (this.props.match.params.id=== "ascutitori-si-radiere") {
            return this.renderCategoriiProduse("3.3")
        }
        if (this.props.match.params.id === "creta-si-bureti-scolari") {
            return this.renderCategoriiProduse("3.4")
        }
        if (this.props.match.params.id === "ghiozdane") {
            return this.renderCategoriiProduse("3.5")
        }
        if (this.props.match.params.id === "penare") {
            return this.renderCategoriiProduse("3.6")
        }
        if (this.props.match.params.id === "plastilina") {
            return this.renderCategoriiProduse("3.7")
        }

        //Categoria 4 - Articole creative si craft
        if (this.props.match.params.id === "abtibilde-si-stampile-copii") {
            return this.renderCategoriiProduse("4.1")
        }
        if (this.props.match.params.id === "accesorii") {
            return this.renderCategoriiProduse("4.2")
        }
        if (this.props.match.params.id === "carioci-si-culori-speciale") {
            return this.renderCategoriiProduse("4.3")
        }
        if (this.props.match.params.id === "foarfece-si-perforatoare-model") {
            return this.renderCategoriiProduse("4.4")
        }
        if (this.props.match.params.id === "seturi-creative") {
            return this.renderCategoriiProduse("4.5")
        }

        // //Categoria 5 - Birotica
        if (this.props.match.params.id === "tipizate") {
            return this.renderCategoriiProduse("5.1")
        }
        if (this.props.match.params.id === "role-casa") {
            return this.renderCategoriiProduse("5.2")
        }
        if (this.props.match.params.id === "indigo") {
            return this.renderCategoriiProduse("5.3")
        }

        // //Categoria 6 - Jocuri
        if (this.props.match.params.id === "jocuri-educative") {
            return this.renderCategoriiProduse("6.1")
        }
        if (this.props.match.params.id === "jocuri-de-societate") {
            return this.renderCategoriiProduse("6.2")
        }
        if (this.props.match.params.id === "jocuri-din-lemn") {
            return this.renderCategoriiProduse("6.3")
        }
        if (this.props.match.params.id === "puzzle") {
            return this.renderCategoriiProduse("6.4")
        }

        // //Categoria 7 - Cadouri
        if (this.props.match.params.id === "cadouri-pentru-toti") {
            return this.renderCategoriiProduse("7")
        }

        // //Categoria 9 - Arte plastice
        if (this.props.match.params.id === "blocuri-pentru-desen") {
            return this.renderCategoriiProduse("8.1")
        }
        if (this.props.match.params.id === "acuarele-si-culori-acrilice") {
            return this.renderCategoriiProduse("8.2")
        }
        if (this.props.match.params.id === "pensule") {
            return this.renderCategoriiProduse("8.3")
        }
        if (this.props.match.params.id === "panza-pictura") {
            return this.renderCategoriiProduse("8.4")
        }
    }
}

const ProduseView = withRouter(ProduseList)
export default ProduseView
