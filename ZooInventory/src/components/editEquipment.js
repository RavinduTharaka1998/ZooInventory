import  React, {Component} from 'react';
import axios from 'axios';

import './css/adminHome.css';

export default  class addFood extends  Component{


    constructor(props) {
        super(props);

        this.onChangeItemNo = this.onChangeItemNo.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeLastCheckDate = this.onChangeLastCheckDate.bind(this);
        this.onChangeNextCheckDate = this.onChangeNextCheckDate.bind(this);
        this.onChangeVender = this.onChangeVender.bind(this);
        this.onChangeMaintaner = this.onChangeMaintaner.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemno: '',
            date: '',
            category:'',
            name:'',
            qty:'',
            lastcheckdate:'',
            nextcheckdate:'',
            vender:'',
            maintaner:''
        }
    }

    componentDidMount() {
        //alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/zooInventory/editequipment/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    itemno: res.data.itemno,
                    date: res.data.date,
                    category: res.data.category,
                    name: res.data.name,
                    qty: res.data.qty,
                    lastcheckdate: res.data.lastcheckdate,
                    nextcheckdate: res.data.nextcheckdate,
                    vender: res.data.vender,
                    maintaner: res.data.maintaner
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
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
    onChangeCategory(e){
        this.setState( {
            category: e.target.value
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
    onChangeLastCheckDate(e){
        this.setState( {
            lastcheckdate: e.target.value
        });
    }
    onChangeNextCheckDate(e){
        this.setState( {
            nextcheckdate: e.target.value
        });
    }
    onChangeVender(e){
        this.setState( {
            vender: e.target.value
        });
    }
    onChangeMaintaner(e){
        this.setState( {
            maintaner: e.target.value
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
            lastcheckdate : this.state.lastcheckdate,
            nextcheckdate : this.state.nextcheckdate,
            vender : this.state.vender,
            maintaner : this.state.maintaner
        };

       
       
                        axios.post('http://localhost:4000/zooInventory/updateequipment/'+this.props.match.params.id,obj)
                        .then(res => {
                            alert("Equipment Update Successfully");
                            this.setState({
                                itemno: '',
                                date: '',
                                category:'',
                                name:'',
                                qty:'',
                                lastcheckdate:'',
                                nextcheckdate:'',
                                vender:'',
                                maintaner:''
                    
                            })
                            console.log(res.data)});
                        // this.props.history.push('/signIn');
                        window.location.replace('/viewEquipment');
                    
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
                            <h2 className= 'tittle'>Equipment</h2>
                            <h6>Welcome to your equipment</h6>
                            <a href = "/viewEquipment" className='btn btn-dark'>View Current Equipment</a>
                        </div>
                        <br/>
                        <h3 align="center">Edit Equipment</h3>
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
                                <label>Category :</label>
                                {/* <input type ="time" required className="form-control" value={this.state.deparcher} onChange = {this.onChangeDeparcherTime}/> */}
                                <select required className="form-control" value={this.state.category} onChange = {this.onChangeCategory}>
                                    <option>select category</option>
                                    <option value="Vegetables">Repair</option>
                                    <option value="Fruits">Maintance</option>
                                    <option value="Meats">Cleaning</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type ="text"  value={this.state.name} onChange = {this.onChangeName} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Quantity :</label>
                                <input type ="number"  min = "1" value={this.state.qty} onChange = {this.onChangeQuantity} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Last Check Date :</label>
                                <input type ="date"  value={this.state.lastcheckdate} onChange = {this.onChangeLastCheckDate} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Next Check Date :</label>
                                <input type ="date"  value={this.state.nextcheckdate} onChange = {this.onChangeNextCheckDate} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Vendor :</label>
                                <input type ="text"  value={this.state.vender} onChange = {this.onChangeVender} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Maintaner :</label>
                                <input type ="text"   value={this.state.maintaner} onChange = {this.onChangeMaintaner} className="form-control"/>
                            </div>
                        
                            <div className="form-group">
                                <input type = "submit" value = "Update Equipment" className="btn btn-success"/>
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