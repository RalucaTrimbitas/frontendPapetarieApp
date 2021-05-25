import React from "react";
import {Link} from "react-router-dom";
import {Alert, Modal} from "react-bootstrap";
import {AiFillCheckCircle, AiFillEdit, RiDeleteBin6Fill} from "react-icons/all";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "../components/Forms/form";
import Joi from "joi-browser";

export default class SearchResultsPageAdmin extends Form {

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
            isLoading: true,
            searchText: "",
            searchResults: [],
            imagePreviewUrl: "",
            file: "",
            errors: {},
            msg: ""
        }

        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }
    state = {
        isLoading: true,
        searchText: "",
        searchResults: []
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

    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false,
        });
    };

    handleSearch = () => {
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
                        let searchText = this.props.location.state.searchText;
                        let results = json.filter(item => item.denumire.toLowerCase().includes(searchText.toLowerCase()));
                        this.setState({
                            isLoading: false,
                            searchText: searchText,
                            searchResults: results
                        });
                    });
                } else {
                    console.log("error")
                }
            })
    };

    componentDidMount() {
        this.handleSearch();
    }

    componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.searchText;
        let newSearch = this.props.location.state.searchText;
        if (prevSearch !== newSearch) {
            this.handleSearch();
        }
    }

    deleteProduct = id => {
        console.log(id)
        // this.openModal2()
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
        console.log(id)
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

        const produs = {
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

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt={"imagine-produs"}/>);
        }
        let toRender = this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <>
                {/*<ul>*/}
                {/*    {this.handleSearch}*/}
                {/*    <li>Search: "{this.state.searchText}"</li>*/}
                {/*    <li>Au fost găsite: {this.state.searchResults.length} produse</li>*/}
                {/*</ul>*/}
                {/*<small>{JSON.stringify(this.state.searchResults, null, 2)}</small>*/}
                {   this.state.searchResults.length > 0 ? (
                    <Container fluid className="container-search">
                        <h3>Rezultatele căutării sunt:</h3>
                        <Row>
                            {this.state.searchResults.map(item =>
                                <Col className="card card-produse-search" key={item.codDeBare}>
                                    <Link to={`/admin/produse/detalii/${item.codDeBare}`}>
                                        <img src={'data:image/jpeg;base64,'+ item.src} alt="imagine-produs" />
                                    </Link>
                                    <div className="content">
                                        <h4>
                                            <Link to={`/admin/produse/detalii/${item.codDeBare}`} style={{color:"#4b1515de"}}>{item.denumire}</Link>
                                        </h4>
                                        <span>{item.pret} lei</span>
                                        <p>{item.descriere}</p>
                                        <div className="d-inline-flex">
                                            <button type="button" className="btn order-admin-edit mr-3 " data-toggle="modal"
                                                    data-target="#exampleModalCenter" onClick={() => this.updateProduct(item.codDeBare)}><AiFillEdit style={{marginTop:"-5px"}}/> Modifică</button>
                                            <button type="button" className="btn order-admin-delete" data-toggle="modal"
                                                    data-target="#exampleModalCenter" onClick={() => this.deleteProduct(item.codDeBare)}><RiDeleteBin6Fill style={{marginTop:"-5px"}}/> Șterge</button>
                                        </div>
                                        {/*<Modal show={this.state.showModal2} onHide={this.closeModal} size="xl" scrollable={true}*/}
                                        {/*       aria-labelledby="contained-modal-title-vcenter"*/}
                                        {/*       centered>*/}
                                        {/*    <Modal.Header closeButton>*/}
                                        {/*        <Modal.Title id="contained-modal-title-vcenter">Modificare produs</Modal.Title>*/}
                                        {/*    </Modal.Header>*/}
                                        {/*    <Modal.Body>*/}
                                        {/*        <form onSubmit={this.doSubmit} className="contact-form">*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="denumire">Denumire:</label>*/}
                                        {/*                <input className="form-control"*/}
                                        {/*                       type="text" name="denumire" id="denumire" required*/}
                                        {/*                       value={this.state.denumire} onChange={this.handleChange}/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="codDeBare">Cod de bare:</label>*/}
                                        {/*                <input className="form-control"*/}
                                        {/*                       type="text" name="codDeBare" id="codDeBare" required*/}
                                        {/*                       value={this.state.codDeBare} onChange={this.handleChange}/>*/}
                                        {/*            </div>*/}

                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="pret">Preț:</label>*/}
                                        {/*                <input type="text" name="pret" id="pret" required className="form-control"*/}
                                        {/*                       value={this.state.pret} onChange={this.handleChange}/>*/}
                                        {/*            </div>*/}

                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="descriere">Descriere:</label>*/}
                                        {/*                <input type="text" name="descriere" id="descriere" required className="form-control"*/}
                                        {/*                       value={this.state.descriere} onChange={this.handleChange}/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <img src={this.state.src} alt="imagine-produs" />*/}
                                        {/*                <br/>*/}
                                        {/*                <label className="text-label" htmlFor="src">Src imagine:</label>*/}
                                        {/*                <textarea type="text" name="src" id="src" required*/}
                                        {/*                          className="form-control"*/}
                                        {/*                          value={this.state.src} onChange={this.handleChange}/>*/}
                                        {/*            </div>*/}

                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="adresa">Detalii: </label>*/}
                                        {/*                <textarea name="detalii" value={this.state.detalii} onChange={this.handleChange}*/}
                                        {/*                          className="form-control">*/}
                                        {/*        </textarea>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="idCategorieProdus">Categorie produs: </label>*/}
                                        {/*                <textarea name="idCategorieProdus" value={this.state.idCategorieProdus} onChange={this.handleChange}*/}
                                        {/*                          className="form-control">*/}
                                        {/*        </textarea>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="numeUtilizatorAdministrator">Nume utilizator administrator: </label>*/}
                                        {/*                <textarea name="numeUtilizatorAdministrator" value={this.state.numeUtilizatorAdministrator} onChange={this.handleChange}*/}
                                        {/*                          className="form-control">*/}
                                        {/*        </textarea>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <label className="text-label" htmlFor="cantitate">Cantitate în stoc: </label>*/}
                                        {/*                <textarea name="cantitate" value={this.state.cantitate} onChange={this.handleChange}*/}
                                        {/*                          className="form-control">*/}
                                        {/*        </textarea>*/}
                                        {/*            </div>*/}
                                        {/*            <button*/}
                                        {/*                type="submit"*/}
                                        {/*                className="btn order-detalii float-right pb-3"*/}
                                        {/*                onClick={this.doSubmit}*/}
                                        {/*            >*/}
                                        {/*                Salvează*/}
                                        {/*            </button>*/}
                                        {/*            <br/>*/}
                                        {/*            <Modal*/}
                                        {/*                size="md"*/}
                                        {/*                show={this.state.showModal}*/}
                                        {/*                onHide={this.closeModal}*/}
                                        {/*            >*/}
                                        {/*                <Modal.Header closeButton>*/}
                                        {/*                    <Modal.Title id="example-modal-sizes-title-lg">*/}
                                        {/*                        Datele produsului au fost actualizate cu succes! <AiFillCheckCircle style={{color:"green"}}/>*/}
                                        {/*                    </Modal.Title>*/}
                                        {/*                </Modal.Header>*/}
                                        {/*                /!*<Modal.Body>*!/*/}
                                        {/*                /!*    <Card>*!/*/}
                                        {/*                /!*        <Link to="/produse/accesorii-birou/agende-si-blocnotes-uri" type="button" className="btn btn-istoric">Continuă cumpărăturile</Link>*!/*/}
                                        {/*                /!*    </Card>*!/*/}
                                        {/*                /!*</Modal.Body>*!/*/}
                                        {/*                <Modal.Footer>*/}
                                        {/*                    <button type="button" className="btn btn-exit-modal" onClick={this.closeModal}>Închide</button>*/}
                                        {/*                </Modal.Footer>*/}
                                        {/*            </Modal>*/}
                                        {/*        </form>*/}
                                        {/*    </Modal.Body>*/}
                                        {/*</Modal>*/}
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
                                </Col>
                            )}
                        </Row>
                    </Container>
                ) : (
                    <div className="alert alert-success" style={{marginBottom: "300px"}}>
                        <button type="button" className="close" title="Close" data-dismiss="alert">×
                        </button>
                        <p>NU AU FOST GĂSITE REZULTATE.</p>
                    </div>
                )}
            </>
        );

        return <div style={{ margin: "20px 20px 20px 20px" }}>{toRender}</div>;
    }

}
