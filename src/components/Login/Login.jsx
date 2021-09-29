import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        console.log(this.handleSubmit);
      }
    render() { 
        return (  
            <div>
                Login into your account:
            
            <form>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
    }
}
 
export default Login;


