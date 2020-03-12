import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let middlewares = [thunk]

if (process.env.NODE_EN !== 'production') middlewares = [...middlewares, logger]

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
