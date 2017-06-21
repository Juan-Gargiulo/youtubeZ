import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App'
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'
import Search from './components/Search/Search'


export default (
  <Route exact path='/app' component={App}>
  	<Route path="/app/Login" component={Login} />
		<Route path="/app/search" component={Search} />
  </Route>
);


