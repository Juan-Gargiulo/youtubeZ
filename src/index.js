
//import { createDevTools } from 'redux-devtools'
//import LogMonitor from 'redux-devtools-log-monitor'
//import DockMonitor from 'redux-devtools-dock-monitor'

//libs
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, BrowserRouter } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';

//reducers
import AppReducers from './components/App/AppReducers'

//components
import App from './components/App/App'
import Search from './components/Search/Search'
import Login from './components/Login/Login'


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
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          {/*<IndexRoute component={Search}/>*/}
          <Route path="search" component={Search}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
      {/*<DevTools />*/}
    </div>
  </Provider>,
  document.getElementById('root')
)