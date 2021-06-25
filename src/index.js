import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);