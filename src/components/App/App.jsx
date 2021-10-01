import React, { Component } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PreLogin from '../Home/PreLogin';
import Savings from '../Savings/Savings';
import CreditHistory from '../CreditHistory/CreditHistory';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';


import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

function App () {
    return (
        <Router>
        <div className="App">
            <h1>
                Welcome to GRO! The journey to saving money and building/restoring your credit starts here.
            </h1>
            <NavLink activeClassName="active" to="/home">Home</NavLink><br />
            <NavLink activeClassName="active" to="/login">Login</NavLink><br />
            <NavLink activeClassName="active" to="/register">Register</NavLink><br />
            <NavLink activeClassName="active" to="/savings">Savings</NavLink><br />
            <NavLink activeClassName="active" to="/credithistory">Credit History</NavLink><br />

            <Switch>
            <Route exact path="/home" component={PreLogin}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/savings" component={Savings}/>
            <Route path="/credithistory" component={CreditHistory}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route component={NotFound} />
            </Switch>
        </div>
        </Router>
    )
}
 
export default App;