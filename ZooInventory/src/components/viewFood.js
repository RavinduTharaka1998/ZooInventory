import  React, {Component} from 'react';
import axios from 'axios';
import FoodTableRow from './foodTableRow';
import './css/adminHome.css';

export default  class viewFood extends  Component{


    constructor(props) {
        super(props);

        this.state = {food : [], searchkey: ''};

        this.onChangeSearchFood = this.onChangeSearchFood.bind(this);
        
    
    }

    onChangeSearchFood(e){
        this.setState( {
            searchkey: e.target.value
        });
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/zooInventory/food/')
            .then(response => {
                this.setState({food : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.food.map(function (object, i){
            return <FoodTableRow obj = {object} key = {i}/>;
        });
        
    }
    
    

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <br/>
                        <center>
                            <h5 style={{fontWeight:'bold',color:'#edca2f'}}>INVENTORY DASHBOARD</h5>
                        </center>
                        <br/>
                        <a href = "">Admin Home Panel</a>
                        <a href = "/">Inventory Admin Home</a>
                        <a href = "/addFood">Add Foods</a>
                        <a href = "/addMedicine">Add Medicine</a>
                        <a href = "/addEquipment">Add Equipment</a>
                        <a href = "/">Suppliers</a>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Foods</h2>
                            <h6>Welcome to your food</h6>
                            <a href = "/addFood" className='btn btn-dark'>Go Back</a>
                        </div>

                        <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.searchkey} onChange = {this.onChangeSearchFood} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/searchFood/"+this.state.searchkey} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                        </from>
                       
                        <h3 align="center">Food History</h3>
                        <hr/>
                        
                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    <th>Item No</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Expire Date</th>
                                    <th>Unit Price</th>
                                    <th>Vendor</th>
                                    <th>Re Order Level</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>
                        

                            
                        <hr/>  
                        <hr/>
                        </div>
                </div>
        );
    }
}