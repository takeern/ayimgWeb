import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import app from './reducer.js'

const rootReducer = combineReducers({
  app,
  //...
})



export default (history, preloadedState) => {
  return createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
    )
  )
}
