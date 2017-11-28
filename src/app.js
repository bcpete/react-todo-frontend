import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import RegisterPage from './components/RegisterPage';
import AppRouter from './routers/AppRouter';
import NotFoundPage from './components/NotFoundPage';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
