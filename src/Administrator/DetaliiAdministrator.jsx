import React, {Component} from "react";
import Footer from "../components/utils/footer";

export class DetaliiAdministrator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produs: [],
            getAllProduse: [],
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
                            <img src={'data:image/jpeg;base64,'+item.src} alt="ImagineProdus"/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.denumire}</h2>
                                    <span>{item.pret} lei</span>
                                </div>
                                <p>{item.descriere}</p>
                                <p>{item.detalii}</p>
                            </div>
                        </div>
                    ))
                }
                <Footer/>
            </>
        )
    }
}

export default DetaliiAdministrator;