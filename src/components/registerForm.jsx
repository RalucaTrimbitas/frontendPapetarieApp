import React, { Component } from "react";
import Joi from "joi-browser";
import Footer from "./footer";

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
    };

    this.schema = {
      prenume: Joi.string().required().label("Prenume"),
      nume: Joi.string().required().label("Nume"),
      email: Joi.string().required().label("Email"),
      numeUtilizator: Joi.string().required().label("NumeUtilizator"),
      parola: Joi.string().required().label("Parola"),
      confirmParola: Joi.string().required().label("ConfirmParola"),
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

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
          this.props.history.replace("/autentificare")
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
          confirmParola: ""
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
    });
  }
  render() {
    return (
      <React.Fragment>
           <div className="container-reg">
            <div className="row row-form-reg" >
              <div className="col-md-6 reg-sec offset-md-3">
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
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="text-label">Nume</label>
                    <input
                      type="text"
                      name="nume"
                      className="form-control"
                      placeholder="Nume"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="text-label">E-mail</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="text-label">Nume utilizator</label>
                    <input
                      type="text"
                      name="numeUtilizator"
                      className="form-control"
                      placeholder="Nume utilizator"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="text-label">Parola</label>
                    <input
                      type="password"
                      name="parola"
                      className="form-control"
                      placeholder="Parola"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="text-label">Confirmă parola</label>
                    <input
                      type="text"
                      name="confirmParola"
                      className="form-control"
                      placeholder="Confirma parola"
                      onChange={this.handleChange}
                    ></input>
                  </div>

                  <div className="form-check">
                    <label className="form-check-label"></label>
                    <button
                      type="submit"
                      className="btn btn-register float-right"
                      onClick={this.doSubmit}
                    >
                      Înregistrează-te
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> 
    
        <div id="foot">
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
