import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaSignOutAlt, FiShoppingCart } from "react-icons/all";
import { FiHeart } from "react-icons/all";
import { FaRegUser, FiSettings } from "react-icons/all";

class NavBarClient extends React.Component {
  handleLogout = () => {
    localStorage.clear();
  };

  links = () => {
    return (
      <React.Fragment>
        <div className="row al_center" id="rowHead">
          <div className="col-md-12">
            <div className="header-text-up">
              <FontAwesomeIcon
                className="icon-phone"
                icon={faPhone}
                style={{ cursor: "pointer", color: "#4b1515de" }}
              />
              <a href="tel:+407270392149" id="headertext">
                +40 751 215 301
              </a>
              <FontAwesomeIcon
                className="icon-mail"
                icon={faEnvelope}
                style={{ cursor: "pointer", color: "#4b1515de" }}
              />{" "}
              <a
                className="cg"
                href="mailto:comenzi@papetarie.ro"
                id="headertext"
              >
                comenzi@papetarie.ro
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" id="nav-brand" to="/home">
            <img
              className="hvr-grow ml-4"
              id="logoDiana"
              src="/poze/logoDiana.png"
              alt="logo"
            />
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
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                    className="nav-item nav-link lya"
                    to="/produse-sidebar"
                    style={{ color: "#492020" }}
                >
                  Produse
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink
                    className="nav-item nav-link"
                    to="/promotii"
                    id="navItem"
                    style={{ color: "#492020" }}
                >
                  Promoții
                </NavLink>
              </li>
              <li className="nav-item d-inline">
                <form className="form-inline ">
                  <input
                    className="form-control mr-sm-2 "
                    id="SearchInput"
                    type="search"
                    placeholder="&#61442;"
                    style={{ borderColor: "#4b1515de" }}
                  />
                  <button
                    className="btn btn-cautare my-2 my-sm-0"
                    type="submit"
                  >
                    Caută
                  </button>
                </form>
              </li>
            </ul>
            <NavLink className="nav-item nav-link" to="/produse-favorite">
              <FiHeart
                className="icons-nav hvr-grow"
                style={{ cursor: "pointer" }}
              />
            </NavLink>
            <NavLink className="nav-item nav-link " to="/cos-cumparaturi">
              <FiShoppingCart
                className="icons-nav hvr-grow"
                style={{ cursor: "pointer" }}
              />
            </NavLink>
            <div className="nav-item dropdown navbar-nav">
              <p
                className="nav-link dropdown "
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaRegUser
                  className="icons-nav hvr-grow mt-3 ml-2 mr-3"
                  style={{ cursor: "pointer"}}
                />
              </p>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown1"
              >
                <NavLink
                  className="dropdown-item"
                  to="/contul-meu/setari-cont"
                >
                <FiSettings style={{marginRight:"6px"}}/>
                Panou control
                </NavLink>

                <div className="dropdown-divider"/>
                <NavLink 
                className="dropdown-item"
                onClick={this.handleLogout.bind(this)}
                id="navItem" to="/autentificare">
                  <FaSignOutAlt style={{marginRight:"6px"}}/>
                  Deconectare
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  render() {
    return this.links();
  }
}

export default NavBarClient;
