import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ClientDashboard extends Component {
    

    constructor(){
        super();
        //this.show = this.show.bind(this);
        // this.getPendingRequests = this.getPendingRequests.bind(this)
        // this.state = {render: <DefaultCompanyDashboard/>, pendingRequests: this.getPendingRequests()}
    }

    render() { 
        return ( 
            <React.Fragment>
            <p>Client Dashboard</p>
            <h2>Salutare, {localStorage.getItem("name")}!</h2>
            </React.Fragment>
         );
    }
}
 
const Dashboard = withRouter(ClientDashboard);
export default Dashboard