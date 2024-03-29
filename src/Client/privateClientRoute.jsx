
import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import authentication from '../components/utils/auth.jsx'
  
const PrivateClientRoute = ({component: Component, ...rest}) => {
    
    return (
        <Route {...rest} render={props => {
            if(authentication() === "client")
                return <Component {...props}/>;
            return <Redirect to={{pathname: "/autentificare"}}/>
        }}/>
    );
}

export default PrivateClientRoute;
