import React, { Component } from "react";
import Joi from "joi-browser";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./footer";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      numeUtilizator: "",
      parola: "",
      errors: {},
    };

    this.schema = {
      numeUtilizator: Joi.string().required(),
      parola: Joi.string().required(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit = (e) => {
    e.preventDefault();
    //Call the server
    const payload = {
      numeUtilizator: this.state.numeUtilizator,
      parola: this.state.parola,
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
        localStorage.setItem("numeUtilizator", this.state.numeUtilizator);
        res.json().then((json) => {
          const { result, name } = json;
          localStorage.setItem("name", name);
          if (result === "administrator") {
            localStorage.setItem("userType", result);
            this.props.history.replace("/administratordashboard");
            console.log("administrator dashboard");
          }
          else 
          if (result === "client") {
            localStorage.setItem("userType", result);
            this.props.history.replace("/clientdashboard");
            console.log("client dashboard");
          }
        });

        // LOGIN PERSISTANCE
      } else if (res.status === 404) {
        alert("Username doesn't exist!");
      } else if (res.status === 401) {
        alert("Password is wrong!");
      }
    });

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
        <div className="container-log">
          <div className="row">
            <div className="col-md-4 login-sec offset-md-2">
              <h2 className="text-center" >Autentificare</h2>
              <form className="login-form">
                <div className="form-group">
                  <label className="text-label">Nume utilizator</label>
                  <input
                    // id="UserInput"
                    // placeholder="&#61447;"
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

                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"></input>
                    <p>Păstrează datele</p>
                  </label>
                  <button
                    type="submit"
                    className="btn btn-login float-right"
                    onClick={this.doSubmit}
                  >
                    Autentificare
                  </button>
                  <p>
                    <br></br>
                    <br></br>
                    <br></br>
                    Nu ai cont încă?{" "}
                    <a href="/inregistrare"> Creaază-ți un cont</a>
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
