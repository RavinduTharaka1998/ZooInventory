import  React, {Component} from 'react';
import axios from 'axios';
// import OrderTableRow from './adminOrderTableRow';

import './css/adminHome.css';

export default  class adminHome extends  Component{


    constructor(props) {
        super(props);
        this.state = {orders : [], search:''};
        this.state.Station = this.props.match.params.id;

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    // componentDidMount() {
    //     // alert('email is ' +this.props.match.params.id);
    //     axios.get('http://localhost:4000/trainFoodAdmin/adminorders/'+this.props.match.params.id)
    //         .then(response => {
    //             // alert('Pass una')
    //             // alert('Data Tika :'+response.data)
    //             this.setState({orders : response.data});

    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }

    // tabRow(){
    //     return this.state.orders.map(function (object, i){
    //         return <OrderTableRow obj = {object} key = {i}/>;
    //     });
    //     // return <OrderTableRow obj={this.state.orders}/>
    // }

    render() {
        return(
                <div>
                    <div class="sidebar">
                        <br/>
                        <center>
                            <h5 style={{fontWeight:'bold',color:'#edca2f'}}>INVENTORY DASHBOARD</h5>
                        </center>
                        <br/>
                        <a href = "/">Admin Home Panel</a>
                        <a href = "/addFood">Add Foods</a>
                        <a href = "/addMedicine">Add Medicine</a>
                        <a href = "/addEquipment">Add Equipment</a>
                        <a href = "/">Suppliers</a>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>DASHBOARD</h2>
                            <h6>Welcome to your dashboard</h6>
                            {/* <from style ={{float:'right',display:'flex',gap:5}} onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type ="text" required value={this.state.search} onChange = {this.onChangeSearch} className="form-control"/>
                                </div>
                                <div className="form-group" style ={{float:'right'}}>
                                    <a href ={"/adminsearchorder/"+this.state.search+"/"+this.props.match.params.id} style ={{float:'right',background:'#313332',padding:7,borderRadius:5,color:'white',textDecoration:'none'}}>Search</a>
                                </div>
                            </from> */}
                        </div>
                        <br/><br/><br/>
                        <h3 align="center">Customers Orders</h3>
                       

                        <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th>FoodName</th>
                                    <th>TrianName</th>
                                    <th>Station</th>
                                    <th>QTY</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Phone Number</th>
                                    <th>eMail</th>
                                    <th>Payment</th>
                                    <th>deliverBy</th>
                                    <th colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.tabRow()} */}
                            </tbody>
                        </table>

                        <br/><br/><br/>       
                        <hr/>  
                        <br/>
                        <hr/>
                        </div>
                </div>
        );
    }
}