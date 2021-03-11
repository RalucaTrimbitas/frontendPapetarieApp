import React, { Component } from "react";
import Joi from "joi-browser";
import Footer from "./footer";

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirm: "",
    };

    this.schema = {
      name: Joi.string().required().label("Prenume"),
      surname: Joi.string().required().label("Nume"),
      email: Joi.string().required().label("Email"),
      password: Joi.string().required().label("Parola"),
      confirm: Joi.string().required().label("Confirm"),
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }
  doSubmit = () => {
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
        <section reg-block id="reg-block">
        <div className="container-reg" >
          <div className="row" id="roww">
            <div className="col-md-6 reg-sec offset-md-0">
              <h2 className="text-center">Inregistrare</h2>
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
                  <label className="text-label">Parola</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Parola"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-label">Confirma parola</label>
                  <input
                    type="text"
                    name="confirm"
                    className="form-control"
                    placeholder="Confirma parola"
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div className="form-check">
                  <label className="form-check-label"></label>
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.doSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        {/* <div className="container-contact">
          <div className="row">
            <div className="col-md-5 contact-sec">
              <h2 className="text-center">Inregistrare</h2>
              <form className="contact-form">
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
                  <label className="text-label">Parola</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Parola"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-label">Confirma parola</label>
                  <input
                    type="text"
                    name="confirm"
                    className="form-control"
                    placeholder="Confirma parola"
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div className="form-check">
                  <label className="form-check-label"></label>
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.doSubmit}
                  >
                    Trimite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <div id="foot">
          <Footer></Footer>
        </div>
        
      </React.Fragment>
    );
  }
}

export default RegisterForm;
