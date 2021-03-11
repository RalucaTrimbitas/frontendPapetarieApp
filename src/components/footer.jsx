import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="card-footer text-muted" >
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <h6 className="txt_title text-center">
                <img id="logoDianaFooter" src="./poze/logoDiana6.png" alt="logo"></img>
              </h6>
              <br></br>
              <span id="paragrafPapetarie">
                <FontAwesomeIcon
                  className="icon-mapLoc"
                  icon={faMapMarkerAlt}
                />{" "}
                Strada Simion Barnutiu, bloc 5, scara A, Parter, Blaj, județul
                Alba
              </span>
              <br></br>
              <FontAwesomeIcon className="icon-mail1" icon={faEnvelope} />
              <a
                className="cg"
                href="mailto:comenzz@papetarie.ro"
                id="headertext"
              >
                comenzi@papetarie.ro
              </a>
              <br></br>
              <br></br>
              <FontAwesomeIcon
                className="icon-phone1"
                icon={faPhone}
                style={{ cursor: "pointer" }}
              />
              <a href="tel:+407270392149" id="headertext">
                +40 751 215 301
              </a>
            </div>
            <div className="footer-title col-md-3 text-center">
              <h5 className="txt_title text-center">Categorii</h5>
              <br></br>
              {/* <a href="/categorii/rechizite"> Rechizite</a> */}
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/categorii/rechizite"
              >
                Rechizite
              </NavLink>
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/categorii/birotica"
              >
                Birotică
              </NavLink>

              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/categorii/jucarii"
              >
                Jucării
              </NavLink>

              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/categorii/cadouri"
              >
                Cadouri copii
              </NavLink>
            </div>
            <div className="footer-title col-md-3 text-center">
              <h5 className="txt_title text-center">Link-uri utile</h5>
              <br></br>
              {/* <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/despre"
              >
                Despre noi
              </NavLink> */}
              {/* <a href="/contact"> Contact</a> */}
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/termeni-conditii"
              >
                Termeni și condiții
              </NavLink>
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/retur"
              >
                Politica de retur
              </NavLink>
            </div>
            <div className="footer-title col-md-3 text-center">
              <h5 className="txt_title text-center">Informații utile</h5>
              <br></br>
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/plata"
              >
                Cum plătesc?
              </NavLink>
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/informatii-livrare"
                
              >
                Informații livrare
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )

}
export default Footer;