import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './redux/store'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import Home from './comp/Home'

import './static/css/index.less'
const debug = require('debug')('app:index') 

const history = createBrowserHistory()
const store = createStore(history)

debug('comdin')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('testSsr')
)

// console.log(process.env.NODE_ENV)