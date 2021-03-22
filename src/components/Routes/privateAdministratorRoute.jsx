import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import authentication from '../utils/auth.jsx'
  
const PrivateAdministratorRoute = ({component: Component, ...rest}) => {
    
    return (
        <Route {...rest} render={props => {
            if(authentication() === "administrator")
                return <Component {...props}/>;
            return <Redirect to={{pathname: '/autentificare'}}/>
        }}/>
    );
}

export default PrivateAdministratorRoute;