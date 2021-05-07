import React, { Component } from "react";
import Joi from "joi-browser";
import Footer from "../utils/footer";
import {Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle} from "react-icons/all";
import {Link} from "react-router-dom";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      prenume: "",
      nume: "",
      email: "",
      numeUtilizator: "",
      parola: "",
      confirmParola: "",
      tip: "",
      showModal: false
    };

    this.schema = {
      prenume: Joi.string().required().label("Prenume"),
      nume: Joi.string().required().label("Nume"),
      email: Joi.string().required().label("Email"),
      numeUtilizator: Joi.string().required().label("NumeUtilizator"),
      parola: Joi.string().required().label("Parola"),
      confirmParola: Joi.string().required().label("ConfirmParola"),
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  closeModal = e => {
    this.setState({
      showModal: false,
    });
  };

  doSubmit = (e) => {
    e.preventDefault();
    //Call the server
    const payload = {
      prenume: this.state.prenume,
      nume: this.state.nume,
      email: this.state.email,
      numeUtilizator: this.state.numeUtilizator,
      parola: this.state.parola,
      confirmParola: this.state.confirmParola,
      tip:this.state.tip
    };
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
          // this.props.history.replace("/autentificare")
        this.setState({showModal: true})
      }
      else if (res.status === 409) {
          alert("Username-ul este deja existent pentru administrator!")
          this.setState({
            prenume: "",
            nume: "",
            email: "",
            numeUtilizator: "",
            parola: "",
            confirmParola: ""
          })
      }
      else if (res.status === 417){
        alert("Username already exist!")
        this.setState({
          prenume: "",
          nume: "",
          email: "",
          numeUtilizator: "",
          parola: "",
          confirmParola: "",
          tip: ""
        })
      }
      else if (res.status === 401) {
        alert("Parolele nu sunt la fel!");
      }
  })
    console.log("Submitted");
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      selectedOption: event.target.value,
    });
  }

  render() {
    document.body.classList = "";
    document.body.classList.add("background-register");
    return (
      <React.Fragment>
        {/*<NavBar/>*/}
           <div className="container-reg">
            <div className="row row-form-reg" >
              <div className="col-md-6 reg-sec offset-md-3" id="register-form">
                <h2 className="text-center" >Înregistrare</h2>
                <form className="reg-form">
                  <div className="form-group">
                    <label className="text-label">Prenume</label>
                    <input
                      type="text"
                      name="prenume"
                      className="form-control"
                      placeholder="Prenume"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label">Nume</label>
                    <input
                      type="text"
                      name="nume"
                      className="form-control"
                      placeholder="Nume"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label">E-mail</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label">Nume utilizator</label>
                    <input
                      type="text"
                      name="numeUtilizator"
                      className="form-control"
                      placeholder="Nume utilizator"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label">Parola</label>
                    <input
                      type="password"
                      name="parola"
                      className="form-control"
                      placeholder="Parola"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label">Confirmă parola</label>
                    <input
                      type="password"
                      name="confirmParola"
                      className="form-control"
                      placeholder="Confirma parola"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label">Tip:</label>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            value="PERSOANA_FIZICA"
                            name="tip"
                            checked={this.state.selectedOption === "PERSOANA_FIZICA"}
                            onChange={this.handleChange}
                        />
                        PERSOANĂ FIZICĂ
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            value="PERSOANA_JURIDICA"
                            name="tip"
                            checked={this.state.selectedOption === "PERSOANA_JURIDICA"}
                            onChange={this.handleChange}
                        />
                        PERSOANĂ JURIDICĂ
                      </label>
                      {/*<div> Selectat: {this.state.selectedOption}</div>*/}
                    </div>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label"/>
                    <button
                      type="submit"
                      className="btn btn-login float-right"
                      onClick={this.doSubmit}
                    >
                      Înregistrare
                    </button>
                    <Modal
                        size="md"
                        show={this.state.showModal}
                        onHide={this.closeModal}
                    >
                      <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Înregistrarea s-a efectuat cu succes! <AiFillCheckCircle style={{color:"green"}}/>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Card>
                          <Link to="/autentificare" type="button" className="btn btn-istoric">Autentificare</Link>
                        </Card>
                      </Modal.Body>
                      {/*<Modal.Footer>*/}
                      {/*  <Link type="button" className="btn btn-exit-modal" to= "/contul-meu/actualizare-date" onClick={this.closeModal}>Închide</Link>*/}
                      {/*</Modal.Footer>*/}
                    </Modal>
                  </div>
                </form>
              </div>
            </div>
          </div>
        <div id="foot" style={{marginTop: "1100px"}}>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
