import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FiShoppingCart } from "react-icons/all";
import { FiHeart } from "react-icons/all";
import { FaRegUser } from "react-icons/all";

const NavBarDefault = () => {
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
            <a
              href="tel:+407270392149"
              id="headertext"
              style={{ color: "black" }}
            >
              +40 751 215 301
            </a>
            <FontAwesomeIcon
              className="icon-mail"
              icon={faEnvelope}
              style={{ cursor: "pointer", color: "#4b1515de" }}
            />{" "}
            <a
              className="cg"
              href="mailto:comenzz@papetarie.ro"
              id="headertext"
              style={{ color: "black" }}
            >
              comenzi@papetarie.ro
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" id="nav-brand" to="/home">
          <img
            className="hvr-grow ml-4"
            id="logoDiana"
            src="/poze/logoDiana.png"
            alt="logo"
          ></img>
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
              <li className="nav-item active">
                  <NavLink
                    className="nav-item nav-link lya"
                    // to="/produse/accesorii-birou(1.1)"
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
              <form className="form-inline">
                <input
                  className="form-control  mr-sm-2 "
                  id="SearchInput"
                  type="search"
                  placeholder="&#61442;"
                  style={{ borderColor: "#4b1515de" }}
                />
                <button className="btn btn-cautare my-2 my-sm-0" type="submit">
                  Caută
                </button>
              </form>
            </li>
            {/* <li class="text-truncate">
        <form class="input-group w-100">
            <input class="form-control" name="search" placeholder="Search Here" autocomplete="off" autofocus="autofocus" type="text"/>
            <div class="input-group-btn">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </div>
        </form>
</li>   */}
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
              className="icons-nav hvr-grow mr-4"
              style={{ cursor: "pointer" }}
            ></FaRegUser>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBarDefault;
