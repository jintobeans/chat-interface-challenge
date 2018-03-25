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
    user: 1,
    text: 'hey',
  },
  {
    id: 2,
    user: 2,
    text: 'whats up'
  },
  {
    id: 3,
    user: 1,
    text: 'how was your weekend'
  },
  {
    id: 4,
    user: 1,
    text: 'mine was pretty good'
  },
  {
    id: 5,
    user: 1,
    text: 'it was awesome'
  },
  {
    id: 6,
    user: 1,
    text: 'i tried a new brunch place'
  },
  {
    id: 7,
    user: 1,
    text: 'and went to a concert'
  },
  {
    id: 8,
    user: 2,
    text: 'what place did you try?'
  },
  {
    id: 9,
    user: 1,
    text: 'mcDonalds have you had it'
  },
  {
    id: 10,
    user: 2,
    text: 'what, you went to mcDs for brunch...?'
  },
  {
    id: 11,
    user: 1,
    text: 'Oh. no, its actualy an irish pub called mcdonalds'
  },
  {
    id: 12,
    user: 1,
    text: 'I see your confusion'
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
