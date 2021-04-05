import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Footer from "../utils/footer";


class HomePage extends React.Component {
  render() {
    document.body.classList = "";
    document.body.classList.add("background-general");
    return (
      <React.Fragment>
        {/* <div className="container my-4">
          <div className="row text-center">
            <div className="col-md-3 mb-4">

              <img src="./poze/plic.jpg" alt="poza" style={{height: "500px"}}></img>
              </div>
              </div>
              </div> */}
         
        
        <div className="container my-4" >
          <div className="row text-center">
          <h3 className="text-center header-text">
          <span className="text-center" style={{ color: "#3E1B0D"}}>
            {" "}
            Categoriile noastre
          </span>
        </h3>
            <div className="col-md-3 mb-4 col1">
              <h4 className="my-5 h4 " style={{ color: "#3E1B0D" }}>
                Accesorii de birou
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/accesorii-birou"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/acces.jpg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
                {/* <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer> */}
              </NavLink>
            </div>
            <div className="col-md-3 mb-4">
              <h4 className="my-5 h4" style={{ color: "#3E1B0D" }}>
                Instrumente de scris
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/instrumente-scris"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/pen.jpg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
            <div className="col-md-3 mb-4">
              <h4 className="my-5 h4" style={{ color: "#3E1B0D" }}>
                Rechizite scolare
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/rechizite-scolare"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/penar.jpeg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
            <div className="col-md-3 mb-4">
              <h4 className="my-5 h4" style={{ color: "#3E1B0D" }}>
                Articole creative și craft
              </h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/arthobby"
              >
                <img
                  className="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/craft1.png"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row" id="header">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faCar} />
                  TRANSPORT{" "}
                </h5>
                <p className="card-text">
                  Oferim transport pe raza municipiului Blaj și în împrejurimi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faClock} />
                  COMENZI ONLINE 24/7
                </h5>
                <p className="card-text">
                  Puteți comanda atât online,cât și telefonic la numărul:
                  0751215301 ( L-V: 8-16)
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faRedo} />
                  RETUR GRATUIT
                </h5>
                <p className="card-text">
                  Retur garantat în 30 de zile de la achizitonarea oricărui
                  produs!
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icons-card" icon={faLock} />
                  PLATA ÎN SIGURANȚĂ
                </h5>
                <p className="card-text">
                  Plata se face în momentul ridicării produselor, cash sau card.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default HomePage;
