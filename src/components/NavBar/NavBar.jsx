import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import axios from "axios";

const NavBar = ({ user }) => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const logoutUser = async () => {
        console.log(localStorage.getItem("token"))
        localStorage.removeItem("token")
        console.log(localStorage.getItem("token"))
    }


  return (
    <div>
      {user ? (
        <ul>
          {/* <h4>Welcome {user.username}</h4> */}
          <h4>Welcome {user.name}!</h4>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/savings">Savings</Link>
          </li>
          <li>
            <Link to="/credithistory">Credit History</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/register" onClick={() => logoutUser()}>Logout</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
