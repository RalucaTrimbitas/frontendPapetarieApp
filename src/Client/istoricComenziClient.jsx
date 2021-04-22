import React, {Component} from "react";
import { Card, Modal} from "react-bootstrap";

class IstoricComenziClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            comanda: [],
            show: false
        }

        this.closeModal = this.closeModal.bind(this)
        this.viewIstoricComanda = this.viewIstoricComanda.bind(this)

        fetch('http://localhost:8080/comenzi/' + localStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({history: json});
                    });
                } else {
                    console.log("error")
                }
            })
    }

    viewIstoricComanda = (numarComanda) => {
        this.setState({
            show: true
        });
        fetch('http://localhost:8080/comanda-istoric/' + numarComanda, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({comanda: json});
                    });
                    // LOGIN PERSISTANCE
                } else {
                    console.log("error")
                }
            })
    }


    closeModal = e => {
        this.setState({
            show: false
        });
    };

    render() {
        document.body.classList = "";
        // document.body.classList.add("background-panou");
        console.log(this.state.comanda)
        return (
            <React.Fragment>
                <main className="col-md-12 col-xs-11">
                    <div className="card card-panou" style={{marginTop: "80px", marginBottom: "150px"}}>
                        <div className="card-header text-center" id="card-client">Istoric comenzi</div>
                        <div className="card-body">
                            {/*<blockquote className="blockquote mb-0" id="card-text">*/}
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="modal-title">
                                        <h4>Aveți {this.state.history.length} comenzi.</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="col-sm-12">
                                            <table className="col-sm-12">
                                                <thead>
                                                <tr>
                                                    <th>Număr comandă</th>
                                                    <th>Data plasării comenzii</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.history.map(items => (
                                                        <tr key={items.numarComanda}>
                                                            <td>{items.numarComanda}</td>
                                                            <td>{new Date(items.dataPlasare).toLocaleDateString()}</td>
                                                            <td>
                                                                <button type="button" className="btn order"
                                                                        data-toggle="modal"
                                                                        data-target="#exampleModalCenter"
                                                                        onClick={() => this.viewIstoricComanda(items.numarComanda)}
                                                                >
                                                                    view
                                                                </button>
                                                                {/*<Button className="btn order" onClick={() => this.viewIstoricComanda(items.numarComanda)}>*/}
                                                                {/*    View*/}
                                                                {/*</Button>*/}
                                                                <Modal size="xl" scrollable={true} show={this.state.show} onHide={this.closeModal}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Comanda dumneavoastră:</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Card >
                                                                            <Card.Body>
                                                                                {this.state.comanda.map(item => {
                                                                                    return (
                                                                                        <div className="card" key={item.codDeBare}>
                                                                                            <div className="card-img">
                                                                                                <img src={item.src} alt="ImagineProdus"
                                                                                                     style={{backgroundImage: `url(${item.src})`}}/>
                                                                                            </div>
                                                                                            <div className="card-body">
                                                                                                <div className="row">
                                                                                                    <div className="col-sm-6">
                                                                                                        <h4>{item.denumire}</h4>
                                                                                                    </div>
                                                                                                    <div className="col-sm-10">
                                                                                                        <span>{item.pret} lei</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/*<Colors colors={item.colors}/>*/}
                                                                                                <p>{item.descriere}</p>
                                                                                                <p>{item.detalii}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                                <p>TOTAL: {items.total} lei</p>
                                                                            </Card.Body>
                                                                        </Card>
                                                                </Modal.Body>
                                                                </Modal>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default IstoricComenziClient;