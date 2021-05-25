import React from "react";
import {Alert, Modal} from "react-bootstrap";
import {AiFillCheckCircle, TiUpload} from "react-icons/all";
import Form from "../components/Forms/form";
import Joi from "joi-browser";

class AdaugareProdus extends Form {

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
            selectedFile: null,
            imagePreviewUrl: "",
            file: "",
            msg: "",
            errors: {}
        }

        this.doSubmit = this.doSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            method: 'POST',
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
                    console.log("Produsul s-a adaugat")
                } else if (res.status === 417) {
                    res.text().then(text => {
                        console.log(text)
                        this.setState({msg: text, showAlert: true}, () =>{
                            window.setTimeout(()=>{
                                this.setState({showAlert:false})
                            },3000)
                        })
                    })
                } else if (res.status === 409) {
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
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            selectedOption: event.target.value,
        });
    }

    closeModal = e => {
        this.setState({
            show: false,
            showModal: false,
            showModal2: false,
        });
    };

    onFileChangeHandler = async event => {
        event.preventDefault();
        let reader = new FileReader();
        // let file = event.target.files[0];
        //
        // reader.onloadend = () => {
        //     this.setState({
        //         [event.target.name]: event.target.value,
        //         selectedOption: event.target.value,
        //         file: URL.createObjectURL(event.target.files[0]),
        //         imagePreviewUrl: reader.result,
        //         selectedFile: event.target.files[0]
        //     });
        // }
        // reader.readAsDataURL(file)

        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({
                    [event.target.name]: event.target.value,
                    selectedOption: event.target.value,
                    selectedFile: event.target.files[0],
                    imagePreviewUrl: reader.result},
                )
            }
        }
        if(event.target.files[0]){
            reader.readAsDataURL(event.target.files[0]);
        }
        // reader.readAsDataURL(event.target.files[0])

    };

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");

        // let {imagePreviewUrl} = this.state;
        // let $imagePreview = null;
        // if (imagePreviewUrl) {
        //     $imagePreview = (<img src={imagePreviewUrl} alt={"imagine-produs"}/>);
        // }
        //
        // const styleUpload = {
        //     display: this.state.selectedFile ? "block" : "none"
        // }

        return (
            <React.Fragment>
                {/*<div className="page">*/}
                {/*    <div className="container">*/}
                {/*        <h1 className="heading">Add your Image</h1>*/}
                {/*        <div className="img-holder">*/}
                {/*            <img src={this.state.imagePreviewUrl} alt="" id="img" className="img" />*/}
                {/*            /!*{$imagePreview}*!/*/}
                {/*        </div>*/}
                {/*        <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.onFileChangeHandler} />*/}
                {/*        <div className="label">*/}
                {/*            <label className="image-upload" htmlFor="input">*/}
                {/*                <i className="material-icons">add_photo_alternate</i>*/}
                {/*                Choose your Photo*/}
                {/*            </label>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            <div className="table-title text-center mt-5">
                <h3>Adăugare produs</h3>
            </div>
            {this.state.msg.length > 0 ?
                <Alert className="sticky-top" variant='danger' show={this.state.showAlert} onClose={this.closeAlert} dismissible>
                    <Alert.Heading> {this.state.msg} </Alert.Heading>
                </Alert>
                : ""
            }
            <div className="create_product">
                <div className="upload" encType="multipart/form-data">
                <br/>
                    <input type="file" accept="image/*" id="input" name="file" className="inputfile inputfile-1" onChange={this.onFileChangeHandler}/>

                    {this.state.imagePreviewUrl ?
                        <div className="img-holder">
                        <img src={this.state.imagePreviewUrl} alt={"imagine-produs"} id="img" className="img"/>
                            <label htmlFor="input" className="img-label">
                                <TiUpload className="mb-1 mr-1"/>
                                Încărcați altă fotografie...
                            </label>
                        </div>
                    :
                        <div className="img-holder">
                        <label className="image-upload" htmlFor="input">
                            +
                        </label>
                        </div>
                    }
                </div>
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

                    <div className="form-group text-label">
                        {this.renderInput('detalii', "Detalii:","text","Detalii")}
                    </div>

                    <div className="form-group text-label">
                        {this.renderInput('idCategorieProdus', "ID Categorie Produs:","text","ID Categorie Produs")}
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
                                Produsul a fost adăugat!  <AiFillCheckCircle style={{color:"green"}}/>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <button type="button" className="btn btn-exit-modal" onClick={this.closeModal}>Închide</button>
                        </Modal.Footer>
                    </Modal>
                </form>
            </div>




            {/*<main className="col-md-10 col-xs-12 offset-md-1">*/}
            {/*    <div className="card card-panou" style={{marginTop: "80px", marginBottom: "60px"}}>*/}
            {/*        <div className="card-header text-center" id="card-client">Adăugare produs nou <RiAddCircleFill/></div>*/}
            {/*        <div className="card-body">*/}

            {/*<form onSubmit={this.doSubmit} className="contact-form">*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="denumire">Denumire:</label>*/}
            {/*        <input className="form-control"*/}
            {/*               type="text" name="denumire" id="denumire" required*/}
            {/*               value={this.state.denumire} onChange={this.handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="codDeBare">Cod de bare:</label>*/}
            {/*        <input className="form-control"*/}
            {/*               type="text" name="codDeBare" id="codDeBare" required*/}
            {/*               value={this.state.codDeBare} onChange={this.handleChange}/>*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="pret">Preț:</label>*/}
            {/*        <input type="text" name="pret" id="pret" required className="form-control"*/}
            {/*               value={this.state.pret} onChange={this.handleChange}/>*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="descriere">Descriere:</label>*/}
            {/*        <input type="text" name="descriere" id="descriere" required className="form-control"*/}
            {/*               value={this.state.descriere} onChange={this.handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className="form-group" encType="multipart/form-data">*/}
            {/*        <br/>*/}
            {/*        <label className="text-label" htmlFor="src">Src imagine:</label>*/}
            {/*        <label>Upload Your File </label>*/}
            {/*        <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>*/}
            {/*        /!*<img src={'data:image/jpeg;base64,'+ this.state.selectedFile}/>*!/*/}
            {/*    </div>*/}
            {/*    <div className="imgPreview">*/}
            {/*        {$imagePreview}*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="adresa">Detalii: </label>*/}
            {/*        <textarea name="detalii" value={this.state.detalii} onChange={this.handleChange}*/}
            {/*                  className="form-control">*/}
            {/*                                    </textarea>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="idCategorieProdus">Categorie produs: </label>*/}
            {/*        <textarea name="idCategorieProdus" value={this.state.idCategorieProdus} onChange={this.handleChange}*/}
            {/*                  className="form-control">*/}
            {/*                                    </textarea>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="numeUtilizatorAdministrator">Nume utilizator administrator: </label>*/}
            {/*        <textarea name="numeUtilizatorAdministrator" value={this.state.numeUtilizatorAdministrator} onChange={this.handleChange}*/}
            {/*                  className="form-control">*/}
            {/*                                    </textarea>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-label" htmlFor="cantitate">Cantitate în stoc: </label>*/}
            {/*        <textarea name="cantitate" value={this.state.cantitate} onChange={this.handleChange}*/}
            {/*                  className="form-control">*/}
            {/*                                    </textarea>*/}
            {/*    </div>*/}
            {/*    <button*/}
            {/*        type="submit"*/}
            {/*        className="btn order-detalii float-right pb-3"*/}
            {/*        onClick={this.doSubmit}*/}
            {/*    >*/}
            {/*        Salvează*/}
            {/*    </button>*/}
            {/*    <br/>*/}
            {/*    <Modal*/}
            {/*        size="md"*/}
            {/*        show={this.state.showModal}*/}
            {/*        onHide={this.closeModal}*/}
            {/*    >*/}
            {/*        <Modal.Header closeButton>*/}
            {/*            <Modal.Title id="example-modal-sizes-title-lg">*/}
            {/*                Produsul a fost adăugat!  <AiFillCheckCircle style={{color:"green"}}/>*/}
            {/*            </Modal.Title>*/}
            {/*        </Modal.Header>*/}
            {/*        <Modal.Footer>*/}
            {/*            <button type="button" className="btn btn-exit-modal" onClick={this.closeModal}>Închide</button>*/}
            {/*        </Modal.Footer>*/}
            {/*    </Modal>*/}
            {/*</form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}
            </React.Fragment>
        )

    }


}


export default AdaugareProdus;