import React, {Component} from "react";
import logo from "../logo.svg";
import {Table} from "antd";

class supplierOperationPage extends Component{
    constructor(props){
        super(props);
        this.state={
            suppliers:null,
            showSupplierTable: false,
            selectedId: null,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/suppliers/${this.state.selectedId}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({suppliers: res}));
    }

    callDelete(){
        fetch(`http://localhost:8000/supplier/${this.state.selectedId}`,{
            method: 'DELETE',
        })
            .then(()=>{alert('success!')})
            .catch(()=>{alert('fail')});
    }

    homeClick = () => {
        this.props.history.push("/");
    };

    addClick = () => {
        this.props.history.push("/addSupplier");
    };

    deleteClick = () => {
        this.callDelete();

    };

    searchClick = () => {
        this.setState({showSupplierTable: true});
        this.callAPI();
    };

    handleInputChange = (event)=>{
        this.setState({selectedId: event.target.value});
    };

    render(){
        const dataSource = this.state.suppliers? this.state.suppliers: [];

        const columns = [
            {
                title: 'Supplier ID',
                dataIndex: 'supplier_id',
                key:'supplier_id',
            },
            {
                title: 'Supplier Name',
                dataIndex: 'supplier_name',
                key:'supplier_name',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key:'address',
            },
            {
                title: 'Contact Number',
                dataIndex: 'contact_number',
                key:'contact_number',
            },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Supplier Operation</h1>
                    <button onClick={this.homeClick}>Homepage</button>
                </header>

                <form>
                    <div>
                        <label>Supplier ID:</label>
                        <div>
                            <input type="Supplier_ID" onChange={this.handleInputChange} className="form-control" id="Supplier_ID" placeholder="Enter Supplier ID.." name="Supplier_ID"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.addClick}>add</button>
                <button onClick={this.deleteClick}>delete</button>
                <button onClick={this.searchClick}>search</button>
                <p><b>
                    Supplier Info Table
                </b></p>
                <div>
                    {this.state.showSupplierTable && this.state.suppliers && <Table dataSource={dataSource} columns={columns}/>}
                </div>
            </div>
        )
    }


}

export default supplierOperationPage;