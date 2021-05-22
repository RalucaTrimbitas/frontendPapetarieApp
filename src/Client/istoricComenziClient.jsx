import React, {Component} from "react";
import { Modal} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import {paginate} from "../components/utils/paginate";

class IstoricComenziClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            tableData: [],
            orgtableData: [],
            comanda: [],
            show: false,
            totalComanda: 0,
            offset: 0,
            perPage: 7,
            searchQuery: "",
            currentPage: 1,
            pageCount:0
        }

        this.handlePageClick = this.handlePageClick.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.viewIstoricComanda = this.viewIstoricComanda.bind(this)

    }

    getData() {
        fetch('http://localhost:8080/comenzi/' + localStorage.getItem("numeUtilizator"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        const data = json;
                        let slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

                        this.setState({
                            pageCount: Math.ceil(data.length / this.state.perPage),
                            orgtableData: json,
                            tableData: slice
                        })
                    });
                } else {
                    console.log("error")
                }
            })
    }

    componentDidMount() {
        this.getData();
    }

    closeModal = e => {
        this.setState({
            show: false
        });
    };

    openModal() {
        this.setState({
            show: true
        });

    };

    handlePageClick = (e) => {
        const selectedPage = e.selected + 1;
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
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        })
    }

    handleSearch = query => {
        this.setState({searchQuery: query,
            currentPage: 1});
    }

    getPagedData = () => {
        const {
            orgtableData: allData,
            currentPage,
            perPage
        } = this.state;

        let filtered = allData;
        // if (searchQuery)
        //     filtered = allData.filter(account =>
        //         account.numarComanda.startsWith(searchQuery)
        //     );
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
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json => {
                        this.setState({comanda: json});
                    });
                    // LOGIN PERSISTANCE
                } else {
                    console.log("error")
                }
            })
    }

    handleClearSearch = query => {
        this.setState({ searchQuery: "", currentPage: 1})
    }

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");
        console.log(this.state.comanda)

        const{tableData} = this.getPagedData()
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="table-responsive" style={{ backgroundImage: "none" }}>
                        <table className="table mt-5 ml-3">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-10">
                                        <h2>Istoric <b>comenzi</b></h2>
                                    </div>
                                    <div className="col-sm-2">
                                        <button onClick={this.refreshPage} className="btn" style={{color:"white"}}><i className="fa fa-refresh"/><span>Refresh</span></button>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="table-filter">*/}
                                {/*<div className="row">*/}
                                {/*    <div className="col-sm-12" style={{color: "gray"}}>*/}
                                {/*    <span>Nume de utilizator client:*/}
                                {/*        <SearchBox placeholder="Caută" value={this.state.searchQuery} onChange={this.handleSearch}/></span>*/}
                                {/*        <Button className="my-btn btn-cautare-tabel ml-2" type="button" onClick={this.handleClearSearch}>Golește căutarea</Button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Data plasare comandă</th>
                                    <th>Număr comandă</th>
                                    <th>Subtotal</th>
                                    <th>TVA</th>
                                    <th>Total</th>
                                    <th>Detalii</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.map((item1, index) => (
                                        <tr key={item1.numarComanda}>
                                            <td>{(this.state.currentPage - 1) * this.state.perPage + index + 1}</td>
                                            <td>{new Date(item1.dataPlasare).toLocaleDateString()}</td>
                                            <td>{item1.numarComanda}</td>
                                            <td>{item1.suma.toFixed(2)} lei</td>
                                            {/*<span className="status text-success">•</span>*/}
                                            <td>{item1.tva.toFixed(2)} lei</td>
                                            <td>{item1.total.toFixed(2)} lei</td>
                                            <td onClick={() => this.viewIstoricComanda(item1.numarComanda, item1.total)} className="td-view">Vezi</td>
                                            <Modal size="xl" scrollable={true} show={this.state.show} onHide={this.closeModal} >
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
                                                                        <div className="col-sm-10">
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
                                                                    <img className="hvr-grow ml-4" id="logoDiana" src="/poze/logoDiana.png" alt="logo"/>
                                                                </div>
                                                                <div className="col-auto my-auto ">
                                                                    <h2 className="mb-0" style={{color: "#390c0c"}}>TOTAL PLATĂ:</h2>
                                                                </div>
                                                                <div className="col-auto my-auto ml-auto">
                                                                    <h4 className="display-3 ">{this.state.totalComanda.toFixed(2)} lei</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                        </table>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default IstoricComenziClient;