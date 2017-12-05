import React from 'react';
import axios from 'axios';

class RegisterPage extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      email: '',
      password: '',
      verifyPassword: '',
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

  onVerifyPasswordChange = (e) => {
    const verifyPassword = e.target.value;
    this.setState(() => ({ verifyPassword }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if(! this.state.email || !this.state.password){
      this.setState(() => ({ error: 'Please provide a username and password' }));
    } else if ( this.state.password !== this.state.verifyPassword ) {
      this.setState(() => ({ error: 'Passwords do not match' }));
    } else {
      this.setState(() => ({ error: '' }));
      axios.post('http://localhost:3000/users', {
        email: `${this.state.email}`,
        password: `${this.state.password}`
      }).then((res) => {
        console.log(res);
        this.setState(() => ({ password: ''}))
      }).catch((e) => {
        console.log(e);
      });
    }
  }
  
  render() {
    return ( 
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
        <input 
          type="password"
          placeholder="Verify Password"
          onChange={this.onVerifyPasswordChange}
        />
        <button>Register</button> 
      </form>
    );
  };
};

export default RegisterPage;