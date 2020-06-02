import React, {Component} from "react";
import logo from "../logo.svg";
import {Table} from "antd";


class updatePersonInfoPage extends Component{
    constructor(props){
        super(props);
        this.state={
            customers:null,
            selectedName: null,
            selectedAddress: null,
            selectedNumber: null,
            selectedEmail: null,
            showInfoTable: false,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/customerUpdate/${this.state.selectedName}/${this.state.selectedAddress}/${this.state.selectedNumber}/${this.state.selectedEmail}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({customers: res}));
    }


    homeClick = () => {
        this.props.history.push("/customerUser");
    };

    clickHandler = () => {
        this.setState({customers: this.state.customers, showInfoTable: true});
        this.callAPI();
    };


    handleNameInputChange = (event)=>{
        this.setState({selectedName: event.target.value});
    };

    handleAddressInputChange = (event)=>{
        this.setState({selectedAddress: event.target.value});
    };

    handleNumberInputChange = (event)=>{
        this.setState({selectedNumber: event.target.value});
    };

    handleEmailInputChange = (event)=>{
        this.setState({selectedEmail: event.target.value});
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
                    <h1 className="App-title">Customer User Interface</h1>
                    <button onClick={this.homeClick}>Main page</button>
                </header>
                <p className="App-intro">
                </p>



                <form>
                    <div>
                        <label>Name:</label>
                        <div>
                            <input type="customer_name" onChange={this.handleNameInputChange} className="form-control" id="customer_name" placeholder="Enter your Name.." name="customer_name"/>
                        </div>
                    </div>

                    <div>
                        <label>Address:</label>
                        <div>
                            <input type="address" onChange={this.handleAddressInputChange} className="form-control" id="address"
                                   placeholder="Enter your address.." name="address"/>
                        </div>
                    </div>

                    <div>
                        <label>Number:</label>
                        <div>
                            <input type="customer_number" onChange={this.handleNumberInputChange} className="form-control" id="customer_number"
                                   placeholder="Enter your number.." name="customer_number"/>
                        </div>
                    </div>

                    <div>
                        <label>Email:</label>
                        <div>
                            <input type="customer_email" onChange={this.handleEmailInputChange} className="form-control" id="customer_email"
                                   placeholder="Enter your email.." name="customer_email"/>
                        </div>
                    </div>
                </form>

                <button onClick={this.clickHandler}>Update</button>
                <div>
                    {this.state.showInfoTable && this.state.customers && <Table dataSource={dataSource} columns={columns}/>}
                </div>
            </div>
        )
    }
}


export default updatePersonInfoPage;