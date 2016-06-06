import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import {logger} from './middlewares'
import thunk from 'redux-thunk';

import App from './containers/app'
//let store = createStore(reducer,applyMiddleware(thunk))
let store = createStore(reducer,applyMiddleware(thunk,logger))

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
),document.getElementById('root'))
