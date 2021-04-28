import React, {Component} from "react";

class AdreseClient extends Component {
    constructor() {
        super();
        this.state = {
            numeUtilizator: "",
            nume: "",
            prenume: "",
            tip: "",
            email: "",
            numarTelefon: "",
            adresa: ""
        };

        fetch('http://localhost:8080/client/' + localStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => this.setState({
                numeUtilizator: data.numeUtilizator,
                parola: data.parola,
                nume: data.nume,
                prenume: data.prenume,
                tip: data.tip,
                email: data.email,
                numarTelefon: data.numarTelefon,
                adresa: data.adresa
            }))
        this.handleChange = this.handleChange.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
    }

    doSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.selectedOption)
        const payload = {
            numeUtilizator: this.state.numeUtilizator,
            parola: this.state.parola,
            nume: this.state.nume,
            prenume: this.state.prenume,
            tip: this.state.tip,
            email: this.state.email,
            numarTelefon: this.state.numarTelefon,
            adresa: this.state.adresa
        }

        fetch('http://localhost:8080/client', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Modificat")
                    this.setState({
                        numeUtilizator: "",
                        parola: this.state.parola,
                        nume: "",
                        prenume: "",
                        tip: "",
                        email: "",
                        numarTelefon: "",
                        adresa: ""
                    })
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

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        return (
            <React.Fragment>
                <main className="col-md-10 col-xs-11">
                    <div className="card card-panou" style={{marginTop: "80px", marginBottom: "60px"}}>
                        <div className="card-header text-center" id="card-client">Actualizare date personale</div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0" id="card-text">
                                <br/>
                                <p className="mb-0">
                                    Pentru actualizarea datelor vă rugăm să completați casuța corespunzătoare câmpului
                                    pe care doriți sa îl modificați, iar apoi apăsați butonul "Salvează".
                                </p>
                                <br/>
                            </blockquote>
                            <form onSubmit={this.doSubmit} className="contact-form">
                                <div className="form-group">
                                    <label className="text-label" htmlFor="numeUtilizator">Nume utilizator:</label>
                                    <input className="form-control"
                                           type="text" name="numeUtilizator" id="numeUtilizator" required
                                           value={this.state.numeUtilizator} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="text-label" htmlFor="nume">Nume:</label>
                                    <input type="text" name="nume" id="nume" required className="form-control"
                                           value={this.state.nume} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="text-label" htmlFor="prenume">Prenume:</label>
                                    <input type="text" name="prenume" id="prenume" required className="form-control"
                                           value={this.state.prenume} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="text-label">Tip:</label>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="PERSOANA_FIZICA"
                                                name="tip"
                                                checked={this.state.selectedOption === "PERSOANA_FIZICA"}
                                                onChange={this.handleChange}
                                            />
                                            PERSOANĂ FIZICĂ
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="PERSOANA_JURIDICA"
                                                name="tip"
                                                checked={this.state.selectedOption === "PERSOANA_JURIDICA"}
                                                onChange={this.handleChange}
                                            />
                                            PERSOANĂ JURIDICĂ
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="text-label" htmlFor="numarTelefon">Numar telefon:</label>
                                    <textarea type="text" name="numarTelefon" id="numarTelefon" required
                                              className="form-control"
                                              value={this.state.numarTelefon} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label className="text-label" htmlFor="adresa">Adresa: </label>
                                    <textarea name="adresa" value={this.state.adresa} onChange={this.handleChange}
                                              className="form-control">
                                                </textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn order float-right"
                                    onClick={this.doSubmit}
                                >
                                    Salvează
                                </button>

                            </form>
                            {/*</div>*/}
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}

export default AdreseClient;