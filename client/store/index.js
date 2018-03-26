import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import messages from './messages'
import newMessage from './newMessage'
import usersTyping from './usersTyping'


const reducer = combineReducers({ messages, newMessage, usersTyping })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './messages'
export * from './newMessage'
export * from './usersTyping'

