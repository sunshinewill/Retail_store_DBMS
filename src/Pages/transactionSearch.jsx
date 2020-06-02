import React, {Component} from "react";
import logo from "../logo.svg";
import {Table} from "antd";

class transactionSearchPage extends Component{
    constructor(props){
        super(props);
        this.state={
            transactions:null,
            showBillTable: false,
            showComboTable:false,
            selectedBillNo: null,
            selectedStoreID: null,
            selectedItemID: null,
            comboTransaction:null,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/purchases/${this.state.selectedBillNo}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({transactions: res}));
    }

    callAPI2(){
        fetch(`http://localhost:8000/comboPurchase/${this.state.selectedStoreID}/${this.state.selectedItemID}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({comboTransaction: res}));
    }


    homeClick = () => {
        this.props.history.push("/");
    };

    billNoHandler = () => {
        this.setState({showBillTable: true});
        this.setState({showComboTable: false});
        this.callAPI();
    };

    handleBillInputChange = (event)=>{
        this.setState({selectedBillNo: event.target.value});
    };

    storeItemIDHandler = () => {
        this.setState({showBillTable: false});
        this.setState({showComboTable: true});
        this.callAPI2();

    };

    handleStoreInputChange = (event)=>{
        this.setState({selectedStoreID: event.target.value});
    };

    handleItemInputChange = (event)=>{
        this.setState({selectedItemID: event.target.value});
    };

    render(){
        const dataSource1 = this.state.transactions? this.state.transactions: [];
        const dataSource2 = this.state.comboTransaction? this.state.comboTransaction: [];

        const columns1 = [
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
                key:'transction_time',
            },
            {
                title: 'Store ID',
                dataIndex: 'store_id',
                key:'store_id',
            },
        ];


        const columns2 = [
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
                key:'transction_time',
            },
            {
                title: 'Store ID',
                dataIndex: 'store_id',
                key:'store_id',
            },
            {
                title: 'Item ID',
                dataIndex: 'item_id',
                key:'item_id',
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key:'quantity',
            },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Transaction Search</h1>
                    <button onClick={this.homeClick}>Homepage</button>
                </header>

                <form>
                    <div>
                        <label>Bill Number:</label>
                        <div>
                            <input type="Bill_Number"  onChange={this.handleBillInputChange} id="Bill_Number"
                                   placeholder="Enter Bill Number.." name="Bill_Number"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.billNoHandler}>search</button>

                <form>
                    <div>
                        <label>Store ID:</label>
                        <div>
                            <input type="Store_ID" onChange={this.handleStoreInputChange} className="form-control" id="Store_ID"
                                   placeholder="Enter Store ID.." name="Store_ID"/>
                        </div>
                    </div>

                    <div>
                        <label>Item ID:</label>
                        <div>
                            <input type="Item_ID" onChange={this.handleItemInputChange} className="form-control" id="Item_ID"
                                   placeholder="Enter Item ID.." name="Item_ID"/>
                        </div>
                    </div>
                </form>

                <button onClick={this.storeItemIDHandler}>search</button>

                <div>
                    {this.state.showBillTable && this.state.transactions && <Table dataSource={dataSource1} columns={columns1}/>}
                    {this.state.showComboTable && this.state.comboTransaction && <Table dataSource={dataSource2} columns={columns2}/>}
                </div>
            </div>
        )
    }
}

export default transactionSearchPage;