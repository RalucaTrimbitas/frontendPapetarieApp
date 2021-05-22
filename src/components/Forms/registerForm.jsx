import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import {Card, Modal} from "react-bootstrap";
import {AiFillCheckCircle, FaTimes, IoIosWarning} from "react-icons/all";
import {Link} from "react-router-dom";
import Footer from "../utils/footer";

class RegisterForm extends Form {
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
      showModal: false,
      showModal1:false,
      showModal2: false,
      showModal3: false,
      errors: {}
    };
  }

  schema = {
      prenume: Joi.string().required().error(() => {return {message: "Prenumele este obligatoriu."}}),
      nume: Joi.string().required().error(() => {return {message: "Numele este obligatoriu."}}),
      email: Joi.string().required().error(() => {return {message: "Adresa de email este obligatorie."}}),
      numeUtilizator: Joi.string().required().error(() => {return {message: "Numele de utilizator este obligatoriu."}}),
      parola: Joi.string().required().error(() => {return {message: "Parola este obligatorie."}}),
      confirmParola: Joi.string().required().error(() => {return {message: "Conforimă parola este obligatoriu."}}),
      tip: Joi.string().label("Tip").error(() => {return {message: "Confirmă parola este obligatoriu."}}),
      companie: Joi.string().label("Companie").error(() => {return {message: "Numele companiei este obligatoriu."}}),
      codFiscal: Joi.string().label("Cod fiscal").error(() => {return {message: "Codul fiscal este obligatoriu."}}),
      numarTelefon: Joi.string().label("Numar telefon").error(() => {return {message: "Numărul de telefon este obligatoriu."}})
    };

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
      selectedOption: event.target.value,
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      showModal1: false,
      showModal2: false,
      showModal3: false
    });
  };

  doSubmit = (e) => {
    e.preventDefault()
    //Call the server
    const payload = {
        prenume: this.state.data.prenume,
        nume: this.state.data.nume,
        email: this.state.data.email,
        numeUtilizator: this.state.data.numeUtilizator,
        parola: this.state.data.parola,
        confirmParola: this.state.data.confirmParola,
        tip:this.state.data.tip,
        companie:this.state.data.companie,
        codFiscal:this.state.data.codFiscal,
        numarTelefon:this.state.data.numarTelefon
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
        this.setState({showModal: true})
      }
      else if (res.status === 409) {
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
            showModal2: true
          })
      }
      else if (res.status === 417){
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
          showModal2: true
        })
      }
      else if (res.status === 401) {
        this.setState({
          showModal1: true
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
            <div className="row row-form-reg" >
              <div className="col-md-6 reg-sec offset-md-3" id="register-form">
                <h2 className="text-center" >Înregistrare</h2>
                <form className="reg-form">
                  <div className="form-group text-label">
                    {this.renderInput('prenume', "Prenume: ","text","Prenume")}
                  </div>
                  <div className="form-group text-label">
                    {this.renderInput('nume', "Nume: ","text","Nume")}
                  </div>
                  <div className="form-group text-label">
                    {this.renderInput('email', "Email: ","text","Email")}
                  </div>
                  <div className="form-group text-label">
                    {this.renderInput('numeUtilizator', "Nume utilizator: ","text", "Nume utilizator")}
                  </div>
                  <div className="form-group text-label">
                    {this.renderInput('parola', "Parola: ","password", "Parola")}
                  </div>
                  <div className="form-group text-label">
                    {this.renderInput('confirmParola', "Confirmă parola: ","password", "Confirmă parola")}
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
                        <div className="form-group text-label">
                          {this.renderInput('numarTelefon', "Număr telefon: ","text", "Număr de telefon")}
                        </div>
                      </div>
                  :
                  ""
                  }
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
                    </Modal>
                    <Modal
                        size="md"
                        show={this.state.showModal1}
                        onHide={this.closeModal}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Parolele nu corespund! <FaTimes style={{color:"red"}}/>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Încercați din nou!
                      </Modal.Body>
                    </Modal>
                    <Modal className="modal-confirm" show={this.state.showModal2} onHide={this.closeModal} >
                      <Modal.Header closeButton className="modal-header">
                        <div className="icon-box">
                          <IoIosWarning className="warning"/>
                        </div>
                        <Modal.Title className="modal-title">Există deja un cont creat cu acest nume de utilizator!</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="modal-body">Încercați alt nume de utilizator!</Modal.Body>
                    </Modal>
                  </div>
                </form>
              </div>
            </div>
          </div>
        <div id="foot" style={{marginTop: "1300px"}}>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
