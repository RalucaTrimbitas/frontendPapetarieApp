import React from "react";
const ContulMeu = () => {
    document.body.classList = "";
    // document.body.classList.add("background-panou");
    return (
        <React.Fragment>
            <div className="card card-panou" style={{marginTop: "80px", marginBottom: "100px"}}>
                <div className="card-header text-center">Contul meu</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0" id="card-text">
                        <p className="mb-0 ">
                            <strong><h4>Bună, {localStorage.getItem("name")}!</h4></strong>
                        </p>
                        <br/>

                        <p className="mb-0">
                            În panoul de control al contului tău poți să-ți vezi comenzile recente, să-ți administrezi adresele de livrare și de facturare și să-ți editezi parola și detaliile contului.
                        </p>
                        <br/>

                        <br/>
                    </blockquote>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContulMeu;