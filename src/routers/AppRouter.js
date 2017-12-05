import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import RegisterPage from '../components/RegisterPage';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddTodoPage from '../components/AddTodoPage';
import EditTodoPage from '../components/EditTodoPage';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/add" component={AddTodoPage} />
        <Route path="/edit/:id" component={EditTodoPage} />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;