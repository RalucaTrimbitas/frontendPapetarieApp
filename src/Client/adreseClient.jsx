import React from "react";
import {Alert, Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle} from "react-icons/all";
import {Link} from "react-router-dom";
import Form from "../components/Forms/form";
import Joi from "joi-browser";

class AdreseClient extends Form {
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
            showAlert: false,
            errors: {}
        };
        this.closeModal = this.closeModal.bind(this);

        fetch('http://localhost:8080/client/' + sessionStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem("jwt")
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
               const payload = {
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
               }
               this.setState({data: payload})
            })
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    schema = {
        prenume: Joi.string().required().error(() => {return {message: "Prenumele este obligatoriu."}}),
        nume: Joi.string().required().error(() => {return {message: "Numele este obligatoriu."}}),
        email: Joi.string().required().error(() => {return {message: "Adresa de email este obligatorie."}}),
        numeUtilizator: Joi.string().required().error(() => {return {message: "Numele de utilizator este obligatoriu."}}),
        parola: Joi.string().required().error(() => {return {message: "Parola este obligatorie."}}),
        adresa: Joi.string().optional().allow(""),
        tip: Joi.string().label("Tip").error(() => {return {message: "Tipul este obligatoriu."}}),
        companie: Joi.string().label("Companie").error(() => {return {message: "Numele companiei este obligatoriu."}}),
        codFiscal: Joi.string().label("Cod fiscal").error(() => {return {message: "Codul fiscal este obligatoriu."}}),
        numarTelefon: Joi.string().label("Numar telefon").error(() => {return {message: "Numărul de telefon este obligatoriu."}})
    };

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
        event.preventDefault();
        const payload = {
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
        }

        fetch('http://localhost:8080/client', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem("jwt")
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        numeUtilizator: this.state.data.numeUtilizator,
                        parola: this.state.data.parola,
                        nume: this.state.data.nume,
                        prenume: this.state.data.prenume,
                        tip: this.state.data.tip,
                        email: this.state.data.email,
                        numarTelefon: this.state.numarTelefon,
                        adresa: this.state.adresa,
                        companie: this.state.companie,
                        codFiscal: this.state.codFiscal,
                        showModal: true
                    })
                } else if (res.status === 417) {
                    res.text().then(text => {
                        console.log(text)
                        this.setState({msg: text, showAlert: true}, () =>{
                            window.setTimeout(()=>{
                                this.setState({showAlert:false})
                            },3000)
                        })
                    })
                }
            })
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            selectedOption: event.target.value,
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
                        </Alert>
                        : ""
                    }
                    <div className="card card-panou" style={{marginTop: "80px", marginBottom: "60px"}}>
                        <div className="card-header text-center" id="card-client">Actualizare date personale</div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0" id="card-text">
                                <br/>
                                <h6 className="mb-0 subtitle-circle">
                                    Pentru actualizarea datelor vă rugăm să completați casuța corespunzătoare câmpului
                                    pe care doriți sa îl modificați, iar apoi apăsați butonul "Salvează".
                                </h6>
                                <br/>
                            </blockquote>
                            <form onSubmit={this.doSubmit} className="contact-form">
                                <div className="form-group text-label">
                                    {this.renderInput('nume', "Nume: ","text","Nume")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('prenume', "Prenume: ","text","Prenume")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderSelect('tip','Tip:',['PERSOANA_FIZICA','PERSOANA_JURIDICA'])}
                                </div>
                                {this.state.data.tip === "PERSOANA_JURIDICA" ?
                                    <div>
                                        <div className="form-group text-label">
                                            {this.renderInput('companie', "Companie: ","text", "Companie")}
                                        </div>
                                        <div className="form-group text-label">
                                            {this.renderInput('codFiscal', "Cod fiscal: ","text", "Cod fiscal")}
                                        </div>
                                    </div>
                                    :
                                    ""
                                }
                                <div className="form-group text-label">
                                    {this.renderInput('numarTelefon', "Număr telefon: ","text","Număr telefon")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('adresa', "Adresa: ","text","Adresa")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('email', "Email: ","text","Email")}
                                </div>
                                <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-login mt-5 float-right"
                                    onClick={this.doSubmit}
                                >
                                    Salvează
                                </button>
                                </div>
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
                                        <Link type="button" className="btn btn-exit-modal" to= "/contul-meu/actualizare-date" onClick={this.closeModal}>Închide</Link>
                                    </Modal.Footer>
                                </Modal>
                            </form>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}

export default AdreseClient;