import history from '../history'

/**
 * ACTION TYPES
 */
const GET_MESSAGES = 'GET_MESSAGES'
const SEND_MESSAGE = 'SEND_MESSAGE'

/**
 * INITIAL STATE
 */
const defaultMessages = [
  { sentAt: new Date('March 17, 2018 03:24:55'),
    user: 1,
    text: 'hey',
  },
  {
    sentAt: new Date('March 17, 2018 03:26:01'),
    user: 2,
    text: 'whats up'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:10'),
    user: 1,
    text: 'how was your weekend'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:12'),
    user: 1,
    text: 'mine was pretty good'
  },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:15'),
  //   user: 1,
  //   text: 'it was awesome'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:20'),
  //   user: 1,
  //   text: 'i tried a new brunch place'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:24'),
  //   user: 1,
  //   text: 'and went to a concert'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:34'),
  //   user: 2,
  //   text: 'what place did you try?'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:39'),
  //   user: 1,
  //   text: 'mcDonalds have you had it'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:44'),
  //   user: 2,
  //   text: 'what, you went to mcDs for brunch...?'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:26:51'),
  //   user: 1,
  //   text: 'Oh. no, its actualy an irish pub called mcdonalds'
  // },
  // {
  //   sentAt: new Date('March 17, 2018 03:27:00'),
  //   user: 1,
  //   text: 'I see your confusion'
  // }
]

/**
 * ACTION CREATORS
 */
const getMessages = messages => ({ type: GET_MESSAGES, messages })

const sendMessage = message => ({ type: SEND_MESSAGE, message })

/**
 * THUNK CREATORS
 */
export const getMessagesThunk = () => {
  return dispatch =>
    // axios.get('/api/messages')
    dispatch(getMessages())
}

export const sendMessageThunk = (message) => {
  return dispatch =>
    dispatch(sendMessage(message))
}

/**
 * REDUCER
 */
export default function (state = defaultMessages, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return [...action.messages] || state
    case SEND_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}
