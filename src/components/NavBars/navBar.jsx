import React from "react";
import NavBarDefault from "./navBarDefault";
import NavBarAdministrator from "../../Administrator/navBarAdministrator";
import authentication from "../utils/auth.jsx";

class NavBar extends React.Component {

  render() {
    const authStatus = authentication();

    if (authStatus === "NOT_AUTHENTICATED")
      return <NavBarDefault userIcon={"/autentificare"} counter ={true}/>
    else if (authStatus === "client")
      return <NavBarDefault userIcon={"/contul-meu/acasa-client"} counter = {false}/>
    else if (authStatus === "administrator")
      return <NavBarAdministrator/>
  }
}

export default NavBar;
