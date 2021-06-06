import React, {Component} from "react";
import ReactPaginate from 'react-paginate';
import SearchBox from "../components/utils/searchBox";
import {paginate} from "../components/utils/paginate";
import {Button, Modal, Table} from "react-bootstrap";
import {FaCheck, FaCheckDouble,} from "react-icons/all";
export class VizualizareComenzi extends Component {

    constructor() {
        super();
        this.state = {
            comenzi: [],
            offset: 0,
            perPage: 7,
            searchQuery: "",
            currentPage: 1,
            orgtableData: [],
            tableData: [],
            show: false,
            comanda: [],
            totalComanda: 0,
            pageCount: 0,
            showModifyStatusModal: false,
            modifyStatusModalTitle: "",
            modifyStatusModalContent: "",
            modifyStatusPayload: {},
            message: "",
            showAlert: false
        }
        this.handlePageClick = this.handlePageClick.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    getData() {
        fetch('http://localhost:8080/comenzi-plasate', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem("jwt")
            }
        })
            .then(res => {
                res.json().then(json => {
                    const data = json;
                    let slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

                    this.setState({
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        orgtableData: json,
                        tableData: slice
                    })
                });
            })
    }

    componentDidMount() {
        this.getData()
    }

    closeModal = e => {
        this.setState({
            show: false,
            showModifyStatusModal: false,
        });

    };

    openModal() {
        this.setState({
            show: true
        });

    };

    closeAlert = () => {
        this.setState({showAlert: false})
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected + 1;
        console.log(selectedPage)
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });
    }

    loadMoreData() {
        const data = this.state.orgtableData;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        console.log(slice)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        })
    }

    handleSearch = query => {
        this.setState({searchQuery: query, currentPage: 1});
    }

    getPagedData = () => {
        const {
            searchQuery,
            orgtableData: allAccounts,
            currentPage,
            perPage
        } = this.state;

        let filtered = allAccounts;
        if (searchQuery)
            filtered = allAccounts.filter(account =>
                account.numeUtilizatorClient.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        const pagin = paginate(filtered, currentPage, perPage);

        return {tableData: pagin};
    }

    refreshPage() {
        window.location.reload(false);
    }

    viewIstoricComanda = (numarComanda, total) => {
        this.setState({
            show: true,
            totalComanda: total
        });
        fetch('http://localhost:8080/comanda-istoric/' + numarComanda, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem("jwt")
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({comanda: json});
                    });
                } else {
                    console.log("error")
                }
            })
    }

    handleClearSearch = query => {
        this.setState({searchQuery: "", currentPage: 1})
    }

    handleModifyStatus = payload => {
        fetch('http://localhost:8080/comenzi', {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-type': 'application/json',
                'Authorization' : 'Bearer ' + sessionStorage.getItem("jwt")
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        showAlert: true,
                        message: "Statusul comenzii a fost modificat cu succes."
                    })
                    this.closeModal()
                    this.getData()
                }
                else if(res.status === 417) {
                    res.text().then(text =>{
                        this.setState({
                            showAlert: true,
                            message: text + " Statusul comenzii rămâne nemodificat."
                        })
                    });
                }
                else if (res.status === 409) {
                    this.setState({
                        showAlert: true,
                        message: "Statusul a fost deja revizuit."
                    })
                    this.closeModal()
                }
                else {
                    this.setState({
                        showAlert: true,
                        message: "A apărut o eroare. Dacă persistă, vă rugăm să ne semnalați eroarea la adresa de email " +
                            "papetariadiana@gmail.com. Mulțumim!"
                    })
                    this.closeModal()
                }
            })
    }

    handleFinalizata = comanda => {
        const payload = {
            numarComanda: comanda.numarComanda,
            status: "FINALIZATA",
        }
        this.setState({
            showModifyStatusModal: true,
            modifyStatusModalTitle: "Modificare status: Comanda FINALIZATĂ",
            modifyStatusModalContent: "Doriți să modificați statusul comenzii?",
            modifyStatusPayload: payload
        })
    }

    handleRidicata = comanda => {
        const payload = {
            numarComanda: comanda.numarComanda,
            status: "RIDICATA",
        }
        this.setState({
            showModifyStatusModal: true,
            modifyStatusModalTitle: "Modificare status: Comanda RIDICATĂ",
            modifyStatusModalContent: "Doriți să modificați statusul comenzii?",
            modifyStatusPayload: payload
        })
    }


    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        const {tableData} = this.getPagedData()

        return (
            <React.Fragment>
            <div className="container-fluid">
                <div className="table-filter">
                    <div className="row">
                        <div className="col-sm-12" style={{color: "gray"}}>
                        <span className="ml-4" style={{color: "black"}}>Nume de utilizator client:
                            <SearchBox placeholder="Caută" value={this.state.searchQuery} onChange={this.handleSearch}/></span>
                            <Button className="my-btn btn-cautare-tabel ml-2" type="button" onClick={this.handleClearSearch}>Golește căutarea</Button>
                        </div>
                    </div>
                </div>
                <Table responsive hover striped borderless className="text-nowrap">
                    <thead className="table-title text-white">
                    <tr>
                        <th></th>
                        <th>Nume utilizator client</th>
                        <th>Număr comandă</th>
                        <th>Data plasare comandă</th>
                        <th>Suma</th>
                        <th>TVA</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Acțiune</th>
                        <th>Detalii</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tableData.map((item1, index) => (
                            <tr key={item1.numarComanda}>
                                <td>{(this.state.currentPage - 1) * this.state.perPage + index + 1}</td>
                                <td> {item1.numeUtilizatorClient}</td>
                                <td>{item1.numarComanda}</td>
                                <td>{new Date(item1.dataPlasare).toLocaleDateString()}</td>
                                <td>{item1.suma.toFixed(2)} lei</td>
                                <td>{item1.tva.toFixed(2)} lei</td>
                                <td>{item1.total.toFixed(2)} lei</td>
                                {item1.status === "IN_PREGATIRE" ?
                                    <td className="text-danger">{item1.status}</td>
                                    : ""}
                                {item1.status === "FINALIZATA" ?
                                    <td className="text-primary">{item1.status}</td>
                                    : ""}
                                {item1.status === "RIDICATA" ?
                                    <td className="text-success">{item1.status}</td>
                                    : ""}
                                <td>
                                    <Button type="button" size={"sm"} className=" mr-2 btn-success" title="Finalizata" disabled={item1.status === "FINALIZATA" || item1.status === "RIDICATA"} onClick={(e) => this.handleFinalizata(item1, e)}><FaCheck/></Button>
                                    <Button type="button" size={"sm"} className="mr-2 btn-success" title="Ridicata" disabled={item1.status === "RIDICATA"} onClick={(e) => this.handleRidicata(item1, e)}><FaCheckDouble /></Button>
                                </td>
                                <td onClick={() => this.viewIstoricComanda(item1.numarComanda, item1.total)}
                                    className="td-view">Vezi
                                </td>
                                <Modal size="xl" scrollable={true} show={this.state.show}
                                       onHide={this.closeModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Detalii comandă:</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {this.state.comanda.map(item => {
                                            return (
                                                <div className="card mt-4 card-comanda" key={item.codDeBare}>
                                                    <div className="card-img">
                                                        <img src={'data:image/jpeg;base64,' + item.src} alt="ImagineProdus"
                                                             style={{backgroundImage: `url(${item.src})`}}/>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-6 d-inline">
                                                                <h4>{item.denumire}</h4>
                                                            </div>
                                                            <div className="col-sm-10">
                                                                <span>{item.pret} lei</span>
                                                            </div>
                                                            <div className="col-sm-10" id="dany">
                                                                <h6>CANTITATE: {item.cantitate} bucăți</h6>
                                                            </div>
                                                        </div>
                                                        <p>{item.descriere}</p>
                                                        <p>{item.detalii}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className="card-footer">
                                            <div className="jumbotron-fluid">
                                                <div className="row justify-content-between ">
                                                    <div className="col-sm-auto col-auto my-auto">
                                                        <img className="hvr-grow ml-4" id="logoDiana"
                                                             src="/poze/logoDiana.png" alt="logo"/>
                                                    </div>
                                                    <div className="col-auto my-auto ">
                                                        <h2 className="mb-0" style={{color: "#390c0c"}}>TOTAL
                                                            PLATĂ:</h2>
                                                    </div>
                                                    <div className="col-auto my-auto ml-auto">
                                                        <h4 className="display-3 ">{this.state.totalComanda.toFixed(2)} lei</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <Modal show={this.state.showModifyStatusModal} onHide={this.closeModal} centered>
                                    <Modal.Header>
                                        <Modal.Title>
                                            {this.state.modifyStatusModalTitle}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {this.state.modifyStatusModalContent}
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="btn-success" onClick={() => this.handleModifyStatus(this.state.modifyStatusPayload)}>Da</Button>
                                        <Button className="btn-danger" onClick={this.closeModal}>Nu</Button>
                                    </Modal.Footer>
                                </Modal>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <ReactPaginate
                    previousLabel={"← Înapoi"}
                    nextLabel={"Următor →"}
                    pageCount={this.state.pageCount}
                    onPageChange={this.handlePageClick}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
                <div className="ml-5">
                    <Button type="button" size={"sm"} className=" mr-2 btn-success" title="Finalizata" ><FaCheck/></Button>  - modificare status comandă: "FINALIZATĂ"
                    <br/>
                    <br/>
                    <Button type="button" size={"sm"} className="mr-2 btn-success" title="Ridicata" ><FaCheckDouble /></Button> - modificare status comandă: "RIDICATĂ"
                </div>
            </React.Fragment>
        )
    }
}

