import {Component} from "react";

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
                    return item.codDeBare === localStorage.getItem("codDeBare")
                })
                    .map(item => (
                    <div className="details" key={item.codDeBare}>
                        <img src={item.src} alt="ImagineaMEA" style={{backgroundImage: `url(${item.src})`}}/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.denumire}</h2>
                                <span>${item.pret}</span>
                            </div>
                            {/*<Colors colors={item.colors}/>*/}
                            <p>{item.descriere}</p>
                            {/*<p>{item.content}</p>*/}
                            {/*<Link to="/cart" className="cart" onClick={() => addCart(item._id)}>*/}
                            {/*    Add to cart*/}
                            {/*</Link>*/}
                        </div>
                    </div>
                ))
                }
            </>
        )
    }
}

export default Detalii;