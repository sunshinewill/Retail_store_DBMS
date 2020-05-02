import React, {Component}from "react";
import { Table } from 'antd';
import logo from "../logo.svg";


class customerUserPage extends Component{
    constructor(props){
        super(props);
        this.state={
            customers: null,
            showPersonalInfo: false,
            selectedId: null,
        }
    }

    callAPI(){
            fetch("http://localhost:8000/customers", {
                headers: {
                'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => this.setState({customers: res}));
    }

    callAPI2(){
        fetch(`http://localhost:8000/customers/${this.state.selectedId}`, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
    }

    componentWillMount() {
       this.callAPI();
    }
 
    handleInputChange = (event) => {
        this.setState({selectedId: event.target.value});
    } 

    homeClick = () => {
        this.props.history.push("/");
    };

    personInfoClick = () => {
        this.setState({showPersonalInfo: true});
    };

    updateClick = () => {
        this.setState({showPersonalInfo: false});
    };

    itemIdClick = () => {
        this.callAPI2()
    };

    billNoClick = () => {

    };

    render(){
        console.log(this.state.customers)
        const dataSource = this.state.customers? this.state.customers: [];
          
          const columns = [
            {
              title: 'address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'number',
              dataIndex: 'contact_number',
              key: 'contact_number',
            },
            {
              title: 'email',
              dataIndex: 'customer_email',
              key: 'customer_email',
            },
            {
                title: 'customer_id',
                dataIndex: 'customer_id',
                key: 'customer_id',
            },
            {
                title: 'customer_name',
                dataIndex: 'customer_name',
                key: 'customer_name',
            },
            {
                title: 'prefer_store_id',
                dataIndex: 'prefer_store_id',
                key: 'prefer_store_id',
            },
            {
                title: 'total_orders',
                dataIndex: 'total_orders',
                key: 'total_orders',
            },
          ];
          
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
                            <input type="Item_ID" onChange={this.handleInputChange} className="form-control" id="Item_ID" placeholder="Enter Item_ID.." name="Item_ID"/>
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

                <div>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            
                {/* <h1>
                    { this.state.showPersonalInfo && this.state.customers[0] && this.state.customers }
                </h1> */}
            </div>
        )
    }

}

export default customerUserPage;