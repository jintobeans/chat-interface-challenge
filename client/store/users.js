import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'

/**
 * INITIAL STATE - dummy data
 */
const defaultUsers = [
  {
    id: 1,
    firstName: 'Laura',
    lastName: 'Ashley'
  },
  {
    id: 2,
    firstName: 'Robert',
    lastName: 'Lee'
  },
  {
    id: 3,
    firstName: 'Angelica',
    lastName: 'Smith'
  },
  {
    id: 4,
    firstName: 'Jess',
    lastName: 'Kim'
  },
  {
    id: 5,
    firstName: 'Andrew',
    lastName: 'Bonaparte'
  }
]

/**
 * ACTION CREATORS
 */
const getUsers = users => ({ type: GET_USERS, users })

/**
 * THUNK CREATORS
 */
export const getUsersThunk = () => {
  return dispatch =>
  // axios.get('/api/users')
    dispatch(getUsers())
}

/**
 * REDUCER
 */
export default function (state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return [...action.users] || state
    default:
      return state
  }
}
