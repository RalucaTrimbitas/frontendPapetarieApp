import React, {Component} from "react";
import {Alert, Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle} from "react-icons/all";
import {Link} from "react-router-dom";

class SetariContClient extends Component {

    constructor() {
        super();
        this.state = {
            data: {
                numeUtilizator: "",
                parola: "",
                nume: "",
                prenume: "",
                tip: "",
                email: "",
                numarTelefon: "",
                adresa: "",
                companie: "",
                codFiscal: "",
            },
            showModal: false,
            msg: "",
            showAlert: false
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
                parola: data.parola,
                nume: data.nume,
                prenume: data.prenume,
                tip: data.tip,
                email: data.email,
                numarTelefon: data.numarTelefon,
                adresa: data.adresa,
                companie: data.companie,
                codFiscal: data.codFiscal
            }))


        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    closeModal = e => {
        this.setState({
            showModal: false,
        });
    };

    closeAlert = () => {
        this.setState({
            showAlert: false
        })
    }

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
                        numeUtilizator: this.state.data.numeUtilizator,
                        parola: this.state.data.parola,
                        nume: this.state.data.nume,
                        prenume: this.state.data.prenume,
                        tip: this.state.data.tip,
                        email: this.state.data.email,
                        numarTelefon: this.state.data.numarTelefon,
                        adresa: this.state.data.adresa,
                        companie: this.state.data.companie,
                        codFiscal: this.state.data.codFiscal,
                        shwoModal: true
                    })
                }
                // else if (res.status === 401) {
                //     alert("Username already exist!")
                else if(res.status === 417){
                    res.text().then(text => {
                        console.log(text)
                        this.setState({msg: text, showAlert: true}, () => {
                            window.setTimeout(() => {
                                this.setState({showAlert: false})
                            }, 3000)
                        })
                    })
                }
            })
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
                        {this.state.msg.length > 0 ?
                            <Alert className="sticky-top" variant='danger' show={this.state.showAlert} onClose={this.closeAlert} dismissible>
                                <Alert.Heading> {this.state.msg} </Alert.Heading>
                                {/*<p>*/}
                                {/*    {this.state.msg}*/}
                                {/*</p>*/}
                            </Alert>
                            : ""
                        }
                        <div className="card card-panou" style={{marginTop: "80px",  marginBottom: "70px", background: "none"}}>
                            <div className="card-header text-center" id="card-client" >Setări cont</div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0" id="card-text">
                                    {/*<p className="mb-0 ">*/}
                                        <h4 className=" mb-0 subtitle-circle">Schimbare parolă</h4>
                                    {/*</p>*/}
                                    <br/>
                                </blockquote>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label className="text-label">Nume utilizator</label>
                                        <input readOnly
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
                                            className="btn submit-form float-right"
                                            onClick={this.doSubmit}
                                        >
                                            Salvează
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