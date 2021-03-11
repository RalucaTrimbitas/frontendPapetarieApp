import React, { Component } from "react";
import Joi from "joi-browser";
import "bootstrap/dist/css/bootstrap.css";
import Footer from './footer';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: { email: "", password: "" },
      errors: {},
    };

    this.schema = {
      email: Joi.string().required().label("Email"),
      password: Joi.string().required().label("Parola"),
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit = () => {
    //Call the server
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
        <div className="container-log" >
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Autentificare</h2>
              <form className="login-form">
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

                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"></input>
                    <p>Pastreaza datele</p>
                  </label>
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.doSubmit}
                  >
                    Submit
                  </button>
                  <p>
                    <br></br>
                    <br></br>
                    <br></br>
                    Nu ai cont inca? <a href="/inregistrare"> Creaaza-ti un cont</a>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-md-5 banner-sec">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      id="img"
                      className="d-block img-fluid"
                      src="./poze/birou.jpg"
                      alt="First slide"
                    ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>Alege solutii colorate pentru biroul tau</h2>
                        <p>Agrafe</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      id="img"
                      className="d-block img-fluid"
                      src="./poze/foarfeca.jpeg"
                      alt="Second slide"
                    ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>Instrumente de scris</h2>
                        <p>Personalizeaza-ti biroul in stilul tau!</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      id="img"
                      className="d-block img-fluid"
                      src="./poze/paint.jpg"
                      alt="Third slide"
                    ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>Fii creativ!</h2>
                        <p>Lasa-ti imaginatia sa depaseasca orice limita!</p>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <br></br>
      <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default LoginForm;
