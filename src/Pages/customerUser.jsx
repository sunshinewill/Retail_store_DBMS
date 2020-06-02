import React, {Component} from "react";
import logo from "../logo.svg";
import {Table} from 'antd';


class customerUserPage extends Component{
    constructor(props){
        super(props);
        this.state={
            customers:null,
            items: null,
            purchases: null,
            showInfoTable: false,
            showItemTable: false,
            showPurchasesTable: false,
            selectedItemId: null,
            selectedBillNo: null,
        }
    }

    callAPI(){
            fetch("http://localhost:8000/customers",{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res =>res.json())
            .then((res) => this.setState({customers: res}));
    }


    callItems(){
        fetch(`http://localhost:8000/items/${this.state.selectedItemId}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({items: res}));
    }

    callPurchases(){
        fetch(`http://localhost:8000/purchases/${this.state.selectedBillNo}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({purchases: res}));
    }

    componentWillMount() {
        this.callAPI();
    }


    homeClick = () => {
        this.props.history.push("/");
    };

    personInfoClick = () => {
        this.setState({customers: this.state.customers, showInfoTable: true, showItemTable:false, showPurchasesTable: false});
    };

    updateClick = () => {
        this.setState({showInfoTable: false});
        this.setState({showItemTable: false});
        this.setState({showPurchasesTable: false});
        this.props.history.push("/updatePersonInfo");
    };

    itemIdClick = () => {
        this.setState({showInfoTable: false});
        this.setState({showItemTable: true});
        this.setState({showPurchasesTable: false});
        this.callItems();

    };

    billNoClick = () => {
        this.setState({showInfoTable: false});
        this.setState({showItemTable: false});
        this.setState({showPurchasesTable: true});
        this.callPurchases();
    };

    handleInputChange = (event)=>{
        this.setState({selectedItemId: event.target.value});
    };

    handleInputChange2 = (event)=>{
        this.setState({selectedBillNo: event.target.value});
    };

    render(){
        const dataSource1 = this.state.customers? this.state.customers: [];
        const dataSource2 = this.state.items? this.state.items: [];
        const dataSource3 = this.state.purchases? this.state.purchases: [];

        const columns1 = [
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

        const columns2 = [
            {
                title: 'Item ID',
                dataIndex: 'item_id',
                key:'item_id',
            },
            {
                title: 'Item Name',
                dataIndex: 'item_name',
                key:'item_name',
            },
            {
                title: 'Brand',
                dataIndex: 'brand',
                key:'brand',
            },
            {
                title: 'Supplier ID',
                dataIndex: 'suppliers_id',
                key:'suppliers_id',
            },
            {
                title: 'Price',
                dataIndex: 'unit_price',
                key:'unit_price',
            },
        ];

        const columns3 = [
            {
                title: 'Bill Number',
                dataIndex: 'bill_number',
                key:'bill_number',
            },
            {
                title: 'Customer ID',
                dataIndex: 'customer_id',
                key:'customer_id',
            },
            {
                title: 'Price before tax',
                dataIndex: 'total_price_$',
                key:'total_price_$',
            },
            {
                title: 'Price after tax',
                dataIndex: 'tax_included_total',
                key:'tax_included_total',
            },
            {
                title: 'Transaction time',
                dataIndex: 'transction_time',
                key:'transaction_time',
            },
            {
                title: 'Store ID',
                dataIndex: 'store_id',
                key:'store_id',
            },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Customer User Interface</h1>
                    <button onClick={this.homeClick}>Homepage</button>
                </header>
                <p className="App-intro">
                </p>

                <button onClick={this.personInfoClick}>Personal Information</button>
                <button onClick={this.updateClick}>Update</button>

                <form>
                    <div>
                        <label>Item ID:</label>
                        <div>
                            <input type="Item_ID" onChange={this.handleInputChange} className="form-control" id="Item_ID" placeholder="Enter Item ID.." name="Item_ID"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.itemIdClick}>search</button>

                <form>
                    <div>
                        <label>Bill Number:</label>
                        <div>
                            <input type="Bill_Number" onChange={this.handleInputChange2} className="form-control" id="Bill_Number" placeholder="Enter Bill Number.." name="Bill_Number"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.billNoClick}>search</button>

                <div>
                    {this.state.showInfoTable && this.state.customers && <Table dataSource={dataSource1} columns={columns1}/>}
                    {this.state.showItemTable && this.state.items && <Table dataSource={dataSource2} columns={columns2}/>}
                    {this.state.showPurchasesTable && this.state.purchases && <Table dataSource={dataSource3} columns={columns3}/>}
                </div>
            </div>
        )
    }
}


export default customerUserPage;