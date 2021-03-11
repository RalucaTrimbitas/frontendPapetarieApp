import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons" ;
import { NavLink } from "react-router-dom";
import Footer from "./footer";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3 class="text-center header-text">
          <span class="text-center"> Categoriile noastre</span>
        </h3>
        <div class="container my-4">
          <div class="row text-center">
            <div class="col-md-3 mb-4 col1">
              <h4 class="my-5 h4">Accesorii de birou</h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/accesorii-birou"
              >
                <img
                  class="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/acces.jpg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              {/* <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer> */}
              </NavLink>
            </div>
            <div class="col-md-3 mb-4">
              <h4 class="my-5 h4">Instrumente de scris</h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/instrumente-scris"
              >
                <img
                  class="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/pen.jpg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
            <div class="col-md-3 mb-4">
              <h4 class="my-5 h4">Rechizite scolare</h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/rechizite-scolare"
              >
                <img
                  class="rounded-circle z-depth-2"
                  alt="100x100"
                  src="./poze/penar.jpeg"
                  data-holder-rendered="true"
                  style={{ width: 280, height: 270 }}
                />
              </NavLink>
            </div>
            <div class="col-md-3 mb-4">
              <h4 class="my-5 h4">Art and hobby- creativ</h4>
              <NavLink
                className="nav-item-aut nav-link"
                to="/./produse/arthobby"
              >
                <img
                  class="rounded-circle z-depth-2"
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
                  <FontAwesomeIcon className="icon-car" icon={faCar} />
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
                  <FontAwesomeIcon
                    className="icon-clock"
                    icon={faClock}
                  />
                  COMENZI ONLINE 24/7
                </h5>
                <p className="card-text">
                  Puteți comanda atât online,cât și telefonic la numarul: 0751215301 ( L-V: 8-16)
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FontAwesomeIcon className="icon-redo" icon={faRedo} />
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
                  <FontAwesomeIcon className="icon-lock" icon={faLock} />
                  PLATA ÎN SIGURANȚĂ
                </h5>
                <p className="card-text">
                  Plata se face in momentul ridicarii produselor, cash sau card.
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
