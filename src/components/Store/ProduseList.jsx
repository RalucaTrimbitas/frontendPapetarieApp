import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import SidebarCategorii from "../SideBars/sidebarCategorii";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../utils/footer";
import {Card, Dropdown, Modal} from "react-bootstrap";
import {AiFillCheckCircle, FaShoppingCart, FaUserAlt} from "react-icons/all";
import '../../css/Modal.css';
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export class ProduseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produse: [],
            cos_cumparaturi: [],
            sizeCart: localStorage.getItem("cartLength"),
            show: false,
            showModal2: false,
            visible: 6,
            outside: ""
        };

        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderProduse = this.renderProduse.bind(this);
        this.loadMore = this.loadMore.bind(this);

        fetch('http://localhost:8080/produse', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
                // 'Authorization' : 'Bearer ' + localStorage.getItem("jwt")
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


    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false,
        });
    };

    addCart = (id) => {
        if (localStorage.getItem('numeUtilizator') == null){
            this.setState({
                showModal2: true
            });
        }
        else
        try {
            fetch("http://localhost:8080/cos-cumparaturi-produs/" + localStorage.getItem("numeUtilizator"), {
                method: "POST",
                body: JSON.stringify({
                    idProdus: id,
                }),
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
            })
                .then(res => {
                    if (res.status === 200) {
                        console.log("Produsul s-a adaugat")
                        this.setState({
                            show: true,
                            sizeCart: Number(this.state.sizeCart) + 1
                        });
                        localStorage.setItem("cartLength", this.state.sizeCart)
                    }
                    else if (res.status === 202) {
                        this.setState({
                            show: true
                        });
                    }
                    else {
                        console.log("error")
                    }
                })
        }
        catch (err){
            console.log(err)
        }
    }

    loadMore() {
        this.setState((old) => {
            return {visible: old.visible + 3}
        })
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }


    renderProduse = (produs) => {
        const {codDeBare, denumire, pret, descriere, src} = produs;
        return (
            <React.Fragment key={codDeBare}>
                <div className="card card-produse" key={codDeBare}>
                    <Link to={`/produse/detalii/${codDeBare}`}>
                        <img src={'data:image/jpeg;base64,'+ src} alt="imagine-produs" />
                    </Link>
                    <div className="content">
                        <h4>
                            <Link to={`/produse/detalii/${codDeBare}`} style={{color:"#4b1515de"}}>{denumire}</Link>
                        </h4>
                        <span>{pret.toFixed(2)} lei</span>
                        <p>{descriere}</p>
                        <button type="button" className="btn order" data-toggle="modal"
                                data-target="#exampleModalCenter" onClick={() => this.addCart(codDeBare)}><FaShoppingCart style={{marginTop:"-5px"}}/> Adaugă în coș</button>
                        <Modal show={this.state.showModal2} onHide={this.closeModal}  className="modal-backdrop">
                            <Modal.Header closeButton>
                                <Modal.Title>Este necesară autentificarea pentru a adăuga un produs în coș!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body/>
                            <Modal.Footer>
                                <Link type="button" className="btn order"
                                      data-toggle="modal"
                                      data-target="#exampleModalCenter"
                                      to="/autentificare">
                                    <FaUserAlt className="mr-2 mb-1"/>
                                    Autentificare
                                </Link>
                            </Modal.Footer>
                        </Modal>
                        <Modal
                            size="md"
                            show={this.state.show}
                            onHide={this.closeModal}
                            className="modal-backdrop"
                        >
                            <Modal.Header>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Produsul a fost adăugat în coș! <AiFillCheckCircle style={{color:"green"}}/>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Card>
                                    <Link to="/cos-cumparaturi" type="button" className="btn btn-istoric">Vezi coșul de cumpărături</Link>
                                </Card>
                            </Modal.Body>
                            <Modal.Footer>
                                <Link type="button" className="btn btn-exit-modal" to={window.location.pathname} onClick={this.closeModal}>Închide</Link>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                </React.Fragment>
        )
    }

    sortByPriceAsc() {
        this.setState(prevState => {
            this.state.produse.sort((a, b) => (a.pret - b.pret))
        });
        this.forceUpdate()
    }

    sortByPriceDesc() {
        this.setState(prevState => {
            this.state.produse.sort((a, b) => (b.pret - a.pret))
        });
        this.forceUpdate()
    }


    renderCategoriiProduse(text) {
         var filterProducts = this.state.produse
                .filter(item => {
                    return item.idCategorieProdus === text
                })
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col className="col-md-12 text-right mr-3 mb-3">
                            <Dropdown>
                                <Dropdown.Toggle className="btn-cautare" id="dropdown-basic">
                                    Sortează după preț
                                </Dropdown.Toggle>
                                <DropdownMenu>
                            <DropdownItem onClick={this.sortByPriceAsc}>Preț: crescător</DropdownItem>
                            <DropdownItem onClick={this.sortByPriceDesc}>Preț: descrescător</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
                            <SidebarCategorii show={this.show}/>
                        </Col>
                        <Col className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2" id="produs">
                            {this.state.produse
                                .filter(item => {
                                    return item.idCategorieProdus === text
                                })
                                .slice(0,this.state.visible)
                                .map(produs => this.renderProduse(produs))}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-8 col-lg-9 p-l-2 p-t-2 col-xs-11 text-center mb-5 mt-5">
                        {this.state.visible < filterProducts.length &&
                        <button type="button" onClick={this.loadMore} className="btn btn-cautare">Vezi mai mult</button>
                        }
                        </Col>
                    </Row>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }

    render() {
        //Categoria 1 -  Accesorii de birou
        if (this.props.match.params.id === "accesorii-birou") {
            return this.renderCategoriiProduse("1")
        }
        if (this.props.match.params.id === "agende-si-blocnotes-uri") {
            return (this.renderCategoriiProduse("1.1"))
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
