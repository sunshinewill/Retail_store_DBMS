import React from "react";
import logo from "../logo.svg";

const MainPage = (props) => {
    const loginClick = () => {
        if(document.getElementById("ID").value === "1" && document.getElementById("pwd").value === "123456"){
            props.history.push("/storeUser");
        }
        else if(document.getElementById("ID").value === "2" && document.getElementById("pwd").value === "654321"){
            props.history.push("/customerUser");
        }
        else
            props.history.push("/404");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Retail Store Database Management System</h1>
            </header>
            <p className="App-intro">
                Home page
            </p>

            <form>
                <div>
                    <label>ID:</label>
                    <div>
                        <input type="ID" className="form-control" id="ID" placeholder="Your ID.." name="ID"/>
                    </div>
                </div>

                <div>
                    <label>Password:</label>
                    <div>
                        <input type="Password" className="form-control" id="pwd" placeholder="Your Password.."
                               name="pwd"/>
                    </div>
                </div>

            </form>
            <button onClick={loginClick}>Login</button>
        </div>
    );
};

export default MainPage;