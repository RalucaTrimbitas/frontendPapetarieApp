import React, {Component} from "react";

import Footer from "../components/utils/footer";
import {AiOutlineHome, FaSignOutAlt, FiSettings, RiHistoryFill} from "react-icons/all";

class SidebarC extends Component {
    render() {
        // document.body.classList = "";
        // document.body.classList.add("background-CategoriiDashboard");
        return (
            <React.Fragment>
                     <div className="container-fluid">
                         <div className="row" >
                             <div
                                 className="col-md-3 col-xs-1 p-l-0 p-r-0 in"
                                id="sidebar"
                                 style={{paddingLeft: "0px", marginTop: "100px"}}
                             >
                                 <div className="list-group panel">
                                     <a
                                         href="/setari-cont"
                                         className="list-group-item"
                                        data-parent="#sidebar"
                                     >
                                         <FiSettings ></FiSettings>
                                         <span className="hidden-sm-down">Setări cont</span>{" "}
                                     </a>

                                     <a
                                         href="/istoric-comenzi"
                                         className="list-group-item"
                                         data-parent="#sidebar"
                                     >
                                         <RiHistoryFill style={{marginRight:"10px"}}></RiHistoryFill>
                                         <span className="hidden-sm-down">Istoric comenzi</span>
                                     </a>
                                     <a
                                         href="/adrese"
                                         className="list-group-item"
                                         data-parent="#sidebar"
                                     >
                                         {/*<i className="fa fa-book"></i>{" "}*/}
                                         <AiOutlineHome  style={{marginRight:"10px"}}></AiOutlineHome>
                                         <span className="hidden-sm-down">Adrese</span>
                                     </a>
                                     <a
                                         href="/deconectare"
                                         className="list-group-item"
                                         data-parent="#sidebar"
                                     >
                                         <FaSignOutAlt style={{marginRight:"10px"}}></FaSignOutAlt>
                                         <span className="hidden-sm-down">Deconectare</span>
                                     </a>

                                 </div>
                             </div>
                             {/*<main className="col-md-8 col-xs-11 p-l-2 p-t-2">*/}
                             {/*    { this.state.render }*/}
                             {/*</main>*/}
                         </div>
                     </div>
                 </React.Fragment>
        )
    }
}
export default SidebarC;