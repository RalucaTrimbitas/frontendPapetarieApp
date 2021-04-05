import React, {Component} from "react";

class AdreseClient extends Component {

    constructor() {
        super();
        this.state = {
            numeUtilizator: "",
            adresa: ""
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
                            <div className="card card-panou" style={{marginTop: "80px", marginBottom: "60px"}}>
                                <div className="card-header text-center" id="card-client">Adrese</div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0" id="card-text">
                                        <br></br>

                                        <p className="mb-0">
                                            Livrarea comenzilor se face dar pe raza municipiului Blaj. Dacă doriți livrarea comenzii la domiciliu,
                                            completați mai jos adresa.
                                        </p>
                                        <br></br>

                                        <form className="contact-form">
                                            <div className="form-group">
                                                <label className="text-label">Adaugă o adresă</label>
                                                <textarea
                                                    row={5}
                                                    type="text"
                                                    name="adresa"
                                                    className="form-control"
                                                    placeholder="Adresă"
                                                    onChange={this.handleChange}
                                                ></textarea>
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
                                    </blockquote>
                                </div>
                            </div>
                        </main>

            </React.Fragment>
        )}
}
export default AdreseClient;