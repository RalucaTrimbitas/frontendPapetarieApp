import React from "react";
import {Link} from "react-router-dom";
import {Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle, FaShoppingCart} from "react-icons/all";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class SearchResultsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            produse: [],
            show: false,
            showModal2: false,
            isLoading: true,
            searchText: "",
            searchResults: []
        }

        this.closeModal = this.closeModal.bind(this);
    }
    state = {
        isLoading: true,
        searchText: "",
        searchResults: []
    };

    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false,
        });
    };

    handleSearch = () => {
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
                        let searchText = this.props.location.state.searchText;
                        let results = json.filter(item => item.denumire.toLowerCase().includes(searchText.toLowerCase()));
                        this.setState({
                            isLoading: false,
                            searchText: searchText,
                            searchResults: results
                        });
                    });
                } else {
                    console.log("error")
                }
            })
    };

    componentDidMount() {
        this.handleSearch();
    }

    componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.searchText;
        let newSearch = this.props.location.state.searchText;
        if (prevSearch !== newSearch) {
            this.handleSearch();
        }
    }

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

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        let toRender = this.state.isLoading ? (
            <h1>Se încarcă...</h1>
        ) : (
            <>
                {   this.state.searchResults.length > 0 ? (
                    <Container fluid className="container-search">
                        <h3>Rezultatele căutării :</h3>
                        <Row>
                        {this.state.searchResults.map(item =>
                    <Col className="card card-produse-search" key={item.codDeBare}>
                        <Link to={`/produse/detalii/${item.codDeBare}`}>
                            <img src={'data:image/jpeg;base64,'+ item.src} alt="imagine-produs" />
                        </Link>
                        <div className="content">
                            <h4>
                                <Link to={`/produse/detalii/${item.codDeBare}`} style={{color:"#4b1515de"}}>{item.denumire}</Link>
                            </h4>
                            <span>{item.pret} lei</span>
                            <p>{item.descriere}</p>
                            <button type="button" className="btn order" data-toggle="modal"
                                    data-target="#exampleModalCenter" onClick={() => this.addCart(item.codDeBare)}><FaShoppingCart style={{marginTop:"-5px"}}/> Adaugă în coș</button>
                            <Modal show={this.state.showModal2} onHide={this.closeModal}  className="modal-backdrop">
                                <Modal.Header closeButton>
                                    <Modal.Title>Este necesară autentificarea pentru a adăuga un produs în coș</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Dacă nu aveți deja un cont creat, alegeți varianta de înregistrare.</Modal.Body>
                                <Modal.Footer>
                                    <Link type="button" className="btn order"
                                          data-toggle="modal"
                                          data-target="#exampleModalCenter"
                                          to="/autentificare">
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
                    </Col>
                        )}
                            </Row>
                    </Container>
                ) : (
                    <div className="alert alert-success" style={{marginBottom: "300px"}}>
                        <button type="button" className="close" title="Close" data-dismiss="alert">×
                        </button>
                        <p>NU AU FOST GĂSITE REZULTATE.</p>
                    </div>
                )}
                {/*<Footer />*/}
            </>
        );

        return <div style={{ margin: "20px 20px 20px 20px" }}>{toRender}</div>;
    }

}
