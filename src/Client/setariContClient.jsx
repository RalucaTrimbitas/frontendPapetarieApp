import React, {Component} from "react";
import {Button, Card, Form, Modal} from "react-bootstrap";
import {AiFillCheckCircle, IoIosWarning} from "react-icons/all";
import Joi from "joi-browser";
import {Link} from "react-router-dom";

class SetariContClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // token: new URLSearchParams(this.props.location.search).get("token"),
            data: {
                numeUtilizator: "",
                parola_actuala: "",
                parola_noua: "",
                confirmare_parola: ""
            },
            errors: {},
            showAlert: false,
            showModal: false,
            message: ""
            // email: "",
            // showAlert: false,
            // message: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    schema = {
        numeUtilizator: Joi.string().allow(""),
        parola_actuala: Joi.string().required().error(() => {return {message: "Parola este obligatorie."}}),
        parola_noua: Joi.string().min(8).required().error(() => {return {message: "Parola trebuie să conțină cel puțin 8 caractere."}}),
        confirmare_parola: Joi.string().min(8).required().error(() => {return {message: "Parola trebuie să conțină cel puțin 8 caractere."}}),
    }

    closeAlert = () => {
        this.setState({
            showAlert: false
        })
    }

    doSubmit = () => {
        const payload = {}
        payload["numeUtilizator"] = sessionStorage.getItem("numeUtilizator")
        payload["parola_actuala"] = this.state.data.parola_actuala
        payload["parola_noua"] = this.state.data.parola_noua
        payload["confirmare_parola"] = this.state.data.confirmare_parola
        fetch('http://localhost:8080/resetare-parola-client', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem("jwt")
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
                else if (res.status === 406) {
                    this.setState({
                        showAlert: true,
                        message: "Parola actuală este incorectă!"
                    })
                }
            })
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
            this.doSubmit(e);
        }
    };

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} });
        if (errors) console.log(errors);

        this.doSubmit();
    }

    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);

        if (!error) {
            if (this.state.data["parola_noua"] !== this.state.data["confirmare_parola"]) {
                const error = {}
                error["confirmare_parola"] = "Cele două parole nu coincid."
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


    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
    return (
        <React.Fragment>
                    <main className="col-md-10 col-xs-11">
                        {/*{this.state.msg.length > 0 ?*/}
                        {/*    <Alert className="sticky-top" variant='danger' show={this.state.showAlert} onClose={this.closeAlert} dismissible>*/}
                        {/*        <Alert.Heading> {this.state.msg} </Alert.Heading>*/}
                        {/*        /!*<p>*!/*/}
                        {/*        /!*    {this.state.msg}*!/*/}
                        {/*        /!*</p>*!/*/}
                        {/*    </Alert>*/}
                        {/*    : ""*/}
                        {/*}*/}
                        <div className="card card-panou" style={{marginTop: "80px",  marginBottom: "70px"}}>
                            <div className="card-header text-center " id="card-client" >Setări cont</div>
                            <div className="card-body">
                                {/*<div className="align-content-center">*/}
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
                                                    <Link to="/contul-meu/acasa-client" type="button" className="btn btn-istoric">Înapoi la Panou control</Link>
                                                </Card>
                                            </Modal.Body>
                                        </Modal>
                                        <Form className="d-flex flex-column my-border-form w-100 login-sec" id="login-form" >
                                            <h2 className="align-self-center text-uppercase">Schimbare Parolă</h2>
                                            <Form.Group className="form-group text-label">
                                                <Form.Label className="my-label">Parolă actuală:</Form.Label>
                                                <Form.Control className="align-self-center bg-white" name="parola_actuala" type="password" placeholder="Parola actuala" onChange={this.handleChange}/>
                                            </Form.Group>
                                            {this.state.errors["parola_actuala"] && <div className="alert alert-danger">{this.state.errors["parola_actuala"]}</div>}
                                            <Form.Group className="form-group text-label">
                                                <Form.Label className="my-label">Parolă nouă:</Form.Label>
                                                <Form.Control className="align-self-center bg-white" name="parola_noua" type="password" placeholder="Parola noua" onChange={this.handleChange}/>
                                            </Form.Group>
                                            {this.state.errors["parola_noua"] && <div className="alert alert-danger">{this.state.errors["parola_noua"]}</div>}
                                            <Form.Group className="form-group text-label">
                                                <Form.Label className="my-label">Confirmare parolă nouă:</Form.Label>
                                                <Form.Control className="align-self-center bg-white" name="confirmare_parola" type="password" placeholder="Confirmare parola" onChange={this.handleChange}/>
                                            </Form.Group>
                                            {this.state.errors["confirmare_parola"] && <div className="alert alert-danger">{this.state.errors["confirmare_parola"]}</div>}
                                            <Button className="align-self-center btn-login mt-3" type="button" onClick={this.handleSubmit} onKeyPress={this.handleEnter}>
                                                Schimbare parolă
                                            </Button>
                                            <br/>
                                        </Form>
                                    </div>
                                {/*</div>*/}
                            </div>
                        </div>
                    </main>
        </React.Fragment>
    )}
}
export default SetariContClient;