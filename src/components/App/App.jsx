// import '../App/Styles.css';
import React, { useState, useEffect } from 'react';
import Savings from '../Savings/Savings';
import CreditHistory from '../CreditHistory/CreditHistory';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import logo from '../GRO.png';
import Register from '../Register/Register';
import { Navbar } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import axios from 'axios';
import Home from '../Home/PreLogin';
import Profile from '../Profile/Profile';



function App () {
    const [user, setUser] = useState( {
      name: String,

    });
    //const user=user
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [name, setName] = useState("");

    
    
    const loginUser = async () => {
      
      await axios.post('http://localhost:2000/api/auth', {
        email: email,
        password: password
      })
        .then((res) => {
          setUser(res)
            console.log(res.data)
            localStorage.setItem('token', res.data);
            window.location = '/dashboard';
        })
        .catch(error => console.log(error))
    }

    const logoutUser = async () => {
  
        await axios.delete('http://localhost:2000/api/accounts/:userId', jwtDecode)
        .then((res) => {
            // setUser(res)
            console.log( "user has been logged out.") 
            localStorage.clear('token', res.data);
            window.location.href = '/savings';
        })
        .catch(error => console.log(error))
    }



    useEffect(() => {
      const jwt = localStorage.getItem("token");
  
      try {
        const decoded = jwtDecode(jwt);
        setUser(decoded);
      } catch {}
    }, []); 
    

    return (
      <Router>

        <NavBar user={user} />
       
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} user={user} setUser={setUser} name={name} setName={setName}  />
              <Route path="/register" component={Register} user={user} setUser={setUser} name={name} setName={setName} />
              <Route path="/savings" component={Savings}/>
              {/* <Route path="/credithistory" component={CreditHistory}/> */}
              <Route path="/dashboard" component={Dashboard} user={user}/>
              <Route path="/login" component={Login} user={user} loginUser={loginUser} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
              
            </Switch>
              {/* <Redirect to='/notfound' /> */}
      </Router>

        // <Router>
        // <div className="App">
        // <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        // <header className="mb-auto">

        //     <h1>
        //     <img src={logo} className="img" alt="Logo" />
        //     </h1>
        //     {/* <nav class="nav nav-masthead justify-content-center float-md-end">
        //     <NavLink activeClassName="active" to="/dashboard">Home</NavLink><br />
        //     <NavLink activeClassName="active" to="/savings">Savings</NavLink><br />
        //     <NavLink activeClassName="active" to="/credithistory">Credit History</NavLink><br />
        //   </nav> */}
        //     </header>

        //   <Navbar />
        //     </div>
        // </div>
        // </Router>
    )
}
 
export default App;