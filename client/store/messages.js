import history from '../history'

/**
 * ACTION TYPES
 */
const GET_MESSAGES = 'GET_MESSAGES'
const SEND_MESSAGE = 'SEND_MESSAGE'

/**
 * INITIAL STATE - dummy data
 */
const defaultMessages = [
  { sentAt: new Date('March 17, 2018 03:24:55'),
    sentBy: 1,
    sentTo: 2,
    text: 'hey',
  },
  {
    sentAt: new Date('March 17, 2018 03:26:01'),
    sentBy: 2,
    sentTo: 1,
    text: 'whats up'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:10'),
    sentBy: 1,
    sentTo: 2,
    text: 'how was your weekend'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:12'),
    sentBy: 1,
    sentTo: 2,
    text: 'mine was pretty good'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:15'),
    sentBy: 1,
    sentTo: 2,
    text: 'it was awesome'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:20'),
    sentBy: 1,
    sentTo: 2,
    text: 'i tried a new brunch place'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:24'),
    sentBy: 1,
    sentTo: 2,
    text: 'and went to a concert'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:34'),
    sentBy: 2,
    sentTo: 1,

    text: 'what place did you try?'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:39'),
    sentBy: 1,
    sentTo: 2,
    text: 'mcDonalds have you had it'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:44'),
    sentBy: 2,
    sentTo: 1,
    text: 'what, you went to mcDs for brunch...?'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:51'),
    sentBy: 1,
    sentTo: 2,
    text: 'Oh. no, its actualy an irish pub called mcdonalds'
  },
  {
    sentAt: new Date('March 17, 2018 03:27:00'),
    sentBy: 1,
    sentTo: 2,
    text: 'I see your confusion'
  }
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
  // axios.post('/api/messages')
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
