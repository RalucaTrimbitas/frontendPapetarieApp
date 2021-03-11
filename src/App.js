import React from 'react';
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




function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
        <Switch>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/contact" component={ContactForm}></Route>
        <Route path="/inregistrare" component={RegisterForm} ></Route>
        <Route path="/autentificare" component={LoginForm}></Route>
        <Route path="/termeni-conditii" component={Termeni}></Route>
        <Route path="/retur" component={Retur}></Route>
        <Route path="/plata" component={Plata}></Route>
        <Route path="/informatii-livrare" component={Livrare}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/home"></Redirect>
        {/* <Redirect to="/not-found"></Redirect> */}
        </Switch>
      </main>

    </React.Fragment>
    


  )
}

export default App;
