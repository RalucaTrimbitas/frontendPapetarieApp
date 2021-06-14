import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import {Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle, IoIosWarning} from "react-icons/all";
import {Link} from "react-router-dom";
import Footer from "../utils/footer";

class RegisterForm extends Form {
    schema = {
        prenume: Joi.string().required().error(() => {
            return {message: "Prenumele este obligatoriu."}
        }),
        nume: Joi.string().required().error(() => {
            return {message: "Numele este obligatoriu."}
        }),
        email: Joi.string().required().error(() => {
            return {message: "Adresa de email este obligatorie."}
        }),
        numeUtilizator: Joi.string().required().error(() => {
            return {message: "Numele de utilizator este obligatoriu."}
        }),
        parola: Joi.string().min(8).required().error(() => {
            return {message: "Parola trebuie să conțină minim 8 caractere."}
        }),
        confirmParola: Joi.string().min(8).required().error(() => {
            return {message: "Parola trebuie să conțină minim 8 caractere."}
        }),
        tip: Joi.string().required().error(() => {
            return {message: "Tipul este obligatoriu."}
        }),
        companie: Joi.string().optional().allow(""),
        codFiscal: Joi.string().optional().allow(""),
        numarTelefon: Joi.string().optional().allow("")
    };

    constructor() {
        super();
        this.state = {
            data: {
                prenume: "",
                nume: "",
                email: "",
                numeUtilizator: "",
                parola: "",
                confirmParola: "",
                tip: "",
                companie: "",
                codFiscal: "",
                numarTelefon: ""
            },
            showAlert: false,
            showModal: false,
            message: "",
            errors: {}
        };
    }

    handleChange(event) {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(event.target);
        if (errorMessage) errors[event.target.name] = errorMessage;
        else delete errors[event.target.name];

        this.setState({
            [event.target.name]: event.target.value,
            selectedOption: event.target.value,
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false,
        });
    };

    closeAlert = () => {
        this.setState({
            showAlert: false
        })
    }

    handleEnter = e => {
        if (e.keyCode === 13) {
            this.handleSubmit(e);
        }
    };

    doSubmit = () => {

        const payload = {
            prenume: this.state.data.prenume,
            nume: this.state.data.nume,
            email: this.state.data.email,
            numeUtilizator: this.state.data.numeUtilizator,
            parola: this.state.data.parola,
            confirmParola: this.state.data.confirmParola,
            tip: this.state.data.tip,
            companie: this.state.data.companie,
            codFiscal: this.state.data.codFiscal,
            numarTelefon: this.state.data.numarTelefon
        };
        console.log(payload)
        fetch("http://localhost:8080/inregistrare", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        showModal: true,
                    })
                } else if (res.status === 409) {
                    this.setState({
                        prenume: "",
                        nume: "",
                        email: "",
                        numeUtilizator: "",
                        parola: "",
                        confirmParola: "",
                        tip: "",
                        companie: "",
                        codFiscal: "",
                        numarTelefon: "",
                        showAlert: true,
                        message: "Există deja un cont creat cu acest nume de utilizator!"
                    })
                } else if (res.status === 417) {
                    this.setState({
                        prenume: "",
                        nume: "",
                        email: "",
                        numeUtilizator: "",
                        parola: "",
                        confirmParola: "",
                        tip: "",
                        companie: "",
                        codFiscal: "",
                        numarTelefon: "",
                        showAlert: true,
                    })
                    res.text().then(text => {
                        console.log(text)
                        this.setState({message: text, showAlert: true})
                    })
                } else if (res.status === 401) {
                    this.setState({
                        showAlert: true,
                        message: " Parolele nu corespund! Încercați din nou!"
                    })
                }
            })
    };

    render() {
        document.body.classList = "";
        document.body.classList.add("background-register");
        return (
            <React.Fragment>
                <div className="container-reg">
                    <div className="row row-form-reg">
                        <div className="col-md-6 reg-sec offset-md-3" id="register-form">
                            <h3 className="text-center">Înregistrare</h3>
                            <form className="reg-form">
                                <div className="form-group text-label">
                                    {this.renderInput('prenume', "Prenume: ", "text", "Prenume")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('nume', "Nume: ", "text", "Nume")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('email', "E-mail: ", "text", "E-mail")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('numeUtilizator', "Nume utilizator: ", "text", "Nume utilizator")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('parola', "Parola: ", "password", "Parola")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('confirmParola', "Confirmă parola: ", "password", "Confirmă parola")}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderSelect('tip', 'Tip:', ['PERSOANA_FIZICA', 'PERSOANA_JURIDICA'])}
                                </div>
                                <div className="form-group text-label">
                                    {this.renderInput('numarTelefon', "Număr telefon: ", "text", "Număr de telefon")}
                                </div>
                                {this.state.data.tip === "PERSOANA_JURIDICA" ?
                                    <div>
                                        <div className="form-group text-label">
                                            {this.renderInput('companie', "Companie: ", "text", "Companie")}
                                        </div>
                                        <div className="form-group text-label">
                                            {this.renderInput('codFiscal', "Cod fiscal: ", "text", "Cod fiscal")}
                                        </div>
                                    </div>
                                    :
                                    ""
                                }
                                <div className="form-check">
                                    <label className="form-check-label"/>
                                    <div onKeyPress={this.handleEnter} onClick={this.handleSubmit}>
                                        <button
                                            type="button"
                                            className="btn btn-login float-right"
                                        >
                                            Înregistrare
                                        </button>
                                    </div>
                                    <Modal
                                        size="md"
                                        show={this.state.showModal}
                                        onHide={this.closeModal}
                                    >
                                        <Modal.Header>
                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                Înregistrarea s-a efectuat cu succes! <AiFillCheckCircle
                                                style={{color: "green"}}/>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Card>
                                                <Link to="/autentificare" type="button"
                                                      className="btn btn-istoric">Autentificare</Link>
                                            </Card>
                                            {/*{this.state.message}*/}
                                        </Modal.Body>
                                    </Modal>
                                    <Modal
                                        className="modal-confirm"
                                        size="md"
                                        show={this.state.showAlert}
                                        onHide={this.closeAlert}
                                    >
                                        <Modal.Header closeButton className="modal-header">
                                            <div className="icon-box">
                                                <IoIosWarning className="warning"/>
                                            </div>
                                        </Modal.Header>
                                        <Modal.Body className="text-center">
                                            {this.state.message}
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="foot" style={{marginTop: "1450px"}}>
                    <Footer/>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
