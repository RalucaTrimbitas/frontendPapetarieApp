import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {BsFillExclamationTriangleFill, FaSignOutAlt, ImHome} from "react-icons/all"
import {Button, Form, FormControl, Modal} from "react-bootstrap";


class NavBarAdministrator extends React.Component{

  constructor() {
    super();
    this.state= {
      searchText: "",
      show: false
    }
    this.closeModal = this.closeModal.bind(this);
  }


handleLogout = () => {
  sessionStorage.clear()
}

  closeModal = e => {
    this.setState({
      show: false,
      showModal2: false,
    });
  };

  handleClearSearch = query => {
    this.setState({ searchText: ""})
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
        <Link className="navbar-brand" id="nav-brand" to="/administratordashboard">
          <img className="hvr-grow ml-4" id="logoDiana" src="/poze/logoDiana.png" alt="logo"/>
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
            {/*<li className="nav-item active">*/}
            {/*  <NavLink*/}
            {/*      className="nav-item nav-link "*/}
            {/*      id="navItem"*/}
            {/*      to="/admin/produse/accesorii-birou/agende-si-blocnotes-uri"*/}
            {/*      style={{ color: "#492020" }}*/}
            {/*  >*/}
            {/*    Gestionare produse*/}
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
                <Button onClick={this.handleSearchSubmit} className="btn btn-cautare my-2 my-sm-0" >
                  Caută
                </Button>
                {/*<Button className="my-btn btn-cautare-tabel ml-2" type="button" onClick={this.handleClearSearch}>Golește căutarea</Button>*/}
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
          <NavLink
              className="nav-item nav-link"
              to="/administratordashboard"
              id="navItem"
              style={{ color: "#492020" }}>
            <ImHome/>
          </NavLink>
          {/*<NavLink*/}
          {/*    className="nav-item nav-link "*/}
          {/*    id="navItem"*/}
          {/*    to="/admin/produse/accesorii-birou/agende-si-blocnotes-uri"*/}
          {/*    style={{ color: "#492020" }}*/}
          {/*>*/}
          {/*  Gestionare produse*/}
          {/*</NavLink>*/}
          {/*<NavLink*/}
          {/*  className="nav-item nav-link"*/}
          {/*  to="/adaugare-produse"*/}
          {/*  id="navItem"*/}
          {/*  style={{ color: "#492020"}}*/}
          {/*>*/}
          {/*  /!*<FaRegUser*!/*/}
          {/*  /!*className="icons-nav hvr-grow"*!/*/}
          {/*  /!*style={{ cursor: "pointer" }}*!/*/}
          {/*  /!*></FaRegUser>*!/*/}
          {/*  Adăugare produs*/}
          {/*</NavLink>*/}

          <NavLink
            onClick={this.handleLogout.bind(this)}
            className="nav-item nav-link"
            to="/autentificare"
            id="navItem"
          >
              <FaSignOutAlt
              className="icons-nav hvr-grow mr-4"
              style={{ cursor: "pointer" }}
              />
           
          </NavLink>
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
        pathname: "/admin/results",
        state: {
          searchText: this.state.searchText
        }
      })
    } else {
        this.setState({
          show: true
        })
    }
  };

render() {
  return(
      this.links()
  )
}
};

export default withRouter(NavBarAdministrator);