import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

//Pages
import MainPage from "./Pages";
import storeUserPage from "./Pages/storeUser";
import customerUserPage from "./Pages/customerUser";
import updatePersonInfoPage from "./Pages/updatePersonInfo";
import customerOperationPage from "./Pages/customerOperation";
import addCustomerPage from "./Pages/addCustomer";
import addSupplierPage from "./Pages/addSupplier";
import supplierOperationPage from "./Pages/supplierOperation";
import storageSearchPage from "./Pages/storageSearch";
import transactionSearchPage from "./Pages/transactionSearch";
import NotFoundPage from "./Pages/404";



class app extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/storeUser" component={storeUserPage}/>
                        <Route exact path="/updatePersonInfo" component={updatePersonInfoPage}/>
                        <Route exact path="/customerUser" component={customerUserPage}/>
                        <Route exact path="/addCustomer" component={addCustomerPage}/>
                        <Route exact path="/customerOperation" component={customerOperationPage}/>
                        <Route exact path="/addSupplier" component={addSupplierPage}/>
                        <Route exact path="/supplierOperation" component={supplierOperationPage}/>
                        <Route exact path="/storageSearch" component={storageSearchPage}/>
                        <Route exact path="/transactionSearch" component={transactionSearchPage}/>
                        <Route exact path="/404" component={NotFoundPage}/>
                        <Redirect to="/404" />
                    </Switch>
                </Router>
            </div>
        );
    }
  }

export default app;



