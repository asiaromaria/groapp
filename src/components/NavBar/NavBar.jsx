import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import axios from "axios";

const NavBar = ({ user, logoutUser }) => {



  return (
    <div>
      {user ? (
        <ul>
          {/* <h4>Welcome {user.username}</h4> */}
          <h4>Welcome {user.name}</h4>
          <li>
            <Link to="/">Home</Link>
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
            <Link to="/" onSubmit={logoutUser}>Logout</Link>
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
