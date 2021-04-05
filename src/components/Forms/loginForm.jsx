import React from "react";
import Joi from "joi-browser";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../utils/footer";
import {NavLink} from "react-router-dom" ;

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
            this.props.history.replace("/contul-meu/setari-cont");
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
    document.body.classList = "";
    document.body.classList.add("background-register");
    return (
      <React.Fragment>
        <div className="container-log">
          <div className="row">
            <div className="col-md-4 login-sec offset-md-4" id="login-form" style={{marginTop: "20px"}}>
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
                  <p >
                  <span style={{float : "inline"}}>
                    <br></br>
                    <br></br>
                    <br></br>
                    Nu ai cont încă?
                    <NavLink className="nav-item-aut nav-link menu-item" to="/inregistrare"> Creaază-ți un cont</NavLink>
                  </span>
                  </p>
                </div>
              </form>
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
