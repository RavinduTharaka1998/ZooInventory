import  React, {Component} from 'react';
import axios from 'axios';
import FoodTableRow from './foodTableRow';
import './css/adminHome.css';

export default  class viewFood extends  Component{


    constructor(props) {
        super(props);

        this.state = {food : [], search:''};
        // this.onChangeItemNo = this.onChangeItemNo.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        // this.onChangeCategory = this.onChangeCategory.bind(this);
        // this.onChangeName = this.onChangeName.bind(this);
        // this.onChangeQuantity = this.onChangeQuantity.bind(this);
        // this.onChangeEDate = this.onChangeEDate.bind(this);
        // this.onChangeUPrice = this.onChangeUPrice.bind(this);
        // this.onChangeVender = this.onChangeVender.bind(this);
        // this.onChangeReOrderLevel = this.onChangeReOrderLevel.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        // this.state = {
        //     itemno: '',
        //     date: '',
        //     category:'',
        //     name:'',
        //     qty:'',
        //     edate:'',
        //     uprice:'',
        //     vender:'',
        //     reorderlevel:''
        // }
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
    
    // onChangeItemNo(e){
    //     this.setState( {
    //         itemno: e.target.value
    //     });
    // }
    // onChangeDate(e){
    //     this.setState( {
    //         date: e.target.value
    //     });
    // }
    // onChangeCategory(e){
    //     this.setState( {
    //         category: e.target.value
    //     });
    // }
    // onChangeName(e){
    //     this.setState( {
    //         name: e.target.value
    //     });
    // }
    // onChangeQuantity(e){
    //     this.setState( {
    //         qty: e.target.value
    //     });
    // }
    // onChangeEDate(e){
    //     this.setState( {
    //         edate: e.target.value
    //     });
    // }
    // onChangeUPrice(e){
    //     this.setState( {
    //         uprice: e.target.value
    //     });
    // }
    // onChangeVender(e){
    //     this.setState( {
    //         vender: e.target.value
    //     });
    // }
    // onChangeReOrderLevel(e){
    //     this.setState( {
    //         reorderlevel: e.target.value
    //     });
    // }
    // onSubmit(e){
    //     e.preventDefault();
    //     const obj = {
    //         itemno : this.state.itemno,
    //         date : this.state.date,
    //         category : this.state.category,
    //         name : this.state.name,
    //         qty : this.state.qty,
    //         edate : this.state.edate,
    //         uprice : this.state.uprice,
    //         vender : this.state.vender,
    //         reorderlevel : this.state.reorderlevel
    //     };

       
       
    //                     axios.post('http://localhost:5000/zooInventory/addfood',obj)
    //                     .then(res => {
    //                         alert("Food Add Successfully");
    //                         this.setState({
    //                             itemno: '',
    //                             date: '',
    //                             category:'',
    //                             name:'',
    //                             qty:'',
    //                             edate:'',
    //                             uprice:'',
    //                             vender:'',
    //                             reorderlevel:''
                    
    //                         })
    //                         console.log(res.data)});
    //                     // this.props.history.push('/signIn');
    //                     window.location.replace('/viewFood');
                    
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
                            <h2 className= 'tittle'>Foods</h2>
                            <h6>Welcome to your food</h6>
                            <a href = "/addFood" className='btn btn-dark'>Go Back</a>
                        </div>
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