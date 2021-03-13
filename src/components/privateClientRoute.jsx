
import React from 'react'
import {BrowserRouter as Route, Redirect } from 'react-router-dom'
import authentication from './auth.jsx'
  
const PrivateClientRoute = ({component: Component, ...rest}) => {
    
    return (
        <Route {...rest} render={props => {
            if(authentication() === "client")
                return <Component {...props}/>;
            return <Redirect push to={{pathname: "/autentificare"}}/>
        }}/>
    );
}

export default PrivateClientRoute;
