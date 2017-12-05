import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>To-F*$k'n-Do</h1>
    <NavLink to="/dashboard" exact={true} activeClassName="is-active">DashBoard</NavLink>
    <NavLink to="/add" activeClassName="is-active">Add Todo</NavLink>
    <NavLink to="/edit/:id" activeClassName="is-active">Edit Todo</NavLink>
  </header>
);

export default Header;