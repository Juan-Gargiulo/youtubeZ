
//import { createDevTools } from 'redux-devtools'
//import LogMonitor from 'redux-devtools-log-monitor'
//import DockMonitor from 'redux-devtools-dock-monitor'

//libs
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';

//styles
import 'bootstrap/dist/css/bootstrap.css';
//reducers
import AppReducers from './components/App/AppReducers'
//Routes 
import AppRoutes from './routes.js'

const reducer = combineReducers({
  app: AppReducers,
  routing: routerReducer
})

/*const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)*/

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

//DevTools.instrument()
//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>,
  document.getElementById('root')
)