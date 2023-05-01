import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import adminHome from './components/adminHome';
import addFood from './components/addFood';
import addMedicine from './components/addMedicine';
import addEquipment from './components/addEquipment';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={adminHome}/>
                        <Route path='/addFood' component={addFood}/>
                        <Route path='/addMedicine' component={addMedicine}/>
                        <Route path='/addEquipment' component={addEquipment}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;