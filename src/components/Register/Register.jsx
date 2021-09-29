import React, { Component } from 'react';


class Register extends Component {
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
                Sign up and start saving and building credit today!
            
            <form>
            <label>
              First Name:
              <input type="text" name="first name" />
            </label>
            <label>
              Last Name:
              <input type="text" name="last name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <label>
              Date of Birth:
              <input type="text" name="birthday" />
            </label>
            <label>
              Social Security Number:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
    }
}
 
export default Register;


