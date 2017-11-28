import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import RegisterPage from '../components/RegisterPage';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddTodoPage from '../components/AddTodoPage';
import EditTodoPage from '../components/EditTodoPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={DashBoard}/>
        <Route path="/add" component={AddTodoPage} />
        <Route path="/edit/:id" component={EditTodoPage} />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;