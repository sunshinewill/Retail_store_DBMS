import React, {Component} from "react";
import logo from "../logo.svg";
import {Table} from "antd";

class customerOperationPage extends Component{
    constructor(props){
        super(props);
        this.state={
            customers:null,
            showInfoTable: false,
            selectedId: null,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/customers/${this.state.selectedId}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({customers: res}));
    }

    callDelete(){
        fetch(`http://localhost:8000/customer/${this.state.selectedId}`,{
            method: 'DELETE',
        })
            .then(()=>{alert('success!')})
            .catch(()=>{alert('fail')});
    }



    homeClick = () => {
        this.props.history.push("/");
    };

    addClick = () => {
        this.props.history.push("/addCustomer");
    };

    deleteClick = () => {
        this.callDelete();

    };

    searchClick = () => {
        this.setState({showInfoTable: true});
        this.callAPI();
    };

    handleInputChange = (event)=>{
        this.setState({selectedId: event.target.value});
    };

    render(){
        const dataSource = this.state.customers? this.state.customers: [];

        const columns = [
            {
                title: 'ID',
                dataIndex: 'customer_id',
                key:'customer_id',
            },
            {
                title: 'Name',
                dataIndex: 'customer_name',
                key:'customer_name',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key:'address',
            },
            {
                title: 'Number',
                dataIndex: 'contact_number',
                key:'contact_number',
            },
            {
                title: 'Email',
                dataIndex: 'customer_email',
                key:'customer_email',
            },
            {
                title: 'Total orders',
                dataIndex: 'total_orders',
                key:'total_orders',
            },
            {
                title: 'Prefer store id',
                dataIndex: 'prefer_store_id',
                key:'prefer_store_id',
            },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Customer Operation</h1>
                    <button onClick={this.homeClick}>Homepage</button>
                </header>

                <form>
                    <div>
                        <label>Customer ID:</label>
                        <div>
                            <input type="Customer_ID" onChange={this.handleInputChange} className="form-control" id="Customer_ID" placeholder="Enter Customer ID.." name="Customer_ID"/>
                        </div>
                    </div>

                </form>
                <button onClick={this.addClick}>add</button>
                <button onClick={this.deleteClick}>delete</button>
                <button onClick={this.searchClick}>search</button>
                <p><b>
                    Customer Table
                </b></p>
                <div>
                    {this.state.showInfoTable && this.state.customers && <Table dataSource={dataSource} columns={columns}/>}
                </div>
            </div>
        )
    }


}

export default customerOperationPage;