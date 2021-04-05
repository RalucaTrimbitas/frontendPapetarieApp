import React, {Component} from "react";

class SetariContClient extends Component {

    constructor() {
        super();
        this.state = {
            numeUtilizator: "",
            email:"",
            parola: "",
            parolaNoua: "",
            confirmParolaNoua: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = () => {
        //Call the server
        console.log("Submitted");
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        document.body.classList = "";
        document.body.classList.add("background-panou");
    return (
        <React.Fragment>
                    <main className="col-md-12 col-xs-11">
                        <div className="card card-panou" style={{marginTop: "80px",  marginBottom: "70px"}}>
                            <div className="card-header text-center" id="card-client">Setări cont</div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0" id="card-text">
                                    <p className="mb-0 ">
                                        <h4>Schimbare parolă</h4>
                                    </p>
                                    <br></br>

                                    {/*<p className="mb-0">*/}
                                    {/*    Timpul de livrare al comenzii va fi confirmat in functie de disponibilitate*/}
                                    {/*    de catre un operator prin e-mail si/sau telefonic.*/}
                                    {/*</p>*/}

                                </blockquote>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label className="text-label">Nume utilizator</label>
                                        <input
                                            type="text"
                                            name="numeUtilizator"
                                            className="form-control"
                                            placeholder="Nume utilizator"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-label">Parolă actuală</label>
                                        <input
                                            type="password"
                                            name="parola"
                                            className="form-control"
                                            placeholder="Parolă"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-label">Parolă nouă</label>
                                        <input
                                            type="password"
                                            name="parolaNoua"
                                            className="form-control"
                                            placeholder="Parolă nouă"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-label">Comfirmă parola nouă</label>
                                        <input
                                            type="password"
                                            name="confirmParolaNoua"
                                            className="form-control"
                                            placeholder="Confirmă parola nouă"
                                            onChange={this.handleChange}
                                        />
                                        <br></br>
                                        <button
                                            type="submit"
                                            className="btn btn-contact float-right"
                                            onClick={this.doSubmit}
                                        >
                                            Salvează modificările
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
        </React.Fragment>
    )}
}
export default SetariContClient;