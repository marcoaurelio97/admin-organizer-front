import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);