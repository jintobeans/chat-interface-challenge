import history from '../history'

/**
 * ACTION TYPES
 */
const USER_TYPING = 'USER_TYPING'
const USER_NOT_TYPING = 'USER_NOT_TYPING'

/**
 * INITIAL STATE
 */
const defaultUsersTyping = []

/**
 * ACTION CREATORS
 */
const addUserTyping = user => ({ type: USER_TYPING, user })
const removeUserTyping = user => ({ type: USER_NOT_TYPING, user })


/**
 * THUNK CREATORS
 */

export const newUserTyping = (user) => {
  return dispatch =>
    dispatch(addUserTyping(user))
}

export const userNotTyping = (user) => {
  return dispatch =>
    dispatch(removeUserTyping(user))
}

/**
 * REDUCER
 */
export default function (state = defaultUsersTyping, action) {
  switch (action.type) {
    case USER_TYPING:
      return [...state, action.user]
    case USER_NOT_TYPING:
      return state.filter((user) => {
        return user !== action.user
      })
    default:
      return state
  }
}
