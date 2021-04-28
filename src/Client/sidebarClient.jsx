import React, {Component} from "react";
import {AiOutlineHome, FiSettings, RiHistoryFill} from "react-icons/all";
import Link from "react-router-dom/Link";
import {withRouter} from "react-router-dom";



class SidebarClient extends Component {

    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {
            goTo: ""
        }
    }

    show(type){
        switch(type){
            case "setari-cont": this.setState({goTo : "setari-cont"}); break;
            case "istoric-comenzi": this.setState({goTo : "istoric-comenzi"}); break;
            case "actualizare-date": this.setState({goTo : "aactualizare-date"}); break;
            default: this.setState({goTo : "acasa-client"}); break;
        }
    }

    logout(){
        localStorage.clear();
        this.history.replace('/autentificare');
    }

    render() {
        return (
            <React.Fragment>
                        <div
                            className="sidebar"
                            id="sidebar"
                            style={{marginTop: "100px", marginBottom: "100px"}}
                        >
                            <div className="list-group panel">
                                <Link
                                    to="/contul-meu/setari-cont"
                                    onClick={() => this.show("setari-cont")}
                                    className="list-group-item"
                                    data-parent="#sidebar"
                                >
                                    <FiSettings style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down text-wrap">Setări cont</span>{" "}
                                </Link>

                                <Link
                                    to="/contul-meu/istoric-comenzi"
                                    onClick={() => this.show("istoric-comenzi")}
                                    className="list-group-item text-wrap"
                                    data-parent="#sidebar"
                                >
                                    <RiHistoryFill style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down">Istoric comenzi</span>
                                </Link>
                                <Link
                                    to="/contul-meu/actualizare-date"
                                    onClick={() => this.show("actualizare-date")}
                                    className="list-group-item text-wrap"
                                    data-parent="#sidebar"
                                >
                                    <AiOutlineHome  style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down">Actualizare date</span>
                                </Link>
                            </div>
                        </div>

            </React.Fragment>
        )
    }
}
export default withRouter(SidebarClient);