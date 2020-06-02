import React, {Component} from "react";
import logo from "../logo.svg";
import {Table} from "antd";

class storageSearchPage extends Component {
    constructor(props){
        super(props);
        this.state={
            inventory:null,
            showStorageTable: false,
            selectedId: null,
        }
    }

    callAPI(){
        fetch(`http://localhost:8000/inventory/${this.state.selectedId}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res =>res.json())
            .then((res) => this.setState({inventory: res}));
    }

    homeClick = () => {
        this.props.history.push("/");
    };

    clickHandler = () => {
        this.setState({showStorageTable: true});
        this.callAPI();
    };

    handleInputChange = (event)=>{
        this.setState({selectedId: event.target.value});
    };

    render(){
        const dataSource = this.state.inventory? this.state.inventory: [];

        const columns = [
            {
                title: 'Item ID',
                dataIndex: 'item_id',
                key:'item_id',
            },
            {
                title: 'Store ID',
                dataIndex: 'store_id',
                key:'store_id',
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key:'quantity',
            },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Storage Search</h1>
                    <button onClick={this.homeClick}>Homepage</button>
                </header>

                <form>
                    <div>
                        <label>Item ID:</label>
                        <div>
                            <input type="Item_Name" onChange={this.handleInputChange} className="form-control" id="Item_Name" placeholder="Enter Item ID.." name="Item_Name"/>
                        </div>
                    </div>
                </form>
                <button onClick={this.clickHandler}>search</button>
                <p><b>
                    Storage Table
                </b></p>
                <div>
                    {this.state.showStorageTable && this.state.inventory && <Table dataSource={dataSource} columns={columns}/>}
                </div>
            </div>
        )
    }

}

export default storageSearchPage;