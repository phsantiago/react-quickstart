import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from './modules/rootReducer';

export const history = createBrowserHistory()

export default createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

