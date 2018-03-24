import history from '../history'

/**
 * ACTION TYPES
 */
const GET_MESSAGES = 'GET_MESSAGES'

/**
 * INITIAL STATE
 */
const defaultMessages = [
  { id: 1,
    user: 'laura',
    text: 'hey',
  },
  {
    id: 2,
    user: 'rob',
    text: 'whats up'
  },
  {
    id: 3,
    user: 'laura',
    text: 'how was your weekend'
  }
]

/**
 * ACTION CREATORS
 */
const getMessages = messages => ({ type: GET_MESSAGES, messages })

/**
 * THUNK CREATORS
 */
export const getMessagesThunk = () => {
  return dispatch =>
    // axios.get('/api/messages')
    dispatch(getMessages())
}

/**
 * REDUCER
 */
export default function (state = defaultMessages, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return [...action.messages] || state
    default:
      return state
  }
}
