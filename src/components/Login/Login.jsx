import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { Form } from 'react-bootstrap';

function Login() {


    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const submitHandler =(e) =>{
        e.preventDefault();
    };

    const loginUser = async () => {
        await axios.post('http://localhost:2000/api/auth',{

            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data);
            window.location = '/dashboard';
        })
        .catch(error => console.log(error))
    }


    return (
      <div className="Login">
        <h2>login</h2>
        <form onSubmit={submitHandler} className="Login-form">
          <Form.Group size="md" controlId="small">
            <Form.Label> Email: </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="md" controlId="small">
            <Form.Label> Password: </Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
            <button onClick={() => {loginUser();}}>Login </button>
        </form>
      </div>
    );
}


export default Login;