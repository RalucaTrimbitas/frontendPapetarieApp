import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import {AiFillCheckCircle, RiAddCircleFill} from "react-icons/all";
import DisplayImage from "./displayImage";

class AdaugareProdus extends Component {

    constructor() {
        super();
        this.state = {
            produse: [],
            denumire: "",
            codDeBare: "",
            pret: "",
            descriere: "",
            src: "",
            detalii: "",
            disponibilitate: "",
            idCategorieProdus: "",
            numeUtilizatorAdministrator: "",
            cantitate: "",
            selectedFile: null,
        }

        this.doSubmit = this.doSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    doSubmit = (event) => {
        event.preventDefault();
        const payload = {
            denumire: this.state.denumire,
            codDeBare: this.state.codDeBare,
            pret: this.state.pret,
            descriere: this.state.descriere,
            src: this.state.src,
            detalii: this.state.detalii,
            idCategorieProdus: this.state.idCategorieProdus,
            numeUtilizatorAdministrator: this.state.numeUtilizatorAdministrator,
            cantitate: this.state.cantitate
        }

        fetch('http://localhost:8080/produse', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        denumire: this.state.denumire,
                        codDeBare: this.state.codDeBare,
                        pret: this.state.pret,
                        descriere: this.state.descriere,
                        src: this.state.src,
                        detalii: this.state.detalii,
                        idCategorieProdus: this.state.idCategorieProdus,
                        numeUtilizatorAdministrator: this.state.numeUtilizatorAdministrator,
                        cantitate: this.state.cantitate,
                        showModal: true
                    })
                    console.log("Produsul s-a modificat")
                } else if (res.status === 417) {
                    res.text().then(text => {
                        console.log(text);

                    });
                }
            })
        // this.props.history.goBack();
        console.log("Submitted");
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            selectedOption: event.target.value,
        });
    }

    closeModal = e => {
        this.setState({
            show: false,
            showModal2: false,
        });

    };

    fileSelectedHandler = event => {
        // console.log(event.target.files[0])
        this.setState({
            selectedFile: URL.createObjectURL(event.target.files[0])
            // selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('file', this.state.selectedFile);
        console.log(fd)
        fetch("http://localhost:8080/api" , {
            method: "POST",
            headers: { 'Content-Type': 'multipart/form-data' },
            body: fd
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("Imaginea s-a adaugat")
                } else {
                    console.log(res.status)
                }
            })
    }

    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        const payload = {
            idCategorieProdus: "1.4"
        }

        fetch('http://localhost:8080/upload/' + payload.idCategorieProdus, {
            method: 'POST',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
            else {
                console.log(res)
            }
        });
    };

    filterBySize = (file) => {
        //filter out images larger than 5MB
        return file.size <= 5242880;
    };

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <React.Fragment>
            <DisplayImage/>
            <main className="col-md-10 col-xs-12 offset-md-1">
                <div className="card card-panou" style={{marginTop: "80px", marginBottom: "60px"}}>
                    <div className="card-header text-center" id="card-client">Adăugare produs nou <RiAddCircleFill/></div>
                    <div className="card-body">

            <form onSubmit={this.doSubmit} className="contact-form">

                {/*<div>*/}
                {/*    <input type="file" onChange={this.handleChange1}/>*/}
                {/*    <img src={this.state.file}/>*/}
                {/*</div>*/}

                {/*<input*/}
                {/*    style={{display: "none"}}*/}
                {/*    type="file"*/}
                {/*    onChange={this.fileSelectedHandler}*/}
                {/*    ref={fileInput => this.fileInput = fileInput}*/}
                {/*/>*/}
                {/*<div className="d-inline-flex">*/}
                {/*<button style={{width:"150px", marginRight: "10px"}} onClick={()=>this.fileInput.click()}>Pick file</button>*/}
                {/*<button style={{width:"150px"}} onClick={this.fileUploadHandler}>Upload</button>*/}
                {/*    <div>*/}
                {/*    <img src={this.state.selectedFile}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group files color">
                                <label>Upload Your File </label>
                                <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<Uploady*/}
                {/*    destination={{ url: "/poze" }}*/}
                {/*    fileFilter={this.filterBySize}*/}
                {/*    accept="image/*"*/}
                {/*>*/}
                {/*    <UploadButton />*/}
                {/*    <UploadPreview />*/}
                {/*</Uploady>*/}


                <div className="form-group">
                    <label className="text-label" htmlFor="denumire">Denumire:</label>
                    <input className="form-control"
                           type="text" name="denumire" id="denumire" required
                           value={this.state.denumire} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label className="text-label" htmlFor="codDeBare">Cod de bare:</label>
                    <input className="form-control"
                           type="text" name="codDeBare" id="codDeBare" required
                           value={this.state.codDeBare} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="text-label" htmlFor="pret">Preț:</label>
                    <input type="text" name="pret" id="pret" required className="form-control"
                           value={this.state.pret} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="text-label" htmlFor="descriere">Descriere:</label>
                    <input type="text" name="descriere" id="descriere" required className="form-control"
                           value={this.state.descriere} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <img src={this.state.src} alt="imagine-produs" />
                    <br/>
                    <label className="text-label" htmlFor="src">Src imagine:</label>
                    <textarea type="text" name="src" id="src" required
                              className="form-control"
                              value={this.state.src} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="text-label" htmlFor="adresa">Detalii: </label>
                    <textarea name="detalii" value={this.state.detalii} onChange={this.handleChange}
                              className="form-control">
                                                </textarea>
                </div>
                <div className="form-group">
                    <label className="text-label" htmlFor="idCategorieProdus">Categorie produs: </label>
                    <textarea name="idCategorieProdus" value={this.state.idCategorieProdus} onChange={this.handleChange}
                              className="form-control">
                                                </textarea>
                </div>
                <div className="form-group">
                    <label className="text-label" htmlFor="numeUtilizatorAdministrator">Nume utilizator administrator: </label>
                    <textarea name="numeUtilizatorAdministrator" value={this.state.numeUtilizatorAdministrator} onChange={this.handleChange}
                              className="form-control">
                                                </textarea>
                </div>
                <div className="form-group">
                    <label className="text-label" htmlFor="cantitate">Cantitate în stoc: </label>
                    <textarea name="cantitate" value={this.state.cantitate} onChange={this.handleChange}
                              className="form-control">
                                                </textarea>
                </div>
                <button
                    type="submit"
                    className="btn order-admin float-right pb-3"
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
                            Produsul a fost adăugat!  <AiFillCheckCircle style={{color:"green"}}/>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <button type="button" className="btn btn-exit-modal" onClick={this.closeModal}>Închide</button>
                    </Modal.Footer>
                </Modal>
            </form>
                    </div>
                </div>
            </main>
            </React.Fragment>
        )

    }


}


export default AdaugareProdus;