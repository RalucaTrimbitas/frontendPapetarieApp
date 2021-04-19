import React, {Component} from "react";
import SetariContClient from "./setariContClient";
import IstoricComenziClient from "./istoricComenziClient";
import AdreseClient from "./adreseClient";
import {AiOutlineHome, FaSignOutAlt, FiSettings, RiHistoryFill} from "react-icons/all";
import Footer from "../components/utils/footer";
import ContulMeu from "./contulMeu";
import Link from "react-router-dom/Link";
import {withRouter} from "react-router-dom";


class SidebarClient extends Component {

    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.state = {render: <ContulMeu/>}
    }

    show(type){
        switch(type){
            case "setari-cont": this.setState({render : <SetariContClient/>}); break;
            case "istoric-comenzi": this.setState({render : <IstoricComenziClient/>}); break;
            case "adrese": this.setState({render: <AdreseClient/>}); break;
            case "deconectare": this.logout(); break;
            default: this.setState({render: <ContulMeu/>})
        }
    }

    logout(){
        localStorage.clear();
        this.history.replace('/autentificare');
    }

    render() {;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row" >
                        <div
                            className="col-md-3 col-xs-1 p-l-0 p-r-0 in"
                            id="sidebar"
                            style={{marginTop: "120px"}}
                        >
                            <div className="list-group panel">
                                <Link
                                    to="/contul-meu/setari-cont"
                                    onClick={() => this.show("setari-cont")}
                                    className="list-group-item"
                                    data-parent="#sidebar"
                                >
                                    <FiSettings style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down">Setări cont</span>{" "}
                                </Link>

                                <Link
                                    to="/contul-meu/istoric-comenzi"
                                    onClick={() => this.show("istoric-comenzi")}
                                    className="list-group-item"
                                    data-parent="#sidebar"
                                >
                                    <RiHistoryFill style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down">Istoric comenzi</span>
                                </Link>
                                <Link
                                    to="/contul-meu/adrese"
                                    onClick={() => this.show("adrese")}
                                    className="list-group-item"
                                    data-parent="#sidebar"
                                >
                                    {/*<i className="fa fa-book"></i>{" "}*/}
                                    <AiOutlineHome  style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down">Adrese</span>
                                </Link>
                                <div
                                    onClick={() => this.show("deconectare")}
                                    className="list-group-item"
                                    data-parent="#sidebar"
                                >
                                    <FaSignOutAlt style={{marginRight:"10px"}}/>
                                    <span className="hidden-sm-down">Deconectare</span>
                                </div>
                            </div>
                        </div>
                        <main className="col-md-8 col-xs-11 p-l-2 p-t-2">
                            { this.state.render }
                        </main>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default withRouter(SidebarClient);