import React, { Component } from 'react';
import { Route, Redirect, Switch } from'react-router-dom';
import NotFound from './components/utils/notFound';
import NavBar from './components/NavBars/navBar';
import LoginForm from './components/Forms/loginForm';
import RegisterForm from './components/Forms/registerForm';
import ContactForm from './components/Forms/contactForm';
import HomePage from './components/HomePage/homePage';
import Termeni from './components/Info/termeni';
import Retur from './components/Info/retur';
import Plata from './components/Info/plata';
import Livrare from './components/Info/livrare';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "./css/produse.css"
import PrivateClientRoute from './Client/privateClientRoute';
import PrivateAdministratorRoute from './Administrator/privateAdministratorRoute';
import ClientDashboard from './Client/clientDashboard';
import AdministratorDashboard from './Administrator/administratorDashboard';
import './css/sidebar.css';
import './css/footer.css';
import './css/navbar.css';
import './css/backgrounds.css';
import './css/icons.css';
import './css/forms.css';
import './css/detalii.css';
import SidebarCategorii from "./components/SideBars/sidebarCategorii";
import SidebarClient from "./Client/sidebarClient";
import Detalii from "./components/Store/Detalii";
import ProduseView from "./components/Store/ProduseList";
import Footer from "./components/utils/footer";
import Informatii from "./components/Info/informatii";

class App extends Component{

  render() {
    return (
      // <div >
      <React.Fragment>
          <NavBar/>
            <Switch >
              <Route path="/home" exact component={HomePage} />
              <Route path="/autentificare" component={LoginForm}/>
              <Route path="/inregistrare" component={RegisterForm} />
              <Route path="/informatii/:id" component={Informatii}/>

              <Route path="/produse-sidebar" component={SidebarCategorii}/>
              <Route path="/produse/detalii/:id" component={Detalii} />
              <Route exact path="/produse/:id/:id" component={ProduseView} />

              <PrivateClientRoute path="/contul-meu/:id" component={ClientDashboard}/>
              <PrivateAdministratorRoute path="/administratordashboard" component={AdministratorDashboard}/>

              <Route path="/not-found" component={NotFound}/>

              <Redirect from="/" exact to="/home"/>
              </Switch>
              </React.Fragment>
          // </div>
      // </div>

    );
  }
}

export default App;
