import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import RegisterPage from './components/RegisterPage';
import AppRouter, { history } from './routers/AppRouter';
import NotFoundPage from './components/NotFoundPage';
import LoadingPage from './components/LoadingPage';

// let hasRendered = false;
// const renderApp = () => {
//   if(!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

ReactDOM.render(<AppRouter />, document.getElementById('app'));

// renderApp();

const jsx = (
  <AppRouter/>
);