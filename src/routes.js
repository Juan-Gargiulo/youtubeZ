import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App'
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'


export default (
  <Route path='/' component={App}>
    <Route path="/Login" component={Login} />
  </Route>
);
