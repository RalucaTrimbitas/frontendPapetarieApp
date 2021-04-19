import React, { Component } from "react";
import { withRouter } from "react-router";
import SidebarClient from "./sidebarClient";
import NavBar from "../components/NavBars/navBar";
import NavBarClient from "./navBarClient";

class ClientDashboard extends Component {
  // constructor(){
  //     super();
  //     //this.show = this.show.bind(this);
  //     // this.getPendingRequests = this.getPendingRequests.bind(this)
  //     // this.state = {render: <DefaultCompanyDashboard/>, pendingRequests: this.getPendingRequests()}
  // }

  render() {
    document.body.classList = "";
    document.body.classList.add("background-clientDashboard");
    return (
      <React.Fragment>
        <SidebarClient/>
      </React.Fragment>
    );
  }
}

const Dashboard = withRouter(ClientDashboard);
export default Dashboard;
