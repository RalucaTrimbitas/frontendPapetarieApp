import React, { Component } from "react";
import { withRouter } from "react-router";
import SidebarCategorii from "../SideBars/sidebarCategorii";
import Footer from "../utils/footer";

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
        <SidebarCategorii></SidebarCategorii>
      </React.Fragment>
    );
  }
}

const Dashboard = withRouter(ClientDashboard);
export default Dashboard;
