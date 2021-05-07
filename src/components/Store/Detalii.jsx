import React, {Component} from "react";
import {Link} from "react-router-dom";
import Footer from "../utils/footer";
import {AiFillCheckCircle, FaShoppingCart} from "react-icons/all";
import {Card, Modal} from "react-bootstrap";

export class Detalii extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produs: [],
            getAllProduse: [],
            sizeCart: localStorage.getItem("cartLength"),
            show: false,
            showModal2: false
        };
        this.closeModal = this.closeModal.bind(this);

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
                        this.setState({getAllProduse: json});
                    });
                    // LOGIN PERSISTANCE
                } else {
                    console.log("error")
                }
            })

    }
    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false
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

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <>
                {this.state.getAllProduse
                    .filter(item => {
                    return item.codDeBare === this.props.match.params.id
                })
                    .map(item => (
                    <div className="details" key={item.codDeBare}>
                        <img src={item.src} alt="ImagineProdus" style={{backgroundImage: `url(${item.src})`}}/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.denumire}</h2>
                                <span>{item.pret} lei</span>
                            </div>
                            <p>{item.descriere}</p>
                            <p>{item.detalii}</p>
                            <button type="button" className="btn order-detalii" data-toggle="modal"
                                    data-target="#exampleModalCenter" onClick={() => this.addCart(item.codDeBare)}><FaShoppingCart style={{marginTop:"-5px"}}/> Adaugă în coș</button>

                        </div>
                    </div>
                ))
                }
                <Modal
                    size="md"
                    show={this.state.show}
                    onHide={this.closeModal}
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
                        <Link type="button" className="btn btn-exit-modal" to= "/produse/accesorii-birou/agende-si-blocnotes-uri" onClick={this.closeModal}>Închide</Link>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModal2} onHide={this.closeModal}>
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
                        <Link
                            type="button" className="btn order"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            to="/inregistrare">
                            Înregistrare
                        </Link>
                    </Modal.Footer>
                </Modal>
                <Footer/>
            </>
        )
    }
}

export default Detalii;