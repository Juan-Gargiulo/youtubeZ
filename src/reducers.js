import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import AppReducers from './components/App/AppReducers.js'

const App = combineReducers({
  app: AppReducers,
  routing,
});

export default App;
