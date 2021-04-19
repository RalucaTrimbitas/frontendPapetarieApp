import React, {Component} from "react";
import Footer from "../utils/footer";
import {Link} from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/all";

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            cart: [],
        }

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

    removeProduct = id =>{
        if(window.confirm("Sunteți sigur că doriți să ștergeți acest produs?")){
            this.state.cart.forEach((item, index) => {
                if(item.codDeBare === id){
                    console.log("http://localhost:8080/cos-cumparaturi-produs/" + item.IdCosCumparaturiProdus)
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
            <>
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
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Comanda a fost plasată cu succes! <AiFillCheckCircle style={{color:"green"}}/></h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Produsele selectate de dumneavoastră au fost rezervate.</p>
                                    <p> Pentru ridicarea comenzii vă așteptăm la magazinul nostru în Blaj, strada Simnion Bărnuțiu, bloc 5, scara A, Parter.</p>
                                    <p> Program de funcționare: 8:00 - 16:00 (L-V).</p>
                                    <p> Suma totală a comenzii: {total} lei </p>
                                    <p> Vă mulțumim!</p>
                                </div>
                                <div className="modal-footer text-center">
                                    {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                                    {/*<button type="button" className="btn btn-istoric">Vezi istoric comenzi</button>*/}
                                    <Link to="/istoric-comenzi" type="button" className="btn btn-istoric">Vezi istoric comenzi</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>

        )
    }

}

export default Cart