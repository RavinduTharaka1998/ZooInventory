import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import adminHome from './components/adminHome';

import addFood from './components/addFood';
import viewFood from './components/viewFood';
import editFood from './components/editFood';

import addMedicine from './components/addMedicine';
import viewMedicine from './components/viewMedicine';
import editMedicine from './components/editMedicine';

import addEquipment from './components/addEquipment';
import viewEquipment from './components/viewEquipment';
import editEquipment from './components/editEquipment';

class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={adminHome}/>
                        <Route path='/addFood' component={addFood}/>
                        <Route path='/viewFood' component={viewFood}/>
                        <Route path='/editFood/:id' component={editFood}/>

                        <Route path='/addMedicine' component={addMedicine}/>
                        <Route path='/viewMedicine' component={viewMedicine}/>
                        <Route path='/editMedicine/:id' component={editMedicine}/>

                        <Route path='/addEquipment' component={addEquipment}/>
                        <Route path='/viewEquipment' component={viewEquipment}/>
                        <Route path='/editEquipment/:id' component={editEquipment}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;