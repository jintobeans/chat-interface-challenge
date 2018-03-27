import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import messages from './messages'
import usersTyping from './usersTyping'
import users from './users'

const reducer = combineReducers({ messages, usersTyping, users})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './messages'
export * from './usersTyping'
export * from './users'

