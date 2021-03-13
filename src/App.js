import React, {Component} from 'react';
import { Route, Redirect, Switch } from'react-router-dom';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import ContactForm from './components/contactForm';
import HomePage from './components/homePage';
import Termeni from './components/Info/termeni';
import Retur from './components/Info/retur';
import Plata from './components/Info/plata';
import Livrare from './components/Info/livrare';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import PrivateClientRoute from './components/privateClientRoute';
import PrivateAdministratorRoute from './components/privateAdministratorRoute';
import ClientDashboard from './components/clientDashboard';
import AdministratorDashboard from './components/administratorDashboard';




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
      <div >
        <NavBar></NavBar>
          <div className="content" >
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/autentificare" component={LoginForm}></Route>
              <Route path="/contact" component={ContactForm}></Route>
              <Route path="/inregistrare" component={RegisterForm} ></Route>
              <Route path="/termeni-conditii" component={Termeni}></Route>
              <Route path="/retur" component={Retur}></Route>
              <Route path="/plata" component={Plata}></Route>
              <Route path="/informatii-livrare" component={Livrare}></Route>

              <PrivateClientRoute path="/clientdashboard" component={ClientDashboard}/>
              <PrivateAdministratorRoute path="/administratordashboard" component={AdministratorDashboard}/>

              <Route path="/not-found" component={NotFound}></Route>
              <Redirect to="/not-found" />
              </Switch>
          </div>
      </div>

    );
  }
}

export default App;
