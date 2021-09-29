import React, { Component } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <Login />
                <Register />
            </div>
         );
    }
}
 
export default App;