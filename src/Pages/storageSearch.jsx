import React from "react";
import logo from "../logo.svg";

const storageSearchPage = (props) => {
    const homeClick = () => {
        props.history.push("/");
    };

    const clickHandler = () => {

    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Storage Search</h1>
                <button onClick={homeClick}>Homepage</button>
            </header>

            <form>
                <div>
                    <label>Item_Name:</label>
                    <div>
                        <input type="Item_Name" className="form-control" id="Item_Name" placeholder="Enter Item_Name.." name="Item_Name"/>
                    </div>
                </div>
            </form>
            <button onClick={clickHandler}>search</button>
            <p><b>
                Storage Table
            </b></p>
        </div>
    )
};

export default storageSearchPage;