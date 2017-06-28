import React from 'react';
//import { Route, IndexRoute } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import App from './components/App/App'
import Login from './components/Login/Login'
import Search from './components/Search/Search'


/*export default (
  <Route exact path='/app' component={App}>
  	<Route path="/app/Login" component={Login} />
		<Route path="/app/search" component={Search} />
  </Route>
);*/

const AppRoutes = props => 
  <App>
    <Switch>
      <Route exact path="/search" component={Search}/>
    </Switch>
  </App>


export default AppRoutes;


