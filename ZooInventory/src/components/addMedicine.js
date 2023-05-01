import  React, {Component} from 'react';
import axios from 'axios';

import './css/adminHome.css';

export default  class addMedicine extends  Component{


    constructor(props) {
        super(props);

        this.onChangeItemNo = this.onChangeItemNo.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeEDate = this.onChangeEDate.bind(this);
        this.onChangeUPrice = this.onChangeUPrice.bind(this);
        this.onChangeVender = this.onChangeVender.bind(this);
        this.onChangeReOrderLevel = this.onChangeReOrderLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemno: '',
            date: '',
            name:'',
            qty:'',
            edate:'',
            uprice:'',
            vender:'',
            reorderlevel:''
        }
    }
    
    onChangeItemNo(e){
        this.setState( {
            itemno: e.target.value
        });
    }
    onChangeDate(e){
        this.setState( {
            date: e.target.value
        });
    }
    onChangeName(e){
        this.setState( {
            name: e.target.value
        });
    }
    onChangeQuantity(e){
        this.setState( {
            qty: e.target.value
        });
    }
    onChangeEDate(e){
        this.setState( {
            edate: e.target.value
        });
    }
    onChangeUPrice(e){
        this.setState( {
            uprice: e.target.value
        });
    }
    onChangeVender(e){
        this.setState( {
            vender: e.target.value
        });
    }
    onChangeReOrderLevel(e){
        this.setState( {
            reorderlevel: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            itemno : this.state.itemno,
            date : this.state.date,
            category : this.state.category,
            name : this.state.name,
            qty : this.state.qty,
            edate : this.state.edate,
            uprice : this.state.uprice,
            vender : this.state.vender,
            reorderlevel : this.state.reorderlevel
        };

       
       
                        axios.post('http://localhost:4000/zooInventory/addmedicine',obj)
                        .then(res => {
                            alert("Medicine Add Successfully");
                            this.setState({
                                itemno: '',
                                date: '',
                                name:'',
                                qty:'',
                                edate:'',
                                uprice:'',
                                vender:'',
                                reorderlevel:''
                    
                            })
                            console.log(res.data)});
                        // this.props.history.push('/signIn');
                        window.location.replace('/viewMedicine');
                    
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
                        <a href = "/">Admin Home Panel</a>
                        <a href = "/addFood">Add Foods</a>
                        <a href = "/addMedicine">Add Medicine</a>
                        <a href = "/addEquipment">Add Equipment</a>
                        <a href = "/">Suppliers</a>
                    </div>

                    <div class="content">
                        <div className = "top-tittle-bar">
                            <h2 className= 'tittle'>Medicine</h2>
                            <h6>Welcome to your medicine</h6>
                            <a href = "/viewMedicine" className='btn btn-dark'>View Current Medicine</a>
                        </div>
                        <br/>
                        <h3 align="center">Add New Medicine</h3>
                        <hr/>
                        <form onSubmit={this.onSubmit} style={{width:'50%',marginLeft:320}}>
                            <div className="form-group">
                                <label>Item No :</label>
                                <input type ="number" required  className="form-control" value={this.state.itemno} onChange = {this.onChangeItemNo}/>
                            </div>
                            <div className="form-group">
                                <label>Date :</label>
                                <input type ="date" required className="form-control" value={this.state.date} onChange = {this.onChangeDate}/>
                            </div>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type ="text"  value={this.state.name} onChange = {this.onChangeName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Quantity :</label>
                                <input type ="number" min = "1" value={this.state.qty} onChange = {this.onChangeQuantity} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Expire Date :</label>
                                <input type ="date"  value={this.state.edate} onChange = {this.onChangeEDate} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Unit Price :</label>
                                <input type ="number" min = "1" value={this.state.uprice} onChange = {this.onChangeUPrice} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Vendor :</label>
                                <input type ="text"  value={this.state.vender} onChange = {this.onChangeVender} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Re-Order Level :</label>
                                <input type ="number" min = "50" value={this.state.reorderlevel} onChange = {this.onChangeReOrderLevel} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Add Medicine" className="btn btn-dark"/>
                            </div>
                        </form>
                        

                            
                        <hr/>  
                        <br/>
                        <hr/>
                        </div>
                </div>
        );
    }
}