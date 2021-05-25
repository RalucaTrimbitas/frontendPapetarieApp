import React from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Alert, Dropdown, Modal} from "react-bootstrap";
import {AiFillCheckCircle, AiFillEdit, RiDeleteBin6Fill} from "react-icons/all";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import SidebarCategoriiAdministrator from "./sidebarCategoriiAdministrator";
import Footer from "../components/utils/footer";
import Joi from "joi-browser";
import Form from "../components/Forms/form";

export class ProduseListAdministrator extends Form {
    constructor() {
        super();
        this.state = {
            data: {
                denumire: "",
                codDeBare: "",
                pret: "",
                descriere: "",
                src: "",
                detalii: "",
                idCategorieProdus: "",
                numeUtilizatorAdministrator: "",
                cantitate: "",
            },
            produse: [],
            show: false,
            showModal2: false,
            visible: 6,
            selectedFile: null,
            imagePreviewUrl: "",
            file: "",
            errors: {},
            msg: ""
        };

        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderProduse = this.renderProduse.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);

        fetch('http://localhost:8080/produse', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({produse: json});
                    });
                } else {
                    console.log("error")
                }
            })
    }

    schema = {
        denumire: Joi.string().required().error(() => {return {message: "Denumirea este obligatorie."}}),
        codDeBare: Joi.string().required().error(() => {return {message: "Codul de bare este obligatoriu."}}),
        pret: Joi.string().required().error(() => {return {message: "Prețul este obligatoriu."}}),
        descriere: Joi.string().required().error(() => {return {message: "Descrierea este obligatorie."}}),
        src: Joi.string().required().error(() => {return {message: "Adăugarea unei fotografii este obligatorie."}}),
        detalii: Joi.string().required().error(() => {return {message: "Completați detaliile."}}),
        idCategorieProdus: Joi.string().error(() => {return {message: "Categoria produsului este obligatorie."}}),
        numeUtilizatorAdministrator: Joi.string().error(() => {return {message: "Numele de utilizator al administratorului este obligatoriu."}}),
        cantitate: Joi.string().error(() => {return {message: "Cantitatea este obligatorie."}}),
    };

    getData() {
        fetch('http://localhost:8080/produse', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({produse: json});
                    });
                } else {
                    console.log("error")
                }
            })
    }

    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false,
        });

    };

    deleteProduct = id => {
        console.log(id)
        this.state.produse.forEach((item, index) => {
            if (item.codDeBare === id) {
                this.state.produse.splice(index, 1)
                fetch("http://localhost:8080/produse/" + item.codDeBare, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                    },
                })
                    .then(res => {
                        if (res.status === 200) {
                            this.setState({
                                show: true,
                            });
                        } else {
                            console.log("error")
                        }
                    })
            }
        })
        this.setState({produse: this.state.produse})
    }

    updateProduct = id => {
        // console.log(id)
        fetch('http://localhost:8080/produse/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                const payload = {
                    denumire: data.denumire,
                    codDeBare: data.codDeBare,
                    pret: data.pret,
                    descriere: data.descriere,
                    src: data.src,
                    detalii: data.detalii,
                    idCategorieProdus: data.idCategorieProdus,
                    numeUtilizatorAdministrator: data.numeUtilizatorAdministrator,
                    cantitate: data.cantitate
                }
                this.setState({
                    data: payload,
                    showModal2: true
                })

            })
    }

    doSubmit = (event) => {
        event.preventDefault();

        const produs= {
            denumire: this.state.data.denumire,
            codDeBare: this.state.data.codDeBare,
            pret: this.state.data.pret,
            descriere: this.state.data.descriere,
            src: "",
            detalii: this.state.data.detalii,
            idCategorieProdus: this.state.data.idCategorieProdus,
            numeUtilizatorAdministrator: this.state.data.numeUtilizatorAdministrator,
            cantitate: this.state.data.cantitate
        }

        const fd = new FormData();
        fd.append('image', this.state.selectedFile);
        fd.append('produs', JSON.stringify(produs));

        fetch('http://localhost:8080/produse', {
            method: 'PUT',
            body: fd
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        denumire: this.state.data.denumire,
                        codDeBare: this.state.data.codDeBare,
                        pret: this.state.data.pret,
                        descriere: this.state.data.descriere,
                        src: this.state.data.src,
                        detalii: this.state.data.detalii,
                        idCategorieProdus: this.state.data.idCategorieProdus,
                        numeUtilizatorAdministrator: this.state.data.numeUtilizatorAdministrator,
                        cantitate: this.state.data.cantitate,
                        showModal: true
                    })
                    console.log("Produsul s-a modificat")
                    this.getData()
                } else if (res.status === 417) {
                    res.text().then(text => {
                        console.log(text);
                        this.setState({msg: text, showAlert: true}, () =>{
                            window.setTimeout(()=>{
                                this.setState({showAlert:false})
                            },3000)
                        })
                    });
                }
                else if (res.status === 409) {
                    res.text().then(text => {
                        console.log(text)
                        this.setState({msg: text, showAlert: true}, () =>{
                            window.setTimeout(()=>{
                                this.setState({showAlert:false})
                            },3000)
                        })
                    })
                }
            })
    };

    loadMore() {
        this.setState((old) => {
            return {visible: old.visible + 3}
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            selectedOption: event.target.value,
        });

    }

    onFileChangeHandler = (event) => {
        // event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                [event.target.name]: event.target.value,
                selectedOption: event.target.value,
                file: URL.createObjectURL(event.target.files[0]),
                imagePreviewUrl: reader.result,
                selectedFile: event.target.files[0]
            });
        }
        reader.readAsDataURL(file)
    };


    renderProduse = (produs) => {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt={"imagine-produs"}/>);
        }
        const {codDeBare,denumire,pret,descriere,src} = produs;
        return (
            <React.Fragment key={codDeBare}>
                <div className="card card-produse-admin" key={codDeBare}>
                    <Link to={`/admin/produse/detalii/${codDeBare}`}>
                        <img src={'data:image/jpeg;base64,'+ src} alt="imagine-produs" />
                    </Link>
                    <div className="content">
                        <h4>
                            <Link to={`/admin/produse/detalii/${codDeBare}`} style={{color:"#4b1515de"}}>{denumire}</Link>
                        </h4>
                        <span>{pret.toFixed(2)} lei</span>
                        <p>{descriere}</p>
                        <div className="d-inline-flex">
                            <button type="button" className="btn order-admin-edit mr-3 " data-toggle="modal"
                                    data-target="#exampleModalCenter" onClick={() => this.updateProduct(codDeBare)}><AiFillEdit style={{marginTop:"-5px"}}/> Modifică</button>
                            <button type="button" className="btn order-admin-delete" data-toggle="modal"
                                    data-target="#exampleModalCenter" onClick={() => this.deleteProduct(codDeBare)}><RiDeleteBin6Fill style={{marginTop:"-5px"}}/> Șterge</button>
                        </div>
                        <Modal show={this.state.showModal2} onHide={this.closeModal} size="xl" scrollable={true}
                               aria-labelledby="contained-modal-title-vcenter"
                               centered>
                            <Modal.Header closeButton className="header-modal">
                                <Modal.Title id="contained-modal-title-vcenter" >Modificare produs</Modal.Title>
                            </Modal.Header>
                            {this.state.msg.length > 0 ?
                                <Alert className="sticky-top" variant='danger' show={this.state.showAlert} onClose={this.closeAlert} dismissible>
                                    <Alert.Heading> {this.state.msg} </Alert.Heading>
                                </Alert>
                                : ""
                            }
                            <Modal.Body>
                            <form onSubmit={this.doSubmit} className="contact-form">
                                <div className="form-group text-label">
                                    {this.renderInput('denumire', "Denumire: ","text","Denumire")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('codDeBare', "Cod de bare:","text","Cod de bare")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('pret', "Preț:","text","Preț")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('descriere', "Descriere:","text","Descriere")}
                                </div>
                                <div className="form-group" encType="multipart/form-data">
                                    <br/>
                                    <label className="text-label" htmlFor="src">Încărcați altă poză:</label>
                                    {/*<label>Încărcați altă poză </label>*/}
                                    <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                                    {/*<img src={this.state.file} alt={"picture"}/>*/}
                                </div>
                                <div className="imgPreview">
                                    {$imagePreview}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('detalii', "Detalii: ","text","Detalii")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('idCategorieProdus', "ID Categorie Produs: ","text","ID Categorie Produs")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('numeUtilizatorAdministrator', "Nume utilizator administrator:","text","Nume utilizator administrator")}
                                </div>

                                <div className="form-group text-label">
                                    {this.renderInput('cantitate', "Cantitate:","text","Cantitate în stoc")}
                                </div>
                                <button
                                    type="submit"
                                    className="btn order-detalii float-right pb-3"
                                    onClick={this.doSubmit}
                                >
                                    Salvează
                                </button>
                                <br/>
                                <Modal
                                    size="md"
                                    show={this.state.showModal}
                                    onHide={this.closeModal}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Datele produsului au fost actualizate cu succes! <AiFillCheckCircle style={{color:"green"}}/>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Footer>
                                        <button type="button" className="btn btn-exit-modal" onClick={this.closeModal}>Închide</button>
                                    </Modal.Footer>
                                </Modal>
                            </form>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            size="md"
                            show={this.state.show}
                            onHide={this.closeModal}
                            className="modal-backdrop"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Produsul a fost șters! <AiFillCheckCircle style={{color:"green"}}/>
                                </Modal.Title>
                            </Modal.Header>
                        </Modal>
                    </div>
                </div>
                </React.Fragment>
        )
    }

    sortByPriceAsc() {
        this.setState(prevState => {
            this.state.produse.sort((a, b) => (a.pret - b.pret))
        });
        this.forceUpdate()
    }

    sortByPriceDesc() {
        this.setState(prevState => {
            this.state.produse.sort((a, b) => (b.pret - a.pret))
        });
        this.forceUpdate()
    }


    renderCategoriiProduse(text) {
         var filterProducts = this.state.produse
                .filter(item => {
                    return item.idCategorieProdus === text
                })

        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col className="col-md-12 text-right mr-3 mb-3">
                            <Dropdown>
                                <Dropdown.Toggle className="btn-cautare" id="dropdown-basic">
                                    Sortează după preț
                                </Dropdown.Toggle>
                                <DropdownMenu>
                            <DropdownItem onClick={this.sortByPriceAsc}>Preț: crescător</DropdownItem>
                            <DropdownItem onClick={this.sortByPriceDesc}>Preț: descrescător</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4 col-lg-3 col-xs-1 p-l-0 p-r-0 in" >
                            <SidebarCategoriiAdministrator show={this.show}/>
                        </Col>
                        <Col className="col-md-8 col-lg-9 col-xs-11 p-l-2 p-t-2" id="produs">
                            {this.state.produse
                                .filter(item => {
                                    return item.idCategorieProdus === text
                                })
                                .slice(0,this.state.visible)
                                .map(produs => this.renderProduse(produs))}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-8 col-lg-9 p-l-2 p-t-2 col-xs-11 text-center mb-5 mt-5">
                        {this.state.visible < filterProducts.length &&
                        <button type="button" onClick={this.loadMore} className="btn btn-cautare">Vezi mai mult</button>
                        }
                        </Col>
                    </Row>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }

    render() {
        //Categoria 1 -  Accesorii de birou
        if (this.props.match.params.id === "accesorii-birou") {
            return this.renderCategoriiProduse("1")
        }
        if (this.props.match.params.id === "agende-si-blocnotes-uri") {
            return (this.renderCategoriiProduse("1.1"))
        }
        if (this.props.match.params.id === "bibliorafturi") {
            return this.renderCategoriiProduse("1.2")
        }
        if (this.props.match.params.id === "calculatoare-birou-si-stiintifice") {
            return this.renderCategoriiProduse("1.3")
        }
        if (this.props.match.params.id === "capsatoare-perforatoare") {
            return this.renderCategoriiProduse("1.4")
        }
        if (this.props.match.params.id === "dosare-mape-si-folii") {
            return this.renderCategoriiProduse("1.5")
        }
        if (this.props.match.params.id === "foarfece-si-cuttere") {
            return this.renderCategoriiProduse("1.6")
        }
        if (this.props.match.params.id === "plicuri") {
            return this.renderCategoriiProduse("1.7")
        }
        if (this.props.match.params.id === "lipici") {
            return this.renderCategoriiProduse("1.8")
        }

        //Categoria 2 -  Instrumente de scris
        if (this.props.match.params.id === "creioane-negre-si-creioane-mecanice") {
            return this.renderCategoriiProduse("2.1")
        }
        if (this.props.match.params.id === "markere-si-evidentiatoare") {
            return this.renderCategoriiProduse("2.2")
        }
        if (this.props.match.params.id=== "pixuri") {
            return this.renderCategoriiProduse("2.3")
        }
        if (this.props.match.params.id === "stilouri-si-rollere") {
            return this.renderCategoriiProduse("2.4")
        }
        if (this.props.match.params.id === "seturi-instrumente-de-scris") {
            return this.renderCategoriiProduse("2.5")
        }

        //Categoria 3 - Rechizite scolare
        if (this.props.match.params.id === "caiete") {
            return this.renderCategoriiProduse("3.1")
        }
        if (this.props.match.params.id === "coperti-si-etichete-scolare") {
            return this.renderCategoriiProduse("3.2")
        }
        if (this.props.match.params.id=== "ascutitori-si-radiere") {
            return this.renderCategoriiProduse("3.3")
        }
        if (this.props.match.params.id === "creta-si-bureti-scolari") {
            return this.renderCategoriiProduse("3.4")
        }
        if (this.props.match.params.id === "ghiozdane") {
            return this.renderCategoriiProduse("3.5")
        }
        if (this.props.match.params.id === "penare") {
            return this.renderCategoriiProduse("3.6")
        }
        if (this.props.match.params.id === "plastilina") {
            return this.renderCategoriiProduse("3.7")
        }

        //Categoria 4 - Articole creative si craft
        if (this.props.match.params.id === "abtibilde-si-stampile-copii") {
            return this.renderCategoriiProduse("4.1")
        }
        if (this.props.match.params.id === "accesorii") {
            return this.renderCategoriiProduse("4.2")
        }
        if (this.props.match.params.id === "carioci-si-culori-speciale") {
            return this.renderCategoriiProduse("4.3")
        }
        if (this.props.match.params.id === "foarfece-si-perforatoare-model") {
            return this.renderCategoriiProduse("4.4")
        }
        if (this.props.match.params.id === "seturi-creative") {
            return this.renderCategoriiProduse("4.5")
        }

        // //Categoria 5 - Birotica
        if (this.props.match.params.id === "tipizate") {
            return this.renderCategoriiProduse("5.1")
        }
        if (this.props.match.params.id === "role-casa") {
            return this.renderCategoriiProduse("5.2")
        }
        if (this.props.match.params.id === "indigo") {
            return this.renderCategoriiProduse("5.3")
        }

        // //Categoria 6 - Jocuri
        if (this.props.match.params.id === "jocuri-educative") {
            return this.renderCategoriiProduse("6.1")
        }
        if (this.props.match.params.id === "jocuri-de-societate") {
            return this.renderCategoriiProduse("6.2")
        }
        if (this.props.match.params.id === "jocuri-din-lemn") {
            return this.renderCategoriiProduse("6.3")
        }
        if (this.props.match.params.id === "puzzle") {
            return this.renderCategoriiProduse("6.4")
        }

        // //Categoria 7 - Cadouri
        if (this.props.match.params.id === "cadouri-pentru-toti") {
            return this.renderCategoriiProduse("7")
        }

        // //Categoria 9 - Arte plastice
        if (this.props.match.params.id === "blocuri-pentru-desen") {
            return this.renderCategoriiProduse("8.1")
        }
        if (this.props.match.params.id === "acuarele-si-culori-acrilice") {
            return this.renderCategoriiProduse("8.2")
        }
        if (this.props.match.params.id === "pensule") {
            return this.renderCategoriiProduse("8.3")
        }
        if (this.props.match.params.id === "panza-pictura") {
            return this.renderCategoriiProduse("8.4")
        }
    }
}

const ProduseViewAdministrator = withRouter(ProduseListAdministrator)
export default ProduseViewAdministrator
