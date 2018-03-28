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
const addUserTyping = userTyping => ({ type: USER_TYPING, userTyping })
const removeUserTyping = userTyping => ({ type: USER_NOT_TYPING, userTyping })


/**
 * THUNK CREATORS
 */

export const newUserTyping = (userTyping) => {
  return dispatch =>
    dispatch(addUserTyping(userTyping))
}

export const userNotTyping = (userTyping) => {
  return dispatch =>
    dispatch(removeUserTyping(userTyping))
}

/**
 * REDUCER
 */
export default function (state = defaultUsersTyping, action) {
  switch (action.type) {
    case USER_TYPING:
      return [...state, action.userTyping]
    case USER_NOT_TYPING:
      return state.filter((user) => {
        return user.id !== action.userTyping.id
      })
    default:
      return state
  }
}
