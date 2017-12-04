import React from 'react';

export const LoginPage = () => (
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