import React, { Component } from 'react';
import { Route, Redirect, Switch } from'react-router-dom';
import NotFound from './components/utils/notFound';
import NavBar from './components/NavBars/navBar';
import LoginForm from './components/Forms/loginForm';
import RegisterForm from './components/Forms/registerForm';
import ContactForm from './components/Forms/contactForm';
import HomePage from './components/Dashboards/homePage';
import Termeni from './components/Info/termeni';
import Retur from './components/Info/retur';
import Plata from './components/Info/plata';
import Livrare from './components/Info/livrare';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import PrivateClientRoute from './components/Routes/privateClientRoute';
import PrivateAdministratorRoute from './components/Routes/privateAdministratorRoute';
import ClientDashboard from './components/Dashboards/clientDashboard';
import AdministratorDashboard from './components/Dashboards/administratorDashboard';
import './css/sidebar.css';
import SidebarCategorii from "./components/SideBars/sidebarCategorii";
import SidebarClient from "./components/SideBars/sidebarClient";
import SetariContClient from "./components/Info/setariContClient";
import IstoricComenziClient from "./components/Info/istoricComenziClient";
import AdreseClient from "./components/Info/adreseClient";




// function App() {
//   return (
//     <React.Fragment>
//       <NavBar></NavBar>
//       <main className="container">
//         <Switch>
//         <Route path="/home" component={HomePage}></Route>
//         <Route path="/contact" component={ContactForm}></Route>
//         <Route path="/inregistrare" component={RegisterForm} ></Route>
//         <Route path="/autentificare" component={LoginForm}></Route>
//         <Route path="/termeni-conditii" component={Termeni}></Route>
//         <Route path="/retur" component={Retur}></Route>
//         <Route path="/plata" component={Plata}></Route>
//         <Route path="/informatii-livrare" component={Livrare}></Route>
//         <Route path="/not-found" component={NotFound}></Route>

//         <PrivateClientRoute path="/clientdashboard" component={ClientDashboard}></PrivateClientRoute>
//         <PrivateAdministratorRoute path="/administratordashboard" component={AdministratorDashboard}></PrivateAdministratorRoute>

//         <Redirect from="/" exact to="/home"></Redirect>
//         </Switch>
//       </main>

//     </React.Fragment>
//   )
// }

class App extends Component{
  render() {
    return (
      // <div >
      <React.Fragment>
          <NavBar></NavBar>
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route Route path="/autentificare" component={LoginForm}></Route>
              <Route path="/contact" component={ContactForm}></Route>
              <Route path="/inregistrare" component={RegisterForm} ></Route>
              <Route path="/termeni-conditii" component={Termeni}></Route>
              <Route path="/retur" component={Retur}></Route>
              <Route path="/plata" component={Plata}></Route>
              <Route path="/./produse/accesorii-birou" component={SidebarCategorii}></Route>
              <Route path="/informatii-livrare" component={Livrare}></Route>
              {/*<Route path="/setari-cont" component={SidebarClient}></Route>*/}
              <Route path="/setari-cont" component={SetariContClient}></Route>
              <Route path="/istoric-comenzi" component={IstoricComenziClient}></Route>
              <Route path="/adrese-client" component={AdreseClient}></Route>

              <PrivateClientRoute path="/clientdashboard" component={ClientDashboard}/>
              <PrivateAdministratorRoute path="/administratordashboard" component={AdministratorDashboard}/>

              <Route path="/not-found" component={NotFound}></Route>
              {/* <Redirect to="/home" /> */}
              <Redirect from="/" exact to="/home"></Redirect>
              </Switch>
              </React.Fragment>
          // </div>
      // </div>

    );
  }
}

export default App;
