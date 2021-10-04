import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PreLogin from '../Home/PreLogin';
import Savings from '../Savings/Savings';
import CreditHistory from '../CreditHistory/CreditHistory';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';




function App () {
    const [user, setUser] = useState(null);


    useEffect(() => {
      const jwt = localStorage.getItem("token");
  
      try {
        const decoded = jwtDecode(jwt);
        setUser(decoded);
      } catch {}
    }, []); 

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
            <Route 
            path="/login" 
            render={props => {
                if (!user) {
                    return <Redirect to="/register" />;
                } else {
                    return <Dashboard {...props} user={user} />
                }
            }} component={Login}
            />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/savings" component={Savings}/>
            <Route path="/credithistory" component={CreditHistory}/>
            <Route path="/register" 
            component={Register}/>
            <Route component={NotFound} />
            </Switch>
        </div>
        </Router>
    )
}
 
export default App;