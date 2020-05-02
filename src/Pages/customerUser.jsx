import React, {Component}from "react";
import logo from "../logo.svg";


class customerUserPage extends Component{
    constructor(props){
        super(props);
        this.state={
            customers:[]
        }
    }

    callAPI(){
            fetch("http://localhost:8000/customers")
            .then(res =>res.text())
            .then((res) => this.setState({customers: res}));
    }

    componentWillMount() {
        this.callAPI();
    }


    homeClick = () => {
        this.props.history.push("/");
    };

    personInfoClick = () => {


    };

    updateClick = () => {

    };

    itemIdClick = () => {

    };

    billNoClick = () => {

    };

    render(){
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
                        <label>Item_ID:</label>
                        <div>
                            <input type="Item_ID" className="form-control" id="Item_ID" placeholder="Enter Item_ID.." name="Item_ID"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.itemIdClick}>search</button>

                <form>
                    <div>
                        <label>Bill_Number:</label>
                        <div>
                            <input type="Bill_Number" className="form-control" id="Bill_Number" placeholder="Enter Bill_Number.." name="Bill_Number"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.billNoClick}>search</button>

                <h1>
                    {'I wanna show a result table here'}
                </h1>
            </div>
        )
    }

}

export default customerUserPage;