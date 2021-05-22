import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import {AiFillCheckCircle, TiUpload} from "react-icons/all";

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
            imagePreviewUrl: "",
            file: ""
        }

        this.doSubmit = this.doSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    doSubmit = (event) => {
        event.preventDefault();
        const produs = {
            denumire: this.state.denumire,
            codDeBare: this.state.codDeBare,
            pret: this.state.pret,
            descriere: this.state.descriere,
            src: "",
            detalii: this.state.detalii,
            idCategorieProdus: this.state.idCategorieProdus,
            numeUtilizatorAdministrator: this.state.numeUtilizatorAdministrator,
            cantitate: this.state.cantitate
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
                    console.log("Produsul s-a adaugat")
                } else if (res.status === 417) {
                    res.text().then(text => {
                        console.log(text);

                    });
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

                {/*<div className="imgPreview">*/}
                {/*    {$imagePreview}*/}
                {/*</div>*/}

                {/*<div className="upload" encType="multipart/form-data">*/}
                {/*    /!*<label className="text-label" htmlFor="src">Src imagine:</label>*!/*/}
                {/*    /!*<label>Upload Your File </label>*!/*/}
                {/*    <input type="file" name="file" id="file_up" onChange={this.onFileChangeHandler}/>*/}
                {/*    {*/}
                {/*    //     this.state.selectedFile ? <div id="file_img"/>*/}
                {/*    //         :*/}
                {/*    //         <div id="file_img"  style={styleUpload}>*/}
                {/*    //             /!*{$imagePreview}*!/*/}
                {/*    //             <img src={imagePreviewUrl} alt={"imagine-produs"}/>*/}
                {/*    //         </div>*/}
                {/*    }*/}
                {/*</div>*/}

                <form onSubmit={this.doSubmit} className="contact-form">
                    <div className="row">
                        <label className="text-label" htmlFor="denumire">Denumire:</label>
                        <input className="form-control"
                               type="text" name="denumire" id="denumire" required
                               value={this.state.denumire} onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <label className="text-label" htmlFor="codDeBare">Cod de bare:</label>
                        <input className="form-control"
                               type="text" name="codDeBare" id="codDeBare" required
                               value={this.state.codDeBare} onChange={this.handleChange}/>
                    </div>

                    <div className="row">
                        <label className="text-label" htmlFor="pret">Preț:</label>
                        <input type="text" name="pret" id="pret" required className="form-control"
                               value={this.state.pret} onChange={this.handleChange}/>
                    </div>

                    <div className="row">
                        <label className="text-label" htmlFor="descriere">Descriere:</label>
                        <input type="text" name="descriere" id="descriere" required className="form-control"
                               value={this.state.descriere} onChange={this.handleChange}/>
                    </div>
                    {/*<div className="form-group" encType="multipart/form-data">*/}
                    {/*    <br/>*/}
                    {/*    <label className="text-label" htmlFor="src">Src imagine:</label>*/}
                    {/*    <label>Upload Your File </label>*/}
                    {/*    <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>*/}
                    {/*    /!*<img src={'data:image/jpeg;base64,'+ this.state.selectedFile}/>*!/*/}
                    {/*</div>*/}
                    {/*<div className="imgPreview">*/}
                    {/*    {$imagePreview}*/}
                    {/*</div>*/}

                    <div className="row">
                        <label className="text-label" htmlFor="adresa">Detalii: </label>
                        <textarea name="detalii" value={this.state.detalii} onChange={this.handleChange}
                                  className="form-control">
                                                </textarea>
                    </div>
                    <div className="row">
                        <label className="text-label" htmlFor="idCategorieProdus">Categorie produs: </label>
                        <textarea name="idCategorieProdus" value={this.state.idCategorieProdus} onChange={this.handleChange}
                                  className="form-control">
                                                </textarea>
                    </div>
                    <div className="row">
                        <label className="text-label" htmlFor="numeUtilizatorAdministrator">Nume utilizator administrator: </label>
                        <textarea name="numeUtilizatorAdministrator" value={this.state.numeUtilizatorAdministrator} onChange={this.handleChange}
                                  className="form-control">
                                                </textarea>
                    </div>
                    <div className="row">
                        <label className="text-label" htmlFor="cantitate">Cantitate în stoc: </label>
                        <textarea name="cantitate" value={this.state.cantitate} onChange={this.handleChange}
                                  className="form-control">
                                                </textarea>
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