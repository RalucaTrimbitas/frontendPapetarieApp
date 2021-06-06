import React from "react";
import NavBarDefault from "./navBarDefault";
import NavBarAdministrator from "../../Administrator/navBarAdministrator";
import authentication from "../utils/auth.jsx";

class NavBar extends React.Component {

  //try with useEffect()

  // loadSize = () => {
  //   fetch('http://localhost:8080/cos-cumparaturi-produs/' + localStorage.getItem("numeUtilizator"), {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     }
  //   })
  //       .then(res => {
  //         if (res.status === 200) {
  //           res.json().then(json => {
  //             this.setState({cart: json});
  //             localStorage.setItem("cartLength", this.state.cart.length)
  //           });
  //         } else {
  //           console.log("error")
  //         }
  //       })
  // }

  render() {
    const authStatus = authentication();

    // this.loadSize()
    // localStorage.setItem("cartLength", this.props.state.cart.length)
    if (authStatus === "NOT_AUTHENTICATED")
      return <NavBarDefault userIcon={"/autentificare"} counter ={true}/>
    else if (authStatus === "client")
      return <NavBarDefault userIcon={"/contul-meu/acasa-client"} counter = {false}/>
    else if (authStatus === "administrator")
      return <NavBarAdministrator/>
  }
}

export default NavBar;
