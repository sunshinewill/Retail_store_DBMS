import React from "react";
import logo from "../logo.svg";

const supplierOperationPage = (props) => {
    const homeClick = () => {
        props.history.push("/");
    };

    const addClick = () => {

    };

    const searchClick = () => {

    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Supplier Operation</h1>
                <button onClick={homeClick}>Homepage</button>
            </header>

            <form>
                <div>
                    <label>Supplier_ID:</label>
                    <div>
                        <input type="Supplier_ID" className="form-control" id="Supplier_ID" placeholder="Enter Supplier_ID.." name="Supplier_ID"/>
                    </div>
                </div>
            </form>
            <button onClick={addClick}>add</button>
            <button onClick={searchClick}>search</button>
            <p><b>
                Supplier Info Table
            </b></p>

        </div>
    )
};

export default supplierOperationPage;