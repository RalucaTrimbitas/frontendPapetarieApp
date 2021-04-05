

import React, {Component} from "react";


class IstoricComenziClient extends Component {

    render() {
        document.body.classList = "";
        document.body.classList.add("background-panou");
    return (
        <React.Fragment>
                    <main className="col-md-12 col-xs-11">
                        <div className="card card-panou" style={{marginTop: "80px", marginBottom: "150px"}}>
                            <div className="card-header text-center" id="card-client">Istoric comenzi</div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0" id="card-text">
                                    <p className="mb-0 ">
                                        <strong>Livrare</strong>
                                    </p>
                                    <br></br>

                                    <p className="mb-0">
                                        Nu ai plasat încă nici o comandă.
                                    </p>
                                    <br></br>


                                </blockquote>
                            </div>
                        </div>
                    </main>
        </React.Fragment>
    )
    }
}
export default IstoricComenziClient;