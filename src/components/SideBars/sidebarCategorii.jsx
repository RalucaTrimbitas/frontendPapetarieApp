import React, {Component} from "react";
import {
    BsGiftFill,
    BsPuzzleFill,
    FaListUl,
    FaPalette,
    FaPencilAlt,
    FiPaperclip,
    ImBook,
    RiScissorsCutLine
} from "react-icons/all";
import ProduseView from "../Store/ProduseList";
import Link from "react-router-dom/Link";
import DropdownItem from 'react-bootstrap/DropdownItem';

class SidebarCategorii extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goTo: ""
        }

        this.show = this.show.bind(this);
        // this.state = {render: <ProduseView btnText={"produse-sidebar"}/>}
    }

    show(type) {
        switch (type) {
            //1. Accesorii birou
            case "accesorii-birou":
                this.setState({goTo: "accesorii-birou"});
                break;
            case "accesorii-birou(1.1)":
                // this.setState({goTo: "agende"});
                // this.setState({render: <ProduseView btnText="accesorii-birou(1.1)"/>});
                break;
            case "accesorii-birou(1.2)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.2)"/>});
                break;
            case "accesorii-birou(1.3)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.3)"/>});
                break;
            case "accesorii-birou(1.4)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.4)"/>});
                break;
            case "accesorii-birou(1.5)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.5)"/>});
                break;
            case "accesorii-birou(1.6)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.6)"/>});
                break;
            case "accesorii-birou(1.7)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.2)"/>});
                break;
            case "accesorii-birou(1.8)":
                this.setState({render: <ProduseView btnText="accesorii-birou(1.2)"/>});
                break;
            //2. Instrumente de scris
            case "instrumente-scris":
                this.setState({render: <ProduseView btnText="instrumente-scris"/>});
                break;
            case "instrumente-scris(2.1)":
                this.setState({render: <ProduseView btnText="instrumente-scris(2.1)"/>});
                break;
            case "instrumente-scris(2.2)":
                this.setState({render: <ProduseView btnText="instrumente-scris(2.2)"/>});
                break;
            case "instrumente-scris(2.3)":
                this.setState({render: <ProduseView btnText="instrumente-scris(2.3)"/>});
                break;
            case "instrumente-scris(2.4)":
                this.setState({render: <ProduseView btnText="instrumente-scris(2.4)"/>});
                break;
            case "instrumente-scris(2.5)":
                this.setState({render: <ProduseView btnText="instrumente-scris(2.5)"/>});
                break;
            //3. Rechizite scolare
            case "rechizite-scolare":
                this.setState({render: <ProduseView btnText="rechizite-scolare"/>});
                break;
            case "rechizite-scolare(3.1)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.1)"/>});
                break;
            case "rechizite-scolare(3.2)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.2)"/>});
                break;
            case "rechizite-scolare(3.3)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.3)"/>});
                break;
            case "rechizite-scolare(3.4)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.4)"/>});
                break;
            case "rechizite-scolare(3.5)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.5)"/>});
                break;
            case "rechizite-scolare(3.6)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.6)"/>});
                break;
            case "rechizite-scolare(3.7)":
                this.setState({render: <ProduseView btnText="rechizite-scolare(3.7)"/>});
                break;

            //4. Articole creative si craft
            case "articole-creative":
                this.setState({render: <ProduseView btnText="articole-creative"/>});
                break;
            case "articole-creative(4.1)":
                this.setState({render: <ProduseView btnText="articole-creative(4.1)"/>});
                break;
            case "articole-creative(4.2)":
                this.setState({render: <ProduseView btnText="articole-creative(4.2)"/>});
                break;
            case "articole-creative(4.3)":
                this.setState({render: <ProduseView btnText="articole-creative(4.3)"/>});
                break;
            case "articole-creative(4.4)":
                this.setState({render: <ProduseView btnText="articole-creative(4.4)"/>});
                break;
            case "articole-creative(4.5)":
                this.setState({render: <ProduseView btnText="articole-creative(4.5)"/>});
                break;

            //5. Birotica
            case "birotica":
                this.setState({render: <ProduseView btnText="birotica"/>});
                break;
            case "birotica(5.1)":
                this.setState({render: <ProduseView btnText="birotica(5.1)"/>});
                break;
            case "birotica(5.2)":
                this.setState({render: <ProduseView btnText="birotica(5.2)"/>});
                break;
            case "birotica(5.3)":
                this.setState({render: <ProduseView btnText="birotica(5.3)"/>});
                break;

            //6. Jocuri
            case "jocuri":
                this.setState({render: <ProduseView btnText="jocuri"/>});
                break;
            case "jocuri(5.1)":
                this.setState({render: <ProduseView btnText="jocuri(6.1)"/>});
                break;
            case "jocuri(5.2)":
                this.setState({render: <ProduseView btnText="jocuri(6.2)"/>});
                break;
            case "jocuri(5.3)":
                this.setState({render: <ProduseView btnText="jocuri(6.3)"/>});
                break;
            case "jocuri(5.4)":
                this.setState({render: <ProduseView btnText="jocuri(6.4)"/>});
                break;
            //7. Cadouri
            case "cadouri":
                // this.setState({render: <ProduseView btnText="cadouri"/>});
                this.setState({goTo: "cadouri"});
                break;

            //8. Arte plastice
            case "arte-plastice":
                this.setState({render: <ProduseView btnText="arte-plastice"/>});
                break;
            case "arte-plastice(8.1)":
                this.setState({render: <ProduseView btnText="arte-plastice(8.1)"/>});
                break;
            case "arte-plastice(8.2)":
                this.setState({render: <ProduseView btnText="arte-plastice(8.2)"/>});
                break;
            case "arte-plastice(8.3)":
                this.setState({render: <ProduseView btnText="arte-plastice(8.3)"/>});
                break;
            case "arte-plastice(8.4)":
                this.setState({render: <ProduseView btnText="arte-plastice(8.4)"/>});
                break;

            default:
                this.setState({render: <ProduseView btnText="produse-sidebar"/>})
        }
    }

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <React.Fragment>
                {/*<div className="container-fluid">*/}
                {/*    <div className="row">*/}
                <div
                    // className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in"
                    className="sidebar"
                    id="sidebar"
                    style={{paddingLeft: "0px"}}
                >
                    <div className="nav-side-menu" id="active">
                        <div className="menu-list panel">
                            <DropdownItem
                                // tag={Link}
                                href="#menu1"
                                value="1"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <FiPaperclip style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Accesorii de birou  <span
                                    className="arrow"/></span>{" "}
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu1">
                                <Link
                                    to={`/produse/accesorii-birou/agende-si-blocnotes-uri`}
                                    action="replace"
                                    className="list-group-item text-left"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    style={{paddingLeft: "50px"}}
                                >
                                    Agende și blocnotes-uri{" "}
                                </Link>
                                <Link id="button-sidebar" className="list-group-item  text-left" data-parent="#menu1"
                                      to={`/produse/accesorii-birou/bibliorafturi`}
                                      action="replace"
                                      style={{paddingLeft: "50px"}}>
                                    Bibliorafturi
                                </Link>
                                <Link className="list-group-item text-left text-wrap" data-parent="#menu1"
                                      to={`/produse/accesorii-birou/calculatoare-birou-si-stiintifice`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Calculatoare birou și științifice
                                </Link>
                                <Link className="list-group-item text-left text-wrap" data-parent="#menu1"
                                      to={`/produse/accesorii-birou/capsatoare-perforatoare`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Capsatoare/perforatoare
                                </Link>
                                <Link className="list-group-item text-left text-wrap" data-parent="#menu1"
                                      to={`/produse/accesorii-birou/dosare-mape-si-folii`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Dosare, mape și folii
                                </Link>
                            </div>

                            <DropdownItem
                                href="#menu2"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <FaPencilAlt style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Instrumente de scris <span
                                    className="arrow"/></span>
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu2">
                                <Link
                                    to={`/produse/instrumente-scris/creioane-negre-si-creioane-mecanice`}
                                    action="replace"
                                    className="list-group-item text-left"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    style={{paddingLeft: "50px"}}
                                >
                                    Creioane negre și creioane mecanice{" "}
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu2"
                                      to={`/produse/instrumente-scris/markere-si-evidentiatoare`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Markere/evidențiatoare
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu2"
                                      to={`/produse/instrumente-scris/pixuri`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Pixuri
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu2"
                                      to={`/produse/instrumente-scris/stilouri-si-rollere`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Stilouri și rollere
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu2"
                                      to={`/produse/instrumente-scris/seturi-instrumente-de-scris`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Seturi instrumente de scris
                                </Link>
                            </div>
                            <DropdownItem
                                href="#menu3"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <ImBook style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Rechizite școlare <span
                                    className="arrow"/></span>
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu3">
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                      to={`/produse/rechizite-scolare/caiete`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Caiete
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                      to={`/produse/rechizite-scolare/coperti-si-etichete-scolare`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Coperți/etichete școlare
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                      to={`/produse/rechizite-scolare/ascutitori-si-radiere`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Ascuțitori/radiere
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                      to={`/produse/rechizite-scolare/creta-si-bureti-scolari`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Cretă/bureți școlari
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                      to={`/produse/rechizite-scolare/ghiozdane`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Ghiozdane
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                      to={`/produse/rechizite-scolare/penare`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Penare
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu3"
                                        to={`/produse/rechizite-scolare/plastilina`}
                                        action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Plastilină
                                </Link>
                            </div>

                            <DropdownItem
                                href="#menu4"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <RiScissorsCutLine style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Articole creative<span
                                    className="arrow"/></span>
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu4">
                                <Link className="list-group-item text-left" data-parent="#menu4"
                                    to={`/produse/articole-creative/abtibilde-si-stampile-copii`}
                                    action="replace"
                                    style={{paddingLeft: "50px"}}>
                                    Abțibilde/ștampile copii
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu4"
                                      to={`/produse/articole-creative/accesorii`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Accesorii
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu4"
                                      to={`/produse/articole-creative/carioci-si-culori-speciale`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Carioci/Culori speciale
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu4"
                                      to={`/produse/articole-creative/foarfece-si-perforatoare-model`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Foarfece/Perforatoare model
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu4"
                                      to={`/produse/articole-creative/seturi-creative`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Seturi creative
                                </Link>
                            </div>


                            <DropdownItem
                                href="#menu5"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <FaListUl style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Birotică <span className="arrow"/></span>
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu5">
                                <Link className="list-group-item text-left" data-parent="#menu5"
                                      to={`/produse/birotica/tipizate`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Tipizate
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu5"
                                      to={`/produse/birotica/role-casa`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Role casă
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu5"
                                      to={`/produse/birotica/indigo`}
                                      action="replace"
                                      style={{paddingLeft: "50px"}}>
                                    Indigo
                                </Link>
                            </div>


                            <DropdownItem
                                href="#menu6"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <BsPuzzleFill style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Jocuri <span className="arrow"/></span>
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu6">
                                <Link className="list-group-item text-left" data-parent="#menu6"
                                      to={`/produse/jocuri/jocuri-educative`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Jocuri educative
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu6"
                                      to={`/produse/jocuri/jocuri-de-societate`}
                                      action="replace"
                                      style={{paddingLeft: "50px"}}>
                                    Jocuri de societate
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu6"
                                      to={`/produse/jocuri/jocuri-din-lemn`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Jocuri din lemn
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu6"
                                      to={`/produse/jocuri/puzzle`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Puzzle
                                </Link>

                            </div>

                            <Link
                                to={`/produse/cadouri/cadouri-pentru-toti`}
                                action="replace"
                                className="list-group-item collapsed text-left"
                                data-parent="#sidebar"
                            >
                                <BsGiftFill style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Cadouri</span>
                            </Link>

                            <DropdownItem
                                href="#menu8"
                                className="list-group-item collapsed text-left"
                                data-toggle="collapse"
                                data-parent="#sidebar"
                                aria-expanded="false"
                            >
                                <FaPalette style={{marginRight: "10px"}}/>
                                <span className="hidden-sm-down">Arte plastice<span
                                    className="arrow"/></span>
                            </DropdownItem>
                            <div className="collapse text-wrap" id="menu8">
                                <Link className="list-group-item text-left" data-parent="#menu8"
                                      to={`/produse/arte-plastice/blocuri-pentru-desen`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Blocuri pentru desen
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu8"
                                      to={`/produse/arte-plastice/acuarele-si-culori-acrilice`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Acuarele/Culori acrilice
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu8"
                                      to={`/produse/arte-plastice/pensule`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Pensule
                                </Link>
                                <Link className="list-group-item text-left" data-parent="#menu8"
                                      to={`/produse/arte-plastice/panza-pictura`}
                                      action="replace"
                                        style={{paddingLeft: "50px"}}>
                                    Pânză pictură
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<main className="col-md-8 col-xs-11 p-l-2 p-t-2">*/}
                {/*{this.state.render}*/}
                {/*</main>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </React.Fragment>
        )
    }
}

export default SidebarCategorii;