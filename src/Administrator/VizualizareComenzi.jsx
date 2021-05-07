import React, {Component} from "react";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';

export class VizualizareComenzi extends Component{

    constructor() {
        super();
        this.state={
            comenzi:[]
        }
        fetch('http://localhost:8080/comenzi-plasate', {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type':'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json().then(json =>{
                        this.setState({comenzi: json});
                    });
                }
                else {
                    console.log("error")
                }
            })
    }

    render() {
        document.body.classList = "";
        document.body.classList.add("background-general");

        return (
            // <BootstrapTable
            //     hover striped borderless
            //     bootstrap4
            //     className="text-nowrap"
            //     keyField='id'
            //     data={products}
            //     columns={columns}
            //     defaultSorted={defaultSorted}
            //     headerClasses="bg-dark text-white"
            //     bodyClasses="text-center"
            //     pagination={pagination}
            // />
            <p>sad</p>
        )
    }
}
