import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { Form } from 'react-bootstrap';

const Login = () => {

    const [user, setUser] = useState({})
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const submitHandler =(e) =>{
        e.preventDefault();

       
    };

    const loginUser = async () => {
      
      await axios.post('http://localhost:2000/api/auth', {
        email: email,
        password: password
      })
      console.log(localStorage.getItem("token"))
        .then((res) => {
          setUser(res)
            console.log(res.data, user)
            localStorage.setItem('token', res.data);
            window.location = '/dashboard';
        })
        .catch(error => console.log(error))
    }


    return (

      <div className="Login">
        <h2>login</h2>
        <form onSubmit={submitHandler} className="Login-form" onClick={() => loginUser()}>
          <Form.Group size="md" controlId="small">
            <Form.Label> Email: </Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => loginUser()}
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
              onClick={() => loginUser()}

            />
          </Form.Group>
            <button onClick={() => loginUser()}>Login </button>
        </form>
      </div>
    );
}


export default Login;