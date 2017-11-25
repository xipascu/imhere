import React, {Component} from 'react';

//email & password match to registered users
//once logged in, change button to logout

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    if (e.target) {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    }
  }


  render() {
    const {email, password} = this.state;
    return (
      <div>
        <form onSubmit = {this.handleFormSubmit}>        
          <label>
            Email Address: 
            <input type         = "email" 
                    name        = "email" 
                    value       = {email} 
                    onChange    = {this.onChange} 
                    placeholder = "sloppybobby@yahoo.com" />
          </label><br />      

          <label>
            Password:
            <input type         = "password" 
                    name        = "password" 
                    value       = {password} 
                    onChange    = {this.onChange} />
          </label><br />
          <input type="submit" value="submit" />
        </form>            
      </div>
    );
  }
}
export default Login;