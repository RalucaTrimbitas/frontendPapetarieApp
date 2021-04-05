import React, {Component} from "react";
import Termeni from "./termeni";
import ContactForm from "../Forms/contactForm";
import Retur from "./retur";
import Plata from "./plata";
import Livrare from "./livrare";

class Informatii extends Component {

    render() {

        if (this.props.match.params.id === "termeni-conditii") {
                return <Termeni/>
        }
        if (this.props.match.params.id === "contact") {
            return <ContactForm/>
        }
        if (this.props.match.params.id === "politica-de-retur") {
            return <Retur/>
        }
        if (this.props.match.params.id === "plata") {
            return <Plata/>
        }
        if (this.props.match.params.id === "informatii-livrare") {
            return <Livrare/>
        }

            // <React.Fragment>
            // <Termeni/>
            // </React.Fragment>

    }

}

export default Informatii;