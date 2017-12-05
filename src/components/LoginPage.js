import React from 'react';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      email: '',
      password: '',
      error: '',
    };
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if(! this.state.email || !this.state.password){
      this.setState(() => ({ error: 'Please provide a username and password' }));
    } else {
      this.setState(() => ({ error: '' }));
      console.log('login');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Email"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input 
            type="password"
            placeholder="Password"
            onChange={this.onPasswordChange}
          />
          <button>Register</button>
        </form>
      </div>
      );
  };
};

export default LoginPage