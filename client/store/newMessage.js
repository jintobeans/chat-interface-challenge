import history from '../history'

/**
 * ACTION TYPES
 */
const TYPE_NEW_MESSAGE = 'TYPE_NEW_MESSAGE'

/**
 * INITIAL STATE
 */
const defaultNewMessage =
  {
    id: 20,
    user: 1,
    text: 'This is a new message!'
  }

/**
 * ACTION CREATORS
 */
const typeNewMessage = newMessage => ({ type: TYPE_NEW_MESSAGE, newMessage })

/**
 * THUNK CREATORS
 */

export const newMessage = (message) => {
  return dispatch =>
    dispatch(typeNewMessage(message))
}

/**
 * REDUCER
 */
export default function (state = defaultNewMessage, action) {
  switch (action.type) {
    case TYPE_NEW_MESSAGE:
      return action.message || state
    default:
      return state
  }
}
