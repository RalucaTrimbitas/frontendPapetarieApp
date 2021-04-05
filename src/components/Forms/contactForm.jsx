import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Footer from "../utils/footer";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-contact">
          <div className="row">
            <div className="col-md-5 contact-sec offset-md-4">
              <h2 className="text-center">Contactează-ne</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label className="text-label">Nume</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nume"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-label">E-mail</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div className="form-group">
                  <label className="text-label">Mesaj</label>
                  <textarea
                    rows="7"
                    cols="30"
                    type="text"
                    name="mesaj"
                    className="form-control"
                    placeholder="Mesaj"
                    onChange={this.handleChange}
                  ></textarea>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-contact float-right"
                    onClick={this.doSubmit}
                  >
                    Trimite
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 contact-sec2">
              <h3>CONTACT</h3>
              <br></br>
              <p>
                Pentru orice intrebari sau nelamuriri, puteti lua legatura cu
                noi!
              </p>
              <span id="paragrafPapetarie">
                <FontAwesomeIcon className="icon-mapLoc-contact" icon={faMapMarkerAlt} />{" "}
              Strada Simion Barnutiu, bloc 5, scara A, Parter, Blaj, județul
              Alba
              </span>
              <br></br>
              <FontAwesomeIcon
                className="icon-mail-contact"
                icon={faEnvelope}
              />
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
                className="icon-phone-contact"
                icon={faPhone}
                style={{ cursor: "pointer" }}
              />
              <a href="tel:+407270392149" id="headertext">
                +40 751 215 301
              </a>
              {/* <div className="mapouter" >
                <div className="gmap_canvas"> */}
                  {/* <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Blaj%20Simion%20Barnutiu%20bloc%205&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://123movies-to.org"></a>
                  <br></br>
                  <a href="https://www.embedgooglemap.net">
                    how to embed a google map in html
                  </a> */}
                {/* </div>
              </div> */}
            </div>
          </div>
        </div>
        <br></br>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default ContactForm;
