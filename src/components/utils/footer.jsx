import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    // document.body.classList = "";
    // document.body.classList.add("background-footer");
    return (
        <div className="card-footer text-muted" >
          <div className="row">
            <div className="col-md-3 text-center" style={{color: "#4b1515de"}}>
              <h6 className="txt_title text-center">
                {/* <img id="logoDianaFooter" className="hvr-grow" src="./poze/logoDiana6.png" alt="logo"></img> */}
                <Link className="navbar-brand" id="nav-brand" to="/home">
          <img className="hvr-grow" id="logoDianaFooter" src="/poze/logoDiana.png" alt="logo"/>
        </Link>
              </h6>
              <br/>
              <span >
                <FontAwesomeIcon
                  className="icon-mapLoc"
                  icon={faMapMarkerAlt}
                />{" "}
                Strada Simion Barnutiu, bloc 5, scara A, Parter, Blaj, județul
                Alba
              </span>
              <br/>
              <br/>
              <FontAwesomeIcon className="icon-mail1" icon={faEnvelope} />
              <a
                className="cg"
                href="mailto:comenzz@papetarie.ro"
                id="headertext"
                style={{color: "#4b1515de"}}
              >
                comenzi@papetarie.ro
              </a>
              <br/>
              <br/>
              <FontAwesomeIcon
                className="icon-phone1"
                icon={faPhone}
                style={{ cursor: "pointer" }}
              />
              <a href="tel:+407270392149" id="headertext" style={{color: "#4b1515de"}}>
                +40 751 215 301
              </a>
            </div>
            <div className="footer-title col-md-3 text-center">
              <h5 className="txt_title text-center" style={{color: "#4b1515de"}}>Categorii</h5>
              <br/>
              {/* <a href="/categorii/rechizite"> Rechizite</a> */}
              <Link
                  className="nav-item-aut nav-link menu-item"
                to="/produse/accesorii-birou/agende-si-blocnotes-uri"
              >
                Accesorii de birou
              </Link>
              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/produse/instrumente-scris/creioane-negre-si-creioane-mecanice"
              >
                Instrumente de scris
              </NavLink>

              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/produse/rechizite-scolare/caiete"
              >
                Rechizite școlare
              </NavLink>

              <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/produse/articole-creative/abtibilde-si-stampile-copii"
              >
                Articole creative și craft
              </NavLink>
                {/*<NavLink*/}
                {/*    className="nav-item-aut nav-link menu-item"*/}
                {/*    to="/categorii/cadouri"*/}
                {/*>*/}
                {/*    Birotică*/}
                {/*</NavLink>*/}
                {/*<NavLink*/}
                {/*    className="nav-item-aut nav-link menu-item"*/}
                {/*    to="/categorii/cadouri"*/}
                {/*>*/}
                {/*    Jocuri*/}
                {/*</NavLink>*/}
                {/*<NavLink*/}
                {/*    className="nav-item-aut nav-link menu-item"*/}
                {/*    to="/categorii/cadouri"*/}
                {/*>*/}
                {/*    Cadouri*/}
                {/*</NavLink>*/}
                {/*<NavLink*/}
                {/*    className="nav-item-aut nav-link menu-item"*/}
                {/*    to="/categorii/cadouri"*/}
                {/*>*/}
                {/*    Arte plastice*/}
                {/*</NavLink>*/}
            </div>
            <div className="footer-title col-md-3 text-center">
              <h5 className="txt_title text-center" style={{color: "#4b1515de"}}>Link-uri utile</h5>
              <br/>
              {/* <NavLink
                className="nav-item-aut nav-link menu-item"
                to="/despre"
              >
                Despre noi
              </NavLink> */}
              {/* <a href="/contact"> Contact</a> */}
              <Link
                className="nav-item-aut nav-link menu-item"
                to="/informatii/contact"
              >
                Contact
              </Link>
              <Link
                className="nav-item-aut nav-link menu-item"
                to="/informatii/termeni-conditii"
              >
                Termeni și condiții
              </Link>
              <Link
                className="nav-item-aut nav-link menu-item"
                to="/informatii/politica-de-retur"
              >
                Politica de retur
              </Link>
            </div>
            <div className="footer-title col-md-3 text-center">
              <h5 className="txt_title text-center" style={{color: "#4b1515de"}}>Informații utile</h5>
              <br/>
              <Link
                className="nav-item-aut nav-link menu-item"
                to="/informatii/plata"
              >
                Cum plătesc?
              </Link>
              <Link
                className="nav-item-aut nav-link menu-item"
                to="/informatii/informatii-livrare"
              >
                Informații livrare
              </Link>
            </div>
          </div>
      </div>
    )

}
export default Footer;