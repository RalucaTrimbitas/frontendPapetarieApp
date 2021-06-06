import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SidebarClient from "./sidebarClient";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/utils/footer";
import SetariContClient from "./setariContClient";
import IstoricComenziClient from "./istoricComenziClient";
import AdreseClient from "./adreseClient";
import ContulMeu from "./contulMeu";

class ClientDashboard extends Component {
  constructor(){
      super();
      this.state = {
          sizeCart: sessionStorage.getItem("cartLength")
      }
  }

  renderSetariCont(text) {
    return (
        <React.Fragment>
            {/*<NavBar/>*/}
        <Container fluid>
          <Row>
            <Col className="col-md-2 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
              <SidebarClient show={this.show}/>
            </Col>
            <Col id="produs">
              <SetariContClient/>
            </Col>
          </Row>
          <Footer/>
        </Container>
        </React.Fragment>
    )
  }

  renderIstoricComenzi(text) {
    return (
        <React.Fragment>
            {/*<NavBar/>*/}
        <Container fluid>
          <Row>
            <Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
              <SidebarClient show={this.show}/>
            </Col>
            <Col className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2" id="produs">
              <IstoricComenziClient/>
            </Col>
          </Row>
          <Footer/>
        </Container>
        </React.Fragment>
    )
  }

  renderAdrese(text) {
    return (
        <React.Fragment>
            {/*<NavBar/>*/}
        <Container fluid>
          <Row>
            <Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
              <SidebarClient show={this.show}/>
            </Col>
            <Col className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2" id="produs">
              <AdreseClient/>
            </Col>
          </Row>
          <Footer/>
        </Container>
        </React.Fragment>
    )
  }

    renderContulMeu(default1) {
        return (
            <React.Fragment>
                {/*<NavBar/>*/}
                <Container fluid>
                    <Row>
                        {/*<Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >*/}
                        {/*    <SidebarClient show={this.show}/>*/}
                        {/*</Col>*/}
                        <Col>
                            <ContulMeu/>
                        </Col>
                    </Row>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }


  render() {
    document.body.classList = "";
    document.body.classList.add("background-clientDashboard");
    if (this.props.match.params.id === "setari-cont") {
      return this.renderSetariCont("setari-cont")
    }
    if (this.props.match.params.id === "istoric-comenzi") {
      return this.renderIstoricComenzi("istoric-comenzi")
    }
    if (this.props.match.params.id === "actualizare-date") {
      return this.renderAdrese("actualizare-date")
    }
      if (this.props.match.params.id === "acasa-client") {
          return this.renderContulMeu("acasa-client")
      }
  }
}

const Dashboard = withRouter(ClientDashboard);
export default Dashboard;
