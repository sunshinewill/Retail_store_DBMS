import React, {Component} from "react";
import logo from "../logo.svg";

class addCustomerPage extends Component{
    constructor(props){
        super(props);
        this.state={
            customers:null,
            selectedID:null,
            selectedName: null,
            selectedAddress: null,
            selectedNumber: null,
            selectedEmail: null,
            selectedTotal: null,
            selectedPrefer: null,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/customer/`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                selectedID: this.state.selectedID,
                selectedName: this.state.selectedName,
                selectedAddress: this.state.selectedAddress,
                selectedNumber: this.state.selectedNumber,
                selectedEmail: this.state.selectedEmail,
                selectedTotal: this.state.selectedTotal,
                selectedPrefer: this.state.selectedPrefer,
            })
        })
            .then(res => res.json())
            .then((res) => this.setState({customers: res}));
    }

    homeClick = () => {
        this.props.history.push("/customerOperation");
    };

    clickHandler = () => {
        this.setState({customers: this.state.customers});
        this.callAPI();

    };

    handleIDInputChange = (event)=>{
        this.setState({selectedID: event.target.value});
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

    handleOrderInputChange = (event)=>{
        this.setState({selectedTotal: event.target.value});
    };

    handlePreferInputChange = (event)=>{
        this.setState({selectedPrefer: event.target.value});
    };


    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Customer Operation</h1>
                    <button onClick={this.homeClick}>Main page</button>
                </header>
                <p className="App-intro">
                </p>


                <form>
                    <div>
                        <label>ID:</label>
                        <div>
                            <input type="customer_id" onChange={this.handleIDInputChange} className="form-control" id="customer_id" placeholder="Enter ID.." name="customer_id"/>
                        </div>
                    </div>
                    <div>
                        <label>Name:</label>
                        <div>
                            <input type="customer_name" onChange={this.handleNameInputChange} className="form-control" id="customer_name" placeholder="Enter Name.." name="customer_name"/>
                        </div>
                    </div>

                    <div>
                        <label>Address:</label>
                        <div>
                            <input type="address" onChange={this.handleAddressInputChange} className="form-control" id="address"
                                   placeholder="Enter address.." name="address"/>
                        </div>
                    </div>

                    <div>
                        <label>Number:</label>
                        <div>
                            <input type="customer_number" onChange={this.handleNumberInputChange} className="form-control" id="customer_number"
                                   placeholder="Enter number.." name="customer_number"/>
                        </div>
                    </div>

                    <div>
                        <label>Email:</label>
                        <div>
                            <input type="customer_email" onChange={this.handleEmailInputChange} className="form-control" id="customer_email"
                                   placeholder="Enter your email.." name="customer_email"/>
                        </div>
                    </div>

                    <div>
                        <label>Total orders:</label>
                        <div>
                            <input type="total_orders" onChange={this.handleOrderInputChange} className="form-control" placeholder="Enter total orders.." id="total_orders"  name="total_orders"/>
                        </div>
                    </div>

                    <div>
                        <label>Prefer store:</label>
                        <div>
                            <input type="prefer_store_id" onChange={this.handlePreferInputChange} className="form-control" placeholder="Enter prefer store.." id="prefer_store_id"  name="prefer_store_id"/>
                        </div>
                    </div>
                </form>

                <button onClick={this.clickHandler}>Add</button>

            </div>
        )
    }
}


export default addCustomerPage;