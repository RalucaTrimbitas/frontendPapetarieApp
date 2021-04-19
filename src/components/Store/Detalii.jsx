import {Component} from "react";
import {Link} from "react-router-dom";
import Footer from "../utils/footer";

export class Detalii extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produs: [],
            getAllProduse: []
        };

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

    render() {
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
                            {/*<Colors colors={item.colors}/>*/}
                            <p>{item.descriere}</p>
                            <p>{item.detalii}</p>
                            {/*<Link to="/cart" className="cart" onClick={() => addCart(item._id)}>*/}
                            <Link to="/cos-cumparaturi" className="cart" >
                                Adaugă în coș
                            </Link>
                        </div>
                    </div>
                ))
                }
                <Footer/>
            </>
        )
    }
}

export default Detalii;