import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
// import { faShoppingCart as farShoppingCart } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="row al_center" id="rowHead">
        <div className="col-lg-6 col-12 tc tl_lg col-md-12">
          <div className="header-text-up">
            <FontAwesomeIcon
              className="icon-phone"
              icon={faPhone}
              style={{ cursor: "pointer" }}
            />
            <a href="tel:+407270392149" id="headertext">
              +40 751 215 301
            </a>
            <FontAwesomeIcon
              className="icon-mail"
              icon={faEnvelope}
              style={{ cursor: "pointer" }}
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" id="nav-brand" to="/home">
          <img id="logoDiana" src="./poze/logoDiana6.png"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Produse
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                <NavLink
                  className="dropdown-item"
                  to="/./produse/accesorii-birou"
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
                  Art and hobby-creativ
                </NavLink>
              </div>
            </li>
            <li class="nav-item active">
              <NavLink
                className="nav-item nav-link"
                to="/promotii"
                id="navItem"
              >
                Promoții
              </NavLink>
            </li>
            <li class="nav-item">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button class="btn btn-cautare my-2 my-sm-0" type="submit">
                  Caută
                </button>
              </form>
            </li>
          </ul>
          <NavLink className="nav-item nav-link" to="/produseFavorite">
            <FontAwesomeIcon
              className="icon-heart"
              icon={farHeart}
              style={{ cursor: "pointer" }}
            />
          </NavLink>
          <NavLink className="nav-item nav-link" to="/cosCumparaturi">
            <FontAwesomeIcon
              className="icon-cart"
              icon={faShoppingCart}
              style={{ cursor: "pointer" }}
            />
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/autentificare"
            id="navItem"
          >
            <FontAwesomeIcon
              className="icon-user"
              icon={farUser}
              style={{ cursor: "pointer" }}
            />
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
