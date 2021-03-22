import React, {Component} from "react";
import Footer from "../utils/footer";
import {ImBook, RiScissorsCutLine} from "react-icons/all";
import {FaPencilAlt} from "react-icons/all";
import {FaPalette} from "react-icons/all";
import {FiPaperclip} from "react-icons/all";
import {FaListUl} from "react-icons/all";
import {BsPuzzleFill} from "react-icons/all";
import {BsGiftFill} from "react-icons/all";
import {FaBars} from "react-icons/all";


class SidebarCategorii extends Component {
    render() {
        document.body.classList = "";
        document.body.classList.add("background-CategoriiDashboard");
        return (
            <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-md-3 col-xs-1 p-l-0 p-r-0 in"
                        id="sidebar"
                        style={{paddingLeft: "0px"}}
                    >
                        <div className="list-group panel">
                            <a
                                href="#menu1"
                                className="list-group-item collapsed"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <FiPaperclip style={{marginRight: "10px"}}></FiPaperclip>
                                <span className="hidden-sm-down">Accesorii de birou</span>{" "}
                            </a>
                            <div className="collapse" id="menu1">
                                <a
                                    href="#menu1sub1"
                                    className="list-group-item"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                >
                                    Subitem 1{" "}
                                </a>
                                <div className="collapse" id="menu1sub1">
                                    <a
                                        href="#"
                                        className="list-group-item"
                                        data-parent="#menu1sub1"
                                    >
                                        Subitem 1 a
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item"
                                        data-parent="#menu1sub1"
                                    >
                                        Subitem 2 b
                                    </a>
                                    <a
                                        href="#menu1sub1sub1"
                                        className="list-group-item"
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                    >
                                        Subitem 3 c{" "}
                                    </a>
                                    <div className="collapse" id="menu1sub1sub1">
                                        <a
                                            href="#"
                                            className="list-group-item"
                                            data-parent="#menu1sub1sub1"
                                        >
                                            Subitem 3 c.1
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item"
                                            data-parent="#menu1sub1sub1"
                                        >
                                            Subitem 3 c.2
                                        </a>
                                    </div>
                                    <a
                                        href="#"
                                        className="list-group-item"
                                        data-parent="#menu1sub1"
                                    >
                                        Subitem 4 d
                                    </a>
                                    <a
                                        href="#menu1sub1sub2"
                                        className="list-group-item"
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                    >
                                        Subitem 5 e{" "}
                                    </a>
                                    <div className="collapse" id="menu1sub1sub2">
                                        <a
                                            href="#"
                                            className="list-group-item"
                                            data-parent="#menu1sub1sub2"
                                        >
                                            Subitem 5 e.1
                                        </a>
                                        <a
                                            href="#"
                                            className="list-group-item"
                                            data-parent="#menu1sub1sub2"
                                        >
                                            Subitem 5 e.2
                                        </a>
                                    </div>
                                </div>
                                <a href="#" className="list-group-item" data-parent="#menu1">
                                    Subitem 2
                                </a>
                                <a href="#" className="list-group-item" data-parent="#menu1">
                                    Subitem 3
                                </a>
                            </div>
                            <a
                                href="#"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <FaPencilAlt style={{marginRight: "10px"}}></FaPencilAlt>
                                <span className="hidden-sm-down">Instrumente de scris</span>
                            </a>
                            <a
                                href="#menu3"
                                className="list-group-item collapsed"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                {/*<i className="fa fa-book"></i>{" "}*/}
                                <ImBook style={{marginRight: "10px"}}></ImBook>
                                <span className="hidden-sm-down">Rechizite școlare</span>
                            </a>
                            <div className="collapse" id="menu3">
                                <a href="#" className="list-group-item" data-parent="#menu3">
                                    3.1
                                </a>
                                <a
                                    href="#menu3sub2"
                                    className="list-group-item"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                >
                                    3.2{" "}
                                </a>
                                <div className="collapse" id="menu3sub2">
                                    <a
                                        href="#"
                                        className="list-group-item"
                                        data-parent="#menu3sub2"
                                    >
                                        3.2 a
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item"
                                        data-parent="#menu3sub2"
                                    >
                                        3.2 b
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item"
                                        data-parent="#menu3sub2"
                                    >
                                        3.2 c
                                    </a>
                                </div>
                                <a href="#" className="list-group-item" data-parent="#menu3">
                                    3.3
                                </a>
                            </div>
                            <a
                                href="#"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <RiScissorsCutLine style={{marginRight: "10px"}}></RiScissorsCutLine>
                                <span className="hidden-sm-down">Articole creative și craft</span>
                            </a>
                            <a
                                href="#"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                               <FaListUl style={{marginRight: "10px"}}></FaListUl>
                                <span className="hidden-sm-down">Birotică</span>
                            </a>
                            <a
                                href="#"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <BsPuzzleFill style={{marginRight: "10px"}}></BsPuzzleFill>
                                <span className="hidden-sm-down">Jocuri</span>
                            </a>
                            <a
                                href="#"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <BsGiftFill style={{marginRight: "10px"}}></BsGiftFill>
                                <span className="hidden-sm-down">Cadouri</span>
                            </a>
                            <a
                                href="#"
                                className="list-group-item collapsed"
                                data-parent="#sidebar"
                            >
                                <FaPalette style={{marginRight: "10px"}}></FaPalette>
                                <span className="hidden-sm-down">Arte plastice</span>
                            </a>
                            {/*<a*/}
                            {/*    href="#"*/}
                            {/*    className="list-group-item collapsed"*/}
                            {/*    data-parent="#sidebar"*/}
                            {/*>*/}
                            {/*    <i className="fa fa-calendar"></i>{" "}*/}
                            {/*    <span className="hidden-sm-down">Link</span>*/}
                            {/*</a>*/}
                            {/*<a*/}
                            {/*    href="#"*/}
                            {/*    className="list-group-item collapsed"*/}
                            {/*    data-parent="#sidebar"*/}
                            {/*>*/}
                            {/*    <i className="fa fa-envelope"></i>{" "}*/}
                            {/*    <span className="hidden-sm-down">Link</span>*/}
                            {/*</a>*/}
                            {/*<a*/}
                            {/*    href="#"*/}
                            {/*    className="list-group-item collapsed"*/}
                            {/*    data-parent="#sidebar"*/}
                            {/*>*/}
                            {/*    <i className="fa fa-bar-chart-o"></i>{" "}*/}
                            {/*    <span className="hidden-sm-down">Link</span>*/}
                            {/*</a>*/}
                            {/*<a*/}
                            {/*    href="#"*/}
                            {/*    className="list-group-item collapsed"*/}
                            {/*    data-parent="#sidebar"*/}
                            {/*>*/}
                            {/*    <i className="fa fa-star"></i>{" "}*/}
                            {/*    <span className="hidden-sm-down">Link</span>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                    <main className="col-md-9 col-xs-11 p-l-2 p-t-2">
              {/*           <a href="#sidebar" data-toggle="collapse">*/}
              {/*  <FaBars></FaBars>*/}
              {/*</a>*/}
                        <hr/>
                        <div className="page-header">
                            <h1>Bootstrap 4 Sidebar Menu</h1>
                        </div>
                        <p className="lead">A responsive, multi-level vertical accordion.</p>
                    </main>
                </div>
            </div>
            <Footer></Footer>
            </React.Fragment>
        )
    }
}
export default SidebarCategorii;