import React from "react";
import Joi from "joi-browser";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../utils/footer";
import {NavLink} from "react-router-dom" ;
import Form from "./form";
import {Modal} from "react-bootstrap";
import { IoIosWarning} from "react-icons/all";

class LoginForm extends Form {
  constructor() {
    super();
    this.state = {
      data: {
        numeUtilizator: "",
        parola: "",
      },
      showModal1: false,
      showModal2: false,
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  closeModal = e => {
    this.setState({
      showModal1: false,
      showModal2: false,
    });
  };

  schema = {
    numeUtilizator: Joi.string().required().error(() => {return {message: "Numele de utilizator este obligatoriu."}}),
    parola: Joi.string().required().error(() => {return {message: "Parola este obligatorie."}}),
  };


  doSubmit = (e) => {
    e.preventDefault();
    //Call the server
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
        localStorage.setItem("numeUtilizator", this.state.data.numeUtilizator);
        res.json().then((json) => {
          const { jwt, userType, name } = json;
          localStorage.setItem("jwt", jwt);
          localStorage.setItem("name", name);
          localStorage.setItem("userType", userType);
          if (userType === "administrator")
            this.props.history.replace("/administratordashboard")
          else if (userType === "client")
            this.props.history.replace("/contul-meu/acasa-client");
        });

        // LOGIN PERSISTANCE
      } else if (res.status === 404) {
        this.setState({
          showModal1: true
        })
      } else if (res.status === 401) {
        this.setState({
          showModal2: true
        })
      }
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    document.body.classList = "";
    document.body.classList.add("background-panou");
    return (
      <React.Fragment>
        {/*<NavBar/>*/}
        <div className="container-log ">
          <div className="row">
            <div className="col-md-4 login-sec offset-md-4" id="login-form" style={{marginTop: "20px"}}>
              <h2 className="text-center" >Autentificare</h2>
              <form className="login-form">
                <div className="form-group">
                  <div className="form-group text-label">
                    {this.renderInput('numeUtilizator', "Nume utilizator: ","text", "Nume utilizator")}
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-group text-label">
                    {this.renderInput('parola', "Parola: ","password", "Parola")}
                  </div>
                </div>

                <div className="form-check">
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.doSubmit}
                  >
                    Autentificare
                  </button>
                  <p >
                  <span style={{float : "inline"}}>
                    <br/>
                    <br/>
                    {/*<br/>*/}
                    Nu ai cont încă?
                    <NavLink className="link-login" to="/inregistrare"> Creaază-ți un cont</NavLink>
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
        <Modal className="modal-confirm" show={this.state.showModal1} onHide={this.closeModal} >
          <Modal.Header closeButton className="modal-header">
            <div className="icon-box">
            <IoIosWarning className="warning"/>
            </div>
            <Modal.Title className="modal-title">Nu există cont cu acest nume de utilizator!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">Dacă nu aveți deja un cont creat, alegeți varianta de înregistrare.</Modal.Body>
        </Modal>
        <Modal className=" modal-confirm" show={this.state.showModal2} onHide={this.closeModal} >
          <Modal.Header closeButton className="modal-header">
            <div className="icon-box">
              <IoIosWarning style={{fontSize:"25px"}}/>
            </div>
            <Modal.Title className="modal-title">Ați introdus o parolă greșită!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">Încercați din nou.</Modal.Body>
        </Modal>
        <br/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default LoginForm;
