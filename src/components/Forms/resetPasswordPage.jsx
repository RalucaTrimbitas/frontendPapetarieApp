import React, {Component} from "react";
import Joi from "joi-browser";
import {Button, Card, Form, Modal} from "react-bootstrap";
import Footer from "../utils/footer";
import {AiFillCheckCircle, IoIosWarning} from "react-icons/all";
import {Link} from "react-router-dom";

export default class ResetPasswordPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: new URLSearchParams(this.props.location.search).get("token"),
            data: {
                password: "",
                password_confirm: ""
            },
            errors: {},
            showAlert: false,
            showModal: false,
            showDeleteModal: false,
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    schema = {
        password: Joi.string().min(8).required().error(() => {return {message: "Parola trebuie să conțină cel puțin 8 caractere."}}),
        password_confirm: Joi.string().min(8).required().error(() => {return {message: "Parola trebuie să conțină cel puțin 8 caractere."}}),
    }

    closeAlert = () => {
        this.setState({
            showAlert: false
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    doSubmit = () => {
        const payload = {}
        payload["token"] = this.state.token
        payload["parola"] = this.state.data.password
        payload["confirmare_parola"] = this.state.data.password_confirm
        fetch('http://localhost:8080/resetare-parola', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        showModal: true
                    })
                }
                else if (res.status === 417) {
                    this.setState({
                        showAlert: true,
                        message: "Datele introduse nu sunt valide!"
                    })
                }
                else if (res.status === 401) {
                    this.setState({
                        showAlert: true,
                        message: "Vă rugăm să alegeți altă parolă! Mulțumim!"
                    })
                }
                else if (res.status === 404) {
                    this.setState({
                        showAlert: true,
                        message: "Probleme la schimbarea parolei! Vă rugăm reîncercați!"
                    })
                }
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    }

    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);

        if (!error) {
            if (this.state.data["password"] !== this.state.data["password_confirm"]) {
                const error = {}
                error["password_confirm"] = "Cele două parole nu coincid."
                return error
            }
            return null;
        }

        const errors = {};

        for(let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = { [name]: this.schema[name] };
        const {error} = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;
    }

    handleChange(event) {
        const errors = { ...this.state.errors};
        const errorMessage = this.validateProperty(event.target);
        if(errorMessage) errors[event.target.name]=errorMessage;
        else delete errors[event.target.name];

        const data = {...this.state.data};
        data[event.target.name] = event.target.value;
        this.setState({data, errors});
    };

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
                <div className="align-content-center">
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <Modal className="modal-confirm mt-0" show={this.state.showAlert} onHide={this.closeAlert} centered>
                            {/*<Modal.Header className="font-weight-bold">*/}
                            {/*    <Modal.Title>*/}
                            {/*        Notificare resetare parolă*/}
                            {/*    </Modal.Title>*/}
                            {/*</Modal.Header>*/}
                            <Modal.Header closeButton className="modal-header">
                                <div className="icon-box">
                                    <IoIosWarning className="warning"/>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                {this.state.message}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.closeAlert}>
                                    Ok
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal
                            size="md"
                            show={this.state.showModal}
                            onHide={this.closeModal}
                        >
                            <Modal.Header>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Parola a fost schimbată cu succes! <AiFillCheckCircle style={{color:"green"}}/>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Card>
                                    <Link to="/autentificare" type="button" className="btn btn-istoric">Autentificare</Link>
                                </Card>
                                {/*{this.state.message}*/}
                            </Modal.Body>
                        </Modal>
                        <Modal backdrop="static" keyboard={false} show={this.state.showDeleteModal}
                               onHide={this.closeModal} centered>
                            <Modal.Header>
                                <Modal.Title>
                                    Ștergere produs
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/*Denumire produs: {denumire}*/}
                                {/*<br/>*/}
                                Sunteți sigur că doriți ștergerea produsului din coș?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="btn-success" onClick={this.removeProduct}>Da</Button>
                                <Button className="btn-danger" onClick={this.closeModal}>Nu</Button>
                            </Modal.Footer>
                        </Modal>
                        <Form className="d-flex flex-column my-border-form w-50 login-sec" id="login-form" >
                            <h2 className="align-self-center text-uppercase">Resetare Parolă</h2>
                            <hr/>
                            <Form.Group className="form-group text-label">
                                <Form.Label className="my-label">Parolă nouă:</Form.Label>
                                <Form.Control className="align-self-center bg-white" name="password" type="password" placeholder="Parola" onChange={this.handleChange}/>
                            </Form.Group>
                            {this.state.errors["password"] && <div className="alert alert-danger">{this.state.errors["password"]}</div>}
                            <Form.Group className="form-group text-label">
                                <Form.Label className="my-label">Confirmare parolă:</Form.Label>
                                <Form.Control className="align-self-center bg-white" name="password_confirm" type="password" placeholder="Confirmare parola" onChange={this.handleChange}/>
                            </Form.Group>
                            {this.state.errors["password_confirm"] && <div className="alert alert-danger">{this.state.errors["password_confirm"]}</div>}
                            <Button className="align-self-center btn-login mt-3" type="button" onClick={this.handleSubmit} onKeyPress={this.handleEnter}>
                                Resetează parola
                            </Button>
                            <br/>
                        </Form>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}