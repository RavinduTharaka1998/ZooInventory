import  React, {Component} from 'react';
import axios from 'axios';

import './css/adminHome.css';

export default  class adminHome extends  Component{


    constructor(props) {
        super(props);
        this.state = 
        {
            vqty:'',
            vreorderlevel:'',
            vresult:'',

            fqty:'',
            freorderlevel:'',
            fresult:'',

            mqty:'',
            mreorderlevel:'',
            mresult:'',

            fiqty:'',
            fireorderlevel:'',
            firesult:'',

            miqty:'',
            mireorderlevel:'',
            miresult:''
        };
    }

    componentDidMount() {
        const v = "Vegetables";
        axios.get('http://localhost:4000/zooInventory/vegetable/'+v)
            .then(res => {
                this.setState({
                    vqty: res.data.qty,
                    vreorderlevel: res.data.reorderlevel
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })

        const f = "Fruits";
        axios.get('http://localhost:4000/zooInventory/fruits/'+f)
            .then(res => {
                this.setState({
                    fqty: res.data.qty,
                    freorderlevel: res.data.reorderlevel
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })

        const m = "Meats";
        axios.get('http://localhost:4000/zooInventory/meats/'+m)
            .then(res => {
                this.setState({
                    mqty: res.data.qty,
                    mreorderlevel: res.data.reorderlevel
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })

        const fish = "Fish";
        axios.get('http://localhost:4000/zooInventory/fish/'+fish)
            .then(res => {
                this.setState({
                    fiqty: res.data.qty,
                    fireorderlevel: res.data.reorderlevel
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })

        const milk = "Milk";
        axios.get('http://localhost:4000/zooInventory/milk/'+fish)
            .then(res => {
                this.setState({
                    miqty: res.data.qty,
                    mireorderlevel: res.data.reorderlevel
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    
    render() {

        if (parseInt(this.state.vqty) <= parseInt(this.state.vreorderlevel)) {
            this.state.vresult = "Stock Level Low !!!";
        }
        if (parseInt(this.state.fqty) <= parseInt(this.state.freorderlevel)) {
            this.state.fresult = "Stock Level Low !!!";
        } 
        if (parseInt(this.state.mqty) <= parseInt(this.state.mreorderlevel)) {
            this.state.mresult = "Stock Level Low !!!";
        } 
        if (parseInt(this.state.fiqty) <= parseInt(this.state.fireorderlevel)) {
            this.state.firesult = "Stock Level Low !!!";
        } 
        if (parseInt(this.state.miqty) <= parseInt(this.state.mireorderlevel)) {
            this.state.miresult = "Stock Level Low !!!";
        } 
        
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

                        <hr/> 

                        <h4>Foods</h4>
                        <br/>
                        <div className='food'>
                            <div className='food-inner'>
                                <h5>Vegetables</h5>
                                <br/>
                                <center>
                                    <img src = "https://5.imimg.com/data5/SELLER/Default/2021/6/RF/KV/MA/47444804/fresh-vegitables-moq-5-kg--1000x1000.jpeg" width ="200"/>
                                </center>
                                <br/>
                                <h6>Quantity - {this.state.vqty}</h6>
                                <h5 style={{color:'red'}}>{this.state.vresult}</h5>
                            </div>
                            <div className='food-inner'>
                               <h6>Fruits</h6>
                               <br/>
                                <center>
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFxOV0WxXwzMmlCDR3QiHhEGT-K8KlvJXtg&usqp=CAU" width ="200"/>
                                </center>
                                <br/>
                                <h6>Quantity - {this.state.fqty}</h6>
                                <h5 style={{color:'red'}}>{this.state.fresult}</h5>
                            </div>
                            <div className='food-inner'>
                                <h6>Meats</h6>
                                <br/>
                                <center>
                                    <img src = "https://www.thehealthy.com/wp-content/uploads/2018/12/The-5-Best-Meats-to-Eat%E2%80%94and-2-to-Avoid-6.jpg" width ="200"/>
                                </center>
                                <br/>
                                <h6>Quantity - {this.state.mqty}</h6>
                                <h5 style={{color:'red'}}>{this.state.mresult}</h5>
                            </div>
                            <div className='food-inner'>
                                <h6>Fish</h6>
                                <br/>
                                <center>
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIg9UfYO2NM7d0sEzL274GCBsuWPY5eZP_gxqf_Y7jP1_ueyDEqbviwH_HhSp986wPleY&usqp=CAU" width ="215"/>
                                </center>
                                <br/>
                                <h6>Quantity - {this.state.fiqty}</h6>
                                <h5 style={{color:'red'}}>{this.state.firesult}</h5>
                            </div>
                            <div className='food-inner'>
                                <h6>Milk</h6>
                                <br/>
                                <center>
                                    <img src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_27/1744465/notmilk-mc-main-210706.jpg" width ="230"/>
                                </center>
                                <br/>
                                <h6>Quantity - {this.state.miqty}</h6>
                                <h5 style={{color:'red'}}>{this.state.miresult}</h5>
                            </div>
                        </div> 

                        <hr/>

                        <h4>Medicine</h4>

                        <div>
                            
                        </div> 
                        <hr/>
                        </div>
                </div>
        );
    }
}