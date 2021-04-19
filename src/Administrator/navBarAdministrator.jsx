import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FiShoppingCart} from "react-icons/all"
import {FiHeart} from "react-icons/all"
import {FaRegUser} from "react-icons/all"
import {FaSignOutAlt} from "react-icons/all"




class NavBarAdministrator extends React.Component{

handleLogout = () => {
  localStorage.clear()
}

links = () => {
  return (
    <React.Fragment>
      <div className="row al_center" id="rowHead">
        <div className="col-md-12">
          <div className="header-text-up">
            <FontAwesomeIcon
              className="icon-phone"
              icon={faPhone}
              style={{ cursor: "pointer" , color: "#4b1515de"}}
            />
            <a href="tel:+407270392149" id="headertext">
              +40 751 215 301
            </a>
            <FontAwesomeIcon
              className="icon-mail"
              icon={faEnvelope}
              style={{ cursor: "pointer" , color: "#4b1515de"}}
            />{" "}
            <a
              className="cg"
              href="mailto:comenzz@papetarie.ro"
              id="headertext"
            >
              comenzi@papetarie.ro
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <Link className="navbar-brand" id="nav-brand" to="/home">
          <img className="hvr-grow ml-4" id="logoDiana" src="/poze/logoDiana.png" alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{color:"black"}}
              >
                Produse
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <NavLink
                  className="dropdown-item"
                  to="/produse/accesorii-birou/agende-si-blocnotes-uri"
                >
                  Accesorii de birou
                </NavLink>

                <NavLink
                  className="dropdown-item"
                  to="/./produse/instrumente-scris"
                >
                  Instrumente de scris
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/./produse/rechizite-scolare"
                >
                  Rechizite școlare
                </NavLink>
                <NavLink className="dropdown-item" to="/./produse/arthobby">
                  Articole creative și craft
                </NavLink>
              </div>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-item nav-link"
                to="/promotii"
                id="navItem"
                style={{color:"black"}}
              >
                Promoții
              </NavLink>
            </li>
            <li className="nav-item d-inline">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control ml-auto mr-2 "
                  id="SearchInput"
                  type="search"
                  placeholder="&#61442;"
                  style={{borderColor: "#4b1515de"}}
                />
                <button className="btn btn-cautare my-2 my-sm-0" type="submit">
                  Caută
                </button>
              </form>
            </li>
          </ul>
          <NavLink className="nav-item nav-link" to="/produse-favorite">
            <FiHeart
              className="icons-nav hvr-grow"
              style={{ cursor: "pointer" }}
            ></FiHeart>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/cos-cumparaturi">
            <FiShoppingCart
            className="icons-nav hvr-grow"
            style={{ cursor: "pointer" }}
            />
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/autentificare"
            id="navItem"
          >
            <FaRegUser
            className="icons-nav hvr-grow"
            style={{ cursor: "pointer" }}
            ></FaRegUser>
          </NavLink>
          <NavLink
            onClick={this.handleLogout.bind(this)}
            className="nav-item nav-link"
            to="/autentificare"
            id="navItem"
          >
              <FaSignOutAlt
              className="icons-nav hvr-grow mr-4"
              style={{ cursor: "pointer" }}
              ></FaSignOutAlt>
           
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}
render() {
  return(
      this.links()
  )
}
};

export default NavBarAdministrator;