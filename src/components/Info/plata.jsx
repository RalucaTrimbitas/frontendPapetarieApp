import React from "react";
import Footer from "../utils/footer";

const Plata = () => {
  document.body.classList = "";
  document.body.classList.add("background-general");
  return (
    <React.Fragment>
      {/*<NavBar/>*/}
      <div className="card card-info">
        <div className="card-header text-center" id="card-client">Cum plătesc?</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0" id="card-text">
            <p className="mb-0 ">
              <strong>Modalități de plată</strong>
            </p>
            <br></br>

            <p className="mb-0">
              <strong>Plata Ramburs</strong>
            </p>
            <br></br>
            <p className="mb-0">
              PapetariaDiana.ro acceptă plata ramburs sau cu cardul (clientul plătește cash sau card în momentul ridicării comenzii).
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
