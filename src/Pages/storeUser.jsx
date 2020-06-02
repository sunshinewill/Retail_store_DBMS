import React from "react";
import logo from "../logo.svg";

const storeUserPage = (props) => {
    const homeClick = () => {
        props.history.push("/");
    };
    const customerClick = () => {
        props.history.push("/customerOperation");
    };
    const storageClick = () => {
        props.history.push("/storageSearch");
    };
    const supplierClick = () => {
        props.history.push("/supplierOperation");
    };
    const transClick = () => {
        props.history.push("/transactionSearch");
    };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Store User Interface</h1>
                    <button onClick={homeClick}>Homepage</button>
                </header>
                <p className="App-intro">

                </p>

                <button onClick={customerClick}>Customer</button>
                <button onClick={storageClick}>Storage</button>
                <button onClick={supplierClick}>Supplier</button>
                <button onClick={transClick}>Transaction</button>
            </div>
        )
};

export default storeUserPage;