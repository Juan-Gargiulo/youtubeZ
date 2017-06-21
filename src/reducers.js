import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AppReducers from './components/App/AppReducers.js'

const App = combineReducers({
  app: AppReducers,
  router: routerReducer,
});

export default App;
