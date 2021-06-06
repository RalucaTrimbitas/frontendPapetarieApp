import React, {Component} from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {BsFillExclamationTriangleFill, FaShoppingCart, FaSignOutAlt, FiSettings} from "react-icons/all";
import { FaRegUser } from "react-icons/all";
import {Button, Form, FormControl, Modal} from "react-bootstrap";

export class NavBarDefault extends Component {

  constructor() {
    super();
    this.state= {
      searchText: "",
      show: false
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal = e => {
    this.setState({
      show: false,
      showModal2: false,
    });
  };

  handleLogout = () => {
    sessionStorage.clear();
  };

  render () {
    return (
        <React.Fragment>
          <div className="row al_center mt-0" id="rowHead">
            <div className="col-md-12 mt-0">
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
                    href="mailto:papetariadiana@gmail.com"
                    id="headertext"
                    style={{ color: "black" }}
                >
                  papetariadiana@gmail.com
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
                      className="nav-item-produse nav-link "
                      to="/produse/accesorii-birou/agende-si-blocnotes-uri"
                      style={{ color: "#492020" }}
                  >
                    Produse
                  </NavLink>
                </li>

                {/*<li className="nav-item active">*/}
                {/*  <NavLink*/}
                {/*      className="nav-item nav-link"*/}
                {/*      to="/promotii"*/}
                {/*      id="navItem"*/}
                {/*      style={{ color: "#492020" }}*/}
                {/*  >*/}
                {/*    Promoții*/}
                {/*  </NavLink>*/}
                {/*</li>*/}
                <li className="nav-item d-inline">
                  <Form inline>
                    <FormControl
                        onChange={this.handleSearchInput}
                        value={this.state.searchText}
                        id="SearchInput"
                        type="text"
                        placeholder="&#61442;"
                        className="mr-sm-2"
                        style={{ borderColor: "#4b1515de" }}
                    />
                    <Button onClick={this.handleSearchSubmit} type="reset" className="btn btn-cautare my-2 my-sm-0" >
                      Caută
                    </Button>
                    <Modal show={this.state.show} onHide={this.closeModal} size="sm">
                      <Modal.Header closeButton>
                        <Modal.Title  > <BsFillExclamationTriangleFill style={{color: "red", marginLeft: "110px"}}/> </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Adăugați text pentru a căuta un produs!
                      </Modal.Body>
                    </Modal>
                  </Form>
                </li>
              </ul>
              {/*<div className="nav-cart">*/}
              {/*  <span className={this.props.counter ? "invisible" : "visible"}>0</span>*/}
              {/*  <NavLink className="nav-item nav-link" to="/produse-favorite">*/}
              {/*    <FiHeart*/}
              {/*        className="icons-nav hvr-grow"*/}
              {/*        style={{ cursor: "pointer" }}*/}
              {/*    />*/}
              {/*  </NavLink>*/}
              {/*</div>*/}
              <div className="nav-cart">
                {/*<span className={this.props.counter ? "invisible" : "visible"}>{sessionStorage.getItem("cartLength")}</span>*/}
                <NavLink className="nav-item nav-link" to="/cos-cumparaturi">
                  <FaShoppingCart
                      className="icons-nav hvr-grow"
                      style={{ cursor: "pointer" }}
                  />
                </NavLink>
              </div>
              <div>
                {
                  this.props.counter ? (
                      <NavLink
                        className="nav-item nav-link"
                        to={this.props.userIcon}
                        id="navItem"
                      >
                        <FaRegUser
                        className="icons-nav hvr-grow mr-4"
                        style={{ cursor: "pointer" }}
                      />
                      </NavLink>
                  ) : (
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
                              to="/contul-meu/acasa-client"
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
                  )}
              </div>
            </div>
          </nav>
        </React.Fragment>
    );

  }
  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "/results",
        state: {
          searchText: this.state.searchText
        }
      })
      this.setState({
        searchText: ""
      })
    } else {
      this.setState({
        show: true
      })
    }
  };

};

export default withRouter(NavBarDefault);
