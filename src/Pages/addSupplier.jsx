import React, {Component} from "react";
import logo from "../logo.svg";

class addSupplierPage extends Component{
    constructor(props){
        super(props);
        this.state={
            supplier: null,
            selectedID:null,
            selectedName: null,
            selectedAddress: null,
            selectedNumber: null,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/supplier/`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                selectedID: this.state.selectedID,
                selectedName: this.state.selectedName,
                selectedAddress: this.state.selectedAddress,
                selectedNumber: this.state.selectedNumber,
            })
        })
            .then(res => res.json())
            .then((res) => this.setState({supplier: res}));
    }

    homeClick = () => {
        this.props.history.push("/customerOperation");
    };

    clickHandler = () => {
        this.setState({supplier: this.state.supplier});
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

                </form>

                <button onClick={this.clickHandler}>Add</button>

            </div>
        )
    }
}

export default addSupplierPage;