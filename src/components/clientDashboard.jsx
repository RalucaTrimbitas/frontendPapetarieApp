import React from 'react';
import { withRouter } from "react-router";

class ClientDashboard extends React.Component {

    constructor(props){
        super(props);
        //this.show = this.show.bind(this);
    }
    
    render() { 
        alert("render clientdashboard")
        return ( 
            <p>Client Dashboard</p>
         );
    }
}
 

const Dashboard = withRouter(ClientDashboard);
export default Dashboard