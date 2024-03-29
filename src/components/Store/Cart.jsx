import React, {Component} from "react";
import Footer from "../utils/footer";
import {Link} from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/all";
import {Button, Card, Modal} from "react-bootstrap";

export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            cart: [],
            // sizeCart: sessionStorage.getItem("cartLength"),
            show: false,
            showModal2: false,
            client: [],
            cos: [],
            showDeleteModal: false,
            cod: "",
            produsDetails: []
        }

        this.loadData()

        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)

        fetch('http://localhost:8080/client/' + sessionStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({client: json});
                        console.log(this.state.client)
                    });
                } else {
                    console.log("error")
                }
            })

        fetch('http://localhost:8080/cos-cumparaturi/personal/' + sessionStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({cos: json});
                    });
                } else {
                    console.log("error")
                }
            })
    }

    loadData = () => {
        fetch('http://localhost:8080/cos-cumparaturi-produs/' + sessionStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({cart: json});
                        // sessionStorage.setItem("cartLength", this.state.cart.length)
                    });
                } else {
                    console.log("error")
                }
            })
    }


    increment = id => {
        this.state.cart.forEach(item => {
            if (item.codDeBare === id) {
                item.cantitate += 1
                this.setState({cart: this.state.cart})
                fetch("http://localhost:8080/cos-cumparaturi-produs", {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
                    },
                    body: JSON.stringify({
                        // cart: this.state.cart,
                        id_CosCumparaturi_Produs: item.idCosCumparaturiProdus,
                        idCosCumparaturi: this.state.cos.idCosCumparaturi,
                        idProdus: item.codDeBare,
                        cantitate: item.cantitate
                    }),
                })
                    .then(res => {
                        if (res.status === 200) {
                            console.log("Cosul s-a modificat")
                            this.setState({cart: this.state.cart})
                        } else {
                            console.log("error")
                        }
                    })
            }
        })
        // this.setState({cart: this.state.cart})
    }

    decrement = id => {
        this.state.cart.forEach(item => {
            if (item.codDeBare === id) {
                item.cantitate === 1 ? item.cantitate = 1 :
                    item.cantitate -= 1
                fetch("http://localhost:8080/cos-cumparaturi-produs", {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
                    },
                    body: JSON.stringify({
                        // cart: this.state.cart,
                        id_CosCumparaturi_Produs: item.idCosCumparaturiProdus,
                        idCosCumparaturi: this.state.cos.idCosCumparaturi,
                        idProdus: item.codDeBare,
                        cantitate: item.cantitate
                    }),
                })
                    .then(res => {
                        if (res.status === 200) {
                            console.log("Cosul s-a modificat")
                            this.setState({cart: this.state.cart})
                        } else {
                            console.log("error")
                        }
                    })
            }
        })
        this.setState({cart: this.state.cart})

    }

    openDeleteModal = (item) => {
        this.setState({
            produsDetails: item,
            showDeleteModal: true
        });
    }

    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false,
            showDeleteModal: false
        });
    };

    openModal() {
        this.setState({
            show: true
        });
    };

    openModal2() {
        this.setState({
            showModal2: true
        });
    }

    removeProduct = () => {
        fetch("http://localhost:8080/cos-cumparaturi-produs/" + this.state.produsDetails.idCosCumparaturiProdus, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
            },
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("Produsul a fost sters")
                    this.setState({
                        show: false,
                        // sizeCart: Number(this.state.sizeCart) - 1
                    });
                    this.closeModal()
                    this.loadData()

                } else {
                    console.log("error")
                }
            })
        this.setState({cart: this.state.cart})
    }

    placeOrder = () => {
        this.setState({
            show: true
        });
        fetch("http://localhost:8080/comenzi/" + sessionStorage.getItem("numeUtilizator"), {
            method: "POST",
            body: JSON.stringify({
                cart: this.state.cart,
            }),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem("jwt")
            },
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("Comanda s-a adaugat")
                    sessionStorage.setItem("cartLength", 0)
                } else {
                    console.log("error")
                }
            })

    }

    render() {
        // const {denumire} = this.state.produsDetails;
        var total = 0, tva = 0, sumaTotala = 0
        document.body.classList = "";
        document.body.classList.add("background-general");
        console.log(this.state.cart.length)
        if (this.state.cart.length === 0)
            return (
                <React.Fragment>
                    <div className="alert alert-success" style={{marginBottom: "300px"}}>
                        <button type="button" className="close" title="Close" data-dismiss="alert">×
                        </button>
                        <p>Coșul de cumpărături este gol.</p>
                    </div>
                    <Footer/>
                </React.Fragment>
            )
        else
            return (
                <React.Fragment>
                    {this.state.cart
                        .map(item => (
                            total = total + item.cantitate * item.pret,
                                <div className="details" key={item.codDeBare}>
                                    <img src={'data:image/jpeg;base64,' + item.src} alt="ImagineProdus"
                                         style={{backgroundImage: `url(${item.src})`}}/>
                                    <div className="box">
                                        <div className="row">
                                            <h2>{item.denumire}</h2>
                                            <span>{item.pret} lei</span>
                                        </div>
                                        <p>{item.descriere}</p>
                                        <p>{item.detalii}</p>
                                        <div className="amount">
                                            <button onClick={() => this.decrement(item.codDeBare)}>-</button>
                                            <span>{item.cantitate}</span>
                                            <button onClick={() => this.increment(item.codDeBare)}> +</button>
                                        </div>
                                        <div className="delete"
                                             onClick={(e) => this.openDeleteModal(item, e)}
                                        >
                                            X
                                        </div>
                                        <Modal backdrop="static" keyboard={false} show={this.state.showDeleteModal}
                                               onHide={this.closeModal} centered>
                                            <Modal.Header>
                                                <Modal.Title>
                                                    Ștergere produs
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                {/*Denumire produs: {denumire}*/}
                                                {/*<br/>*/}
                                                Sunteți sigur că doriți ștergerea produsului din coș?
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className="btn-success" onClick={this.removeProduct}>Da</Button>
                                                <Button className="btn-danger" onClick={this.closeModal}>Nu</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    {/*</div>*/}
                                </div>
                        ))
                    }
                    <div className="detailsCart">
                        <h4>Subtotal: {total.toFixed(2)} lei</h4>
                        <div style={{display: "none"}}>
                            {this.state.client.tip === 'PERSOANA_FIZICA' ? (
                                    tva = (19 / 100 * total),
                                        sumaTotala = total
                                ) :
                                (
                                    tva = (19 / 100 * total),
                                        sumaTotala = total
                                )
                            }
                        </div>
                        {/*(Math.round(num * 100) / 100).toFixed(2);*/}
                        <h4>TVA: {tva.toFixed(2)} lei</h4>
                        <h4>Total: {sumaTotala.toFixed(2)} lei</h4>
                        <button type="button" className="btn btn-plasaeza" data-toggle="modal"
                                data-target="#exampleModalCenter" onClick={() => this.placeOrder()}>
                            Plasează comanda
                        </button>
                        <Modal size="md" scrollable={true} show={this.state.show} onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Comanda a fost plasată cu succes! <AiFillCheckCircle
                                    style={{color: "green"}}/></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Card>
                                    <Card.Body>
                                        <p>Produsele selectate de dumneavoastră au fost rezervate.</p>
                                        <p> Pentru ridicarea comenzii vă așteptăm la magazinul nostru în Blaj, strada
                                            Simion Bărnuțiu, bloc 5, scara A, Parter.</p>
                                        <p> Program de funcționare: 8:00 - 16:00 (L-V).</p>
                                        <p> Suma totală a comenzii: {total.toFixed(2)} lei </p>
                                        <p> Vă mulțumim!</p>
                                    </Card.Body>
                                    <Link to="contul-meu/istoric-comenzi" type="button" className="btn btn-istoric">Vezi
                                        istoric comenzi</Link>
                                    {/*<Link type="button" className="btn btn-exit-modal" to={window.location.pathname} onClick={this.closeModal}>Închide</Link>*/}
                                </Card>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <Footer/>
                </React.Fragment>

            )
    }

}

export default Cart