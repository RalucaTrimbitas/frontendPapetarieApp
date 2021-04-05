import React, { Component } from "react";
import { withRouter } from "react-router";
import SidebarCategorii from "../components/SideBars/sidebarCategorii";
import Footer from "../components/utils/footer";
import SidebarClient from "../components/SideBars/sidebarClient";

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
        {/*<SidebarCategorii></SidebarCategorii>*/}
        <SidebarClient></SidebarClient>
      </React.Fragment>
    );
  }
}

const Dashboard = withRouter(ClientDashboard);
export default Dashboard;
