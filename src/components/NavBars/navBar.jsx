import React from "react";
import NavBarDefault from "./navBarDefault";
import NavBarClient from "../../Client/navBarClient";
import NavBarAdministrator from "../../Administrator/navBarAdministrator";
import authentication from "../utils/auth.jsx";

class NavBar extends React.Component {

  links = () => {
    const authStatus = authentication();

    if (authStatus === "NOT_AUTHENTICATED")
      return <NavBarDefault></NavBarDefault>;
    else if (authStatus === "client") return (
      <NavBarClient></NavBarClient>)    
    else if (authStatus === "administrator")
      return <NavBarAdministrator></NavBarAdministrator>;
  };

  render() {
    return (
        this.links()
    );
  }
}

export default NavBar;
