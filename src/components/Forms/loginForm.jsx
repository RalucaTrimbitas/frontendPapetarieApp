import React from "react";
import Joi from "joi-browser";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../utils/footer";
import {NavLink} from "react-router-dom";
import Form from "./form";
import {Modal} from "react-bootstrap";
import {IoIosWarning} from "react-icons/all";

class LoginForm extends Form {
    schema = {
        numeUtilizator: Joi.string().required().error(() => {
            return {message: "Numele de utilizator este obligatoriu."}
        }),
        parola: Joi.string().required().error(() => {
            return {message: "Parola este obligatorie."}
        }),
    };

    constructor(props) {
        super(props);
        this.state = {
            data: {
                numeUtilizator: "",
                parola: "",
            },
            showAlert: false,
            message: "",
            errors: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    closeAlert = () => {
        this.setState({
            showAlert: false
        })
    }

    doSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        const payload = {
            numeUtilizator: this.state.data.numeUtilizator,
            parola: this.state.data.parola,
        };
        fetch("http://localhost:8080/autentificare", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
        }).then((res) => {
            if (res.status === 200) {
                sessionStorage.setItem("numeUtilizator", this.state.data.numeUtilizator);
                res.json().then((json) => {
                    const {jwt, userType, name} = json;
                    sessionStorage.setItem("jwt", jwt);
                    sessionStorage.setItem("name", name);
                    sessionStorage.setItem("userType", userType);
                    if (userType === "administrator")
                        this.props.history.replace("/administratordashboard")
                    else if (userType === "client")
                        this.props.history.replace("/contul-meu/acasa-client");
                });

            } else if (res.status === 403) {
                this.setState({
                    showAlert: true,
                    message: "Nu există cont cu acest nume de utilizator!"
                })
            } else if (res.status === 401) {
                this.setState({
                    showAlert: true,
                    message: "Ați introdus o parolă greșită! Încercați din nou!"
                })
            }
        });
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleEnter = e => {
        if (e.keyCode === 13) {
            this.handleSubmit(e);
        }
    };

    render() {
        document.body.classList = "";
        document.body.classList.add("background-panou");
        return (
            <React.Fragment>
                <div className="container-log ">
                    <div className="row">
                        <div className="col-md-4 login-sec offset-md-4" id="login-form" style={{marginTop: "20px"}}>
                            <h2 className="text-center">Autentificare</h2>
                            <form className="login-form">
                                <div className="form-group">
                                    <div className="form-group text-label">
                                        {this.renderInput('numeUtilizator', "Nume utilizator: ", "text", "Nume utilizator")}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-group text-label">
                                        {this.renderInput('parola', "Parola: ", "password", "Parola")}
                                    </div>
                                </div>

                                <div className="form-check">
                                    <button
                                        type="submit"
                                        className="btn btn-login float-right"
                                        onClick={this.doSubmit}
                                        onKeyPress={this.handleEnter}
                                    >
                                        Autentificare
                                    </button>
                                    <p>
                  <span style={{float: "inline"}}>
                    <br/>
                    <br/>
                    Nu ai cont încă?
                    <NavLink className="link-login" to="/inregistrare"> Creează-ți un cont</NavLink>
                    <br/>
                  </span>
                                        Ai uitat parola?
                                        <NavLink className="link-login" to="/parola-uitata"> Schimbă parola</NavLink>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Modal className="modal-confirm" show={this.state.showAlert} onHide={this.closeAlert}>
                    <Modal.Header closeButton className="modal-header">
                        <div className="icon-box">
                            <IoIosWarning className="warning"/>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.message}
                    </Modal.Body>
                </Modal>
                <br/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default LoginForm;
