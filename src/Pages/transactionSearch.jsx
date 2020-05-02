import React from "react";
import logo from "../logo.svg";

const transactionSearchPage = (props) => {
    const homeClick = () => {
        props.history.push("/");
    };

    const clickHandler1 = () => {

    };

    const clickHandler2 = () => {

    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Transaction Search</h1>
                <button onClick={homeClick}>Homepage</button>
            </header>

            <form>
                <div>
                    <label>Bill_Number:</label>
                    <div>
                        <input type="Bill_Number"  id="Bill_Number" placeholder="Enter Bill_Number.." name="Bill_Number"/>
                    </div>
                </div>
            </form>
            <button onClick={clickHandler1}>search</button>

            <form>
                <div>
                    <label>Store_ID:</label>
                    <div>
                        <input type="Store_ID" className="form-control" id="Store_ID" placeholder="Enter Store_ID.." name="Store_ID"/>
                    </div>
                </div>

                <div>
                    <label>Date:</label>
                    <div>
                        <input type="Date" className="form-control" id="date" placeholder="Enter Date.."
                               name="date"/>
                    </div>
                </div>
            </form>

            <button onClick={clickHandler2}>search</button>

        </div>
    )
};

export default transactionSearchPage;