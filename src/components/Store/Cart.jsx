import React, {Component} from "react";
import Footer from "../utils/footer";
import {Link} from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/all";
import {Card, Modal} from "react-bootstrap";
import NavBarClient from "../../Client/navBarClient";
import NavBar from "../NavBars/navBar";

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            cart: [],
            sizeCart: localStorage.getItem("cartLength"),
            show: false,
        }

        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)

        fetch('http://localhost:8080/cos-cumparaturi-produs/' + localStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({cart: json});
                        localStorage.setItem("cartLength", this.state.cart.length)
                    });
                    // LOGIN PERSISTANCE
                } else {
                    console.log("error")
                }
            })
    }


    increment = id =>{
        this.state.cart.forEach(item => {
            if(item.codDeBare === id){
                item.cantitate += 1
            }
        })
        this.setState({cart: this.state.cart})
        // this.props.addCart(id)

    }

    decrement = id =>{
        this.state.cart.forEach(item => {
            if(item.codDeBare === id){
                item.cantitate === 1 ? item.cantitate = 1 : item.cantitate -= 1
            }
        })
        this.setState({cart: this.state.cart})

    }

    closeModal = e => {
        this.setState({
            show: false,
        });

    };

    openModal() {
        this.setState({
            show: true
        });

    };

    removeProduct = id =>{
        if(window.confirm("Sunteți sigur că doriți să ștergeți acest produs?")){
            this.state.cart.forEach((item, index) => {
                if(item.codDeBare === id){
                    this.state.cart.splice(index, 1)
                    fetch("http://localhost:8080/cos-cumparaturi-produs/" + item.idCosCumparaturiProdus, {
                        method: "DELETE",
                        headers: {
                            Accept: "application/json",
                            "Content-type": "application/json",
                        },
                    })
                        .then(res => {
                            if (res.status === 200) {
                                console.log("Produsul a fost sters")
                                this.setState({
                                    show: false,
                                    sizeCart: Number(this.state.sizeCart) - 1
                                });
                                localStorage.setItem("cartLength", this.state.sizeCart)

                            } else {
                                console.log("error")
                            }
                        })
                }
            })
            this.setState({cart: this.state.cart})
            // addToCart(cart)
        }
    }

    placeOrder = () => {
        this.setState({
            show: true
        });
        fetch("http://localhost:8080/comenzi/" + localStorage.getItem("numeUtilizator"), {
            method: "POST",
            body: JSON.stringify({
                   cart: this.state.cart
            }),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("Comanda s-a adaugat")
                } else {
                    console.log("error")
                }
            })
    }

    render() {
        var total = 0;
        console.log(this.state.cart)
        if(this.state.cart.length === 0)
            return <h3 style={{textAlign: "center", fontSize: "3rem"}}>Coșul de cumpărături este gol.</h3>
        return (
            <React.Fragment>
                <NavBar/>
                {this.state.cart
               .map(item => (
                   total = total + item.cantitate * item.pret,
                    <div className="details" key={item.codDeBare}>
                        <img src={item.src} alt="ImagineProdus" style={{backgroundImage: `url(${item.src})`}}/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.denumire}</h2>
                                <span>{item.pret * item.cantitate} lei</span>
                            </div>
                            <p>{item.descriere}</p>
                            <p>{item.detalii}</p>
                            <div className="amount">
                                <button onClick={() => this.decrement(item.codDeBare)}> - </button>
                                <span>{item.cantitate}</span>
                                <button onClick={() => this.increment(item.codDeBare)}> + </button>
                            </div>
                            <div className="delete"
                                 onClick={() => this.removeProduct(item.codDeBare)}>
                                X
                            </div>
                        </div>

                    </div>
                ))
                }
                <div className="total">
                    <h4>Total: {total} lei</h4>
                    <button type="button" className="btn order" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>this.placeOrder()}>
                        Plasează comanda
                    </button>
                    <Modal size="md" scrollable={true} show={this.state.show} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Comanda a fost plasată cu succes! <AiFillCheckCircle style={{color:"green"}}/></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card>
                                <Card.Body>
                                    <p>Produsele selectate de dumneavoastră au fost rezervate.</p>
                                    <p> Pentru ridicarea comenzii vă așteptăm la magazinul nostru în Blaj, strada Simnion Bărnuțiu, bloc 5, scara A, Parter.</p>
                                    <p> Program de funcționare: 8:00 - 16:00 (L-V).</p>
                                    <p> Suma totală a comenzii: {total} lei </p>
                                    <p> Vă mulțumim!</p>
                                </Card.Body>
                                <Link to="contul-meu/istoric-comenzi" type="button" className="btn btn-istoric">Vezi istoric comenzi</Link>
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