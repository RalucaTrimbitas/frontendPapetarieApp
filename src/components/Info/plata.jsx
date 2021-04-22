import React from "react";
import Footer from "../utils/footer";
import NavBar from "../NavBars/navBar";

const Plata = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="card">
        <div className="card-header text-center">Cum plătesc?</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0" id="card-text">
            <p className="mb-0 ">
              <strong>Modalități de plată</strong>
            </p>
            <br></br>

            <p className="mb-0">
              <stron>Plata Ramburs</stron>
            </p>
            <br></br>
            <p className="mb-0">
              PapetariaDiana.ro acceptă plata ramburs (clientul plătește cash în momentul ridicării comenzii).
            </p>
            <br></br>

            <br></br>

          </blockquote>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Plata;
