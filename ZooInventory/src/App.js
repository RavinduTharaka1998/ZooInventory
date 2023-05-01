import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import adminHome from './components/adminHome';

import addFood from './components/addFood';
import viewFood from './components/viewFood';

import addMedicine from './components/addMedicine';
import viewMedicine from './components/viewMedicine';

import addEquipment from './components/addEquipment';
import viewEquipment from './components/viewEquipment';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={adminHome}/>
                        <Route path='/addFood' component={addFood}/>
                        <Route path='/viewFood' component={viewFood}/>

                        <Route path='/addMedicine' component={addMedicine}/>
                        <Route path='/viewMedicine' component={viewMedicine}/>

                        <Route path='/addEquipment' component={addEquipment}/>
                        <Route path='/viewEquipment' component={viewEquipment}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;