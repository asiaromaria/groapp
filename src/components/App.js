import React, { Component } from 'react';
import Login from './Login/Login';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <Login />
            </div>
         );
    }
}
 
export default App;