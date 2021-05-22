import React from "react";
import {Link} from "react-router-dom";
import { Modal} from "react-bootstrap";
import {AiFillCheckCircle, AiFillEdit, RiDeleteBin6Fill} from "react-icons/all";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class SearchResultsPageAdmin extends React.Component {

    constructor() {
        super();
        this.state = {
            produse: [],
            show: false,
            showModal2: false,
            isLoading: true,
            searchText: "",
            searchResults: [],
            denumire: "",
            codDeBare: "",
            pret: "",
            descriere: "",
            src: "",
            detalii: "",
            disponibilitate: "",
            idCategorieProdus: "",
            numeUtilizatorAdministrator: "",
            cantitate: ""
        }

        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
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

    deleteProduct = id => {
        console.log(id)
        // this.openModal2()
        this.state.produse.forEach((item, index) => {
            if (item.codDeBare === id) {
                this.state.produse.splice(index, 1)
                fetch("http://localhost:8080/produse/" + item.codDeBare, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                })
                    .then(res => {
                        if (res.status === 200) {
                            this.setState({
                                show: true,
                            });
                        } else {
                            console.log("error")
                        }
                    })
            }
        })
        this.setState({produse: this.state.produse})
    }

    updateProduct = id => {
        console.log(id)
        fetch('http://localhost:8080/produse/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => this.setState({
                denumire: data.denumire,
                codDeBare: data.codDeBare,
                pret: data.pret,
                descriere: data.descriere,
                src: data.src,
                detalii: data.detalii,
                idCategorieProdus: data.idCategorieProdus,
                numeUtilizatorAdministrator: data.numeUtilizatorAdministrator,
                cantitate: data.cantitate
            }))

        this.setState({
            showModal2: true
        })
    }

    doSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.selectedOption)
        const payload = {
            denumire: this.state.denumire,
            codDeBare: this.state.codDeBare,
            pret: this.state.pret,
            descriere: this.state.descriere,
            src: this.state.src,
            detalii: this.state.detalii,
            idCategorieProdus: this.state.idCategorieProdus,
            numeUtilizatorAdministrator: this.state.numeUtilizatorAdministrator,
            cantitate: this.state.cantitate
        }

        fetch('http://localhost:8080/produse', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        denumire: this.state.denumire,
                        codDeBare: this.state.codDeBare,
                        pret: this.state.pret,
                        descriere: this.state.descriere,
                        src: this.state.src,
                        detalii: this.state.detalii,
                        idCategorieProdus: this.state.idCategorieProdus,
                        numeUtilizatorAdministrator: this.state.numeUtilizatorAdministrator,
                        cantitate: this.state.cantitate,
                        showModal: true
                    })
                    console.log("Produsul s-a modificat")
                } else if (res.status === 417) {
                    res.text().then(text => {
                        console.log(text);

                    });
                }
            })
        // this.props.history.goBack();
        console.log("Submitted");
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            selectedOption: event.target.value,
        });
    }


    render() {
        let toRender = this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <>
                {/*<ul>*/}
                {/*    {this.handleSearch}*/}
                {/*    <li>Search: "{this.state.searchText}"</li>*/}
                {/*    <li>Au fost găsite: {this.state.searchResults.length} produse</li>*/}
                {/*</ul>*/}
                {/*<small>{JSON.stringify(this.state.searchResults, null, 2)}</small>*/}
                {   this.state.searchResults.length > 0 ? (
                    <Container fluid className="container-search">
                        <h3>Rezultatele căutării sunt:</h3>
                        <Row>
                            {this.state.searchResults.map(item =>
                                <Col className="card card-produse-search" key={item.codDeBare}>
                                    <Link to={`/admin/produse/detalii/${item.codDeBare}`}>
                                        <img src={'data:image/jpeg;base64,'+ item.src} alt="imagine-produs" />
                                    </Link>
                                    <div className="content">
                                        <h4>
                                            <Link to={`/admin/produse/detalii/${item.codDeBare}`} style={{color:"#4b1515de"}}>{item.denumire}</Link>
                                        </h4>
                                        <span>{item.pret} lei</span>
                                        <p>{item.descriere}</p>
                                        <div className="d-inline-flex">
                                            <button type="button" className="btn order-admin-edit mr-3 " data-toggle="modal"
                                                    data-target="#exampleModalCenter" onClick={() => this.updateProduct(item.codDeBare)}><AiFillEdit style={{marginTop:"-5px"}}/> Modifică</button>
                                            <button type="button" className="btn order-admin-delete" data-toggle="modal"
                                                    data-target="#exampleModalCenter" onClick={() => this.deleteProduct(item.codDeBare)}><RiDeleteBin6Fill style={{marginTop:"-5px"}}/> Șterge</button>
                                        </div>
                                        <Modal show={this.state.showModal2} onHide={this.closeModal} size="xl" scrollable={true}
                                               aria-labelledby="contained-modal-title-vcenter"
                                               centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title id="contained-modal-title-vcenter">Modificare produs</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form onSubmit={this.doSubmit} className="contact-form">
                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="denumire">Denumire:</label>
                                                        <input className="form-control"
                                                               type="text" name="denumire" id="denumire" required
                                                               value={this.state.denumire} onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="codDeBare">Cod de bare:</label>
                                                        <input className="form-control"
                                                               type="text" name="codDeBare" id="codDeBare" required
                                                               value={this.state.codDeBare} onChange={this.handleChange}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="pret">Preț:</label>
                                                        <input type="text" name="pret" id="pret" required className="form-control"
                                                               value={this.state.pret} onChange={this.handleChange}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="descriere">Descriere:</label>
                                                        <input type="text" name="descriere" id="descriere" required className="form-control"
                                                               value={this.state.descriere} onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <img src={this.state.src} alt="imagine-produs" />
                                                        <br/>
                                                        <label className="text-label" htmlFor="src">Src imagine:</label>
                                                        <textarea type="text" name="src" id="src" required
                                                                  className="form-control"
                                                                  value={this.state.src} onChange={this.handleChange}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="adresa">Detalii: </label>
                                                        <textarea name="detalii" value={this.state.detalii} onChange={this.handleChange}
                                                                  className="form-control">
                                                </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="idCategorieProdus">Categorie produs: </label>
                                                        <textarea name="idCategorieProdus" value={this.state.idCategorieProdus} onChange={this.handleChange}
                                                                  className="form-control">
                                                </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="numeUtilizatorAdministrator">Nume utilizator administrator: </label>
                                                        <textarea name="numeUtilizatorAdministrator" value={this.state.numeUtilizatorAdministrator} onChange={this.handleChange}
                                                                  className="form-control">
                                                </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-label" htmlFor="cantitate">Cantitate în stoc: </label>
                                                        <textarea name="cantitate" value={this.state.cantitate} onChange={this.handleChange}
                                                                  className="form-control">
                                                </textarea>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="btn order-detalii float-right pb-3"
                                                        onClick={this.doSubmit}
                                                    >
                                                        Salvează
                                                    </button>
                                                    <br/>
                                                    <Modal
                                                        size="md"
                                                        show={this.state.showModal}
                                                        onHide={this.closeModal}
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                                Datele produsului au fost actualizate cu succes! <AiFillCheckCircle style={{color:"green"}}/>
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        {/*<Modal.Body>*/}
                                                        {/*    <Card>*/}
                                                        {/*        <Link to="/produse/accesorii-birou/agende-si-blocnotes-uri" type="button" className="btn btn-istoric">Continuă cumpărăturile</Link>*/}
                                                        {/*    </Card>*/}
                                                        {/*</Modal.Body>*/}
                                                        <Modal.Footer>
                                                            <button type="button" className="btn btn-exit-modal" onClick={this.closeModal}>Închide</button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </form>
                                            </Modal.Body>
                                        </Modal>
                                        <Modal
                                            size="md"
                                            show={this.state.show}
                                            onHide={this.closeModal}
                                            className="modal-backdrop"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-lg">
                                                    Produsul a fost șters! <AiFillCheckCircle style={{color:"green"}}/>
                                                </Modal.Title>
                                            </Modal.Header>
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
            </>
        );

        return <div style={{ margin: "20px 20px 20px 20px" }}>{toRender}</div>;
    }

}
