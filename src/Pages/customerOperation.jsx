import React from "react";
import logo from "../logo.svg";

const customerOperationPage = (props) => {
    const homeClick = () => {
        props.history.push("/");
    };

    const addClick = () => {

    };

    const deleteClick = () => {

    };

    const searchClick = () => {

    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Customer Operation</h1>
                <button onClick={homeClick}>Homepage</button>
            </header>

            <form>
                <div>
                <label>Customer_ID:</label>
                <div>
                    <input type="Customer_ID" className="form-control" id="Customer_ID" placeholder="Enter Customer_ID.." name="Customer_ID"/>
                </div>
            </div>

            </form>
            <button onClick={addClick}>add</button>
            <button onClick={deleteClick}>delete</button>
            <button onClick={searchClick}>search</button>
            <p><b>
                Customer Table
            </b></p>
        </div>
    )
};

export default customerOperationPage;