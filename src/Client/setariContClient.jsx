import React, {Component} from "react";
import {Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle} from "react-icons/all";
import {Link} from "react-router-dom";

class SetariContClient extends Component {

    constructor() {
        super();
        this.state = {
            numeUtilizator: "",
            email:"",
            parola: "",
            parolaNoua: "",
            confirmParolaNoua: "",
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);

        fetch('http://localhost:8080/client/' + localStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => this.setState({
                numeUtilizator: data.numeUtilizator,
                parola: "",
                nume: data.nume,
                prenume: data.prenume,
                tip: data.tip,
                email : data.email,
                numarTelefon: data.numarTelefon,
                adresa: data.adresa,
            }))


        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    closeModal = e => {
        this.setState({
            showModal: false,
        });
    };

    doSubmit = (event) => {
        event.preventDefault()
        const payload = {
            numeUtilizator: this.state.numeUtilizator,
            parola: this.state.parolaNoua,
            nume: this.state.nume,
            prenume: this.state.prenume,
            // tip: this.state.tip,
            email : this.state.email,
            numarTelefon: this.state.numarTelefon,
            adresa: this.state.adresa
        }

        fetch('http://localhost:8080/client', {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    // alert("Modificat")
                    // alert(this.state.parolaNoua)
                    this.setState({showModal: true})
                    this.setState({
                        numeUtilizator: "",
                        parola: this.state.parolaNoua,
                        nume: "",
                        prenume: "",
                        // tip: "",
                        email : "",
                        numarTelefon: "",
                        adresa: "",
                        shwoModal: true
                    })
                }
                // else if (res.status === 401) {
                //     alert("Username already exist!")
                else if(res.status === 417){
                    res.text().then(text =>{
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
        });
    }

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
    return (
        <React.Fragment>
                    <main className="col-md-10 col-xs-11">
                        <div className="card card-panou" style={{marginTop: "80px",  marginBottom: "70px"}}>
                            <div className="card-header text-center" id="card-client" >Setări cont</div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0" id="card-text">
                                    <p className="mb-0 ">
                                        <h4>Schimbare parolă</h4>
                                    </p>
                                    <br/>
                                </blockquote>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label className="text-label">Nume utilizator</label>
                                        <input
                                            type="text"
                                            name="numeUtilizator"
                                            className="form-control"
                                            placeholder="Nume utilizator"
                                            onChange={this.handleChange}
                                            value={this.state.numeUtilizator}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-label">Parolă actuală</label>
                                        <input
                                            type="password"
                                            name="parola"
                                            className="form-control"
                                            placeholder="Parolă"
                                            onChange={this.handleChange}
                                            value={this.state.parola}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-label">Parolă nouă</label>
                                        <input
                                            type="password"
                                            name="parolaNoua"
                                            className="form-control"
                                            placeholder="Parolă nouă"
                                            onChange={this.handleChange}
                                            value={this.state.parolaNoua}
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/*<label className="text-label">Comfirmă parola nouă</label>*/}
                                        {/*<input*/}
                                        {/*    type="password"*/}
                                        {/*    name="confirmParolaNoua"*/}
                                        {/*    className="form-control"*/}
                                        {/*    placeholder="Confirmă parola nouă"*/}
                                        {/*    onChange={this.handleChange}*/}
                                        {/*    value={this.state.confirmParolaNoua}*/}
                                        {/*/>*/}
                                        <br/>
                                        <button
                                            type="submit"
                                            className="btn order float-right"
                                            onClick={this.doSubmit}
                                        >
                                            Salvează modificările
                                        </button>
                                        <Modal
                                            size="md"
                                            show={this.state.showModal}
                                            onHide={this.closeModal}
                                        >
                                            <Modal.Header>
                                                <Modal.Title id="example-modal-sizes-title-lg">
                                                    Datele dumneavostră au fost actualizate cu succes! <AiFillCheckCircle style={{color:"green"}}/>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Card>
                                                    <Link to="/produse/accesorii-birou/agende-si-blocnotes-uri" type="button" className="btn btn-istoric">Continuă cumpărăturile</Link>
                                                </Card>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Link type="button" className="btn btn-exit-modal" to= "/contul-meu/setari-cont" onClick={this.closeModal}>Închide</Link>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
        </React.Fragment>
    )}
}
export default SetariContClient;