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
    sentBy: 2,
    sentTo: 1,
    text: 'it was awesome'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:20'),
    sentBy: 2,
    sentTo: 1,
    text: 'i tried a new brunch place'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:24'),
    sentBy: 2,
    sentTo: 1,
    text: 'and went to a concert'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:34'),
    sentBy: 1,
    sentTo: 2,
    text: 'what place did you try?'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:39'),
    sentBy: 2,
    sentTo: 1,
    text: 'tartine, you been?'
  },
  {
    sentAt: new Date('March 17, 2018 03:26:44'),
    sentBy: 1,
    sentTo: 2,
    text: 'yea they have cool croissants'
  },
  {
    sentAt: new Date('March 17, 2018 03:27:51'),
    sentBy: 2,
    sentTo: 1,
    text: 'and coffee!'
  },
  {
    sentAt: new Date('March 11, 2018 12:27:00'),
    sentBy: 1,
    sentTo: 3,
    text: 'Where is the HDMI cable?'
  },
  {
    sentAt: new Date('March 11, 2018 12:29:00'),
    sentBy: 3,
    sentTo: 1,
    text: 'Check the conference room'
  },
  {
    sentAt: new Date('March 11, 2018 12:30:00'),
    sentBy: 1,
    sentTo: 3,
    text: 'Found it'
  },
  {
    sentAt: new Date('March 11, 2018 12:31:00'),
    sentBy: 3,
    sentTo: 1,
    text: 'Nice'
  },
  {
    sentAt: new Date('March 20, 2018 04:00:00'),
    sentBy: 2,
    sentTo: 4,
    text: 'hey'
  },
  {
    sentAt: new Date('March 17, 2018 12:00:00'),
    sentBy: 2,
    sentTo: 5,
    text: 'lunch?'
  },
  {
    sentAt: new Date('March 17, 2018 12:01:00'),
    sentBy: 5,
    sentTo: 2,
    text: 'yeah how bout tender greens'
  },
  {
    sentAt: new Date('March 17, 2018 12:01:00'),
    sentBy: 2,
    sentTo: 5,
    text: 'exactly what I was craving'
  },
  {
    sentAt: new Date('March 13, 2018 01:31:00'),
    sentBy: 5,
    sentTo: 1,
    text: 'miss you'
  },
  {
    sentAt: new Date('March 13, 2018 01:38:00'),
    sentBy: 1,
    sentTo: 5,
    text: 'haha'
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
  // axios.get('/api/messages') // grab messages for a particular user
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
