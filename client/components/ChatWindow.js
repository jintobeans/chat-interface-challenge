import react, { Component } from 'react'
import { connect } from 'react-redux'
import { MessageBubble } from '../components'
import Input from './Input'

export class ChatWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chattingWith: {}
    }
  }

  componentDidMount() {
    let userChattingWith = this.props.users.find((user) => {
      return user.id === this.props.chattingWithID
    })
    this.setState({
      chattingWith: userChattingWith
    })
    let overflowingBox = document.getElementById(`${this.props.name}-messages`)
    overflowingBox.scrollTop = overflowingBox.scrollHeight - overflowingBox.clientHeight
  }

  componentDidUpdate(nextProps) {
    let overflowingBox = document.getElementById(`${this.props.name}-messages`)
    overflowingBox.scrollTop = overflowingBox.scrollHeight - overflowingBox.clientHeight
  }

  handleUserChange = (event) => {
    event.preventDefault()
    let userChattingWith = this.props.users.find((user) => {
      return user.id == event.target.value
    })
    this.setState({
      chattingWith: userChattingWith
    })
  }

  render() {
    let { messages, user, name, usersTyping, users } = this.props

    let userFirstName = users.find((person) => {
      return person.id == user
    }).firstName

    let currentlyChattingWith = this.state.chattingWith

    let otherUsersTyping = usersTyping.filter((userTyping) => {
      return userTyping.id == currentlyChattingWith.id && userTyping.recipient == user
    })

    let messagesWithThisUser = messages.filter((message) => {
      return message.sentTo == currentlyChattingWith.id && message.sentBy == user || message.sentTo == user && message.sentBy == currentlyChattingWith.id
    }).sort(function(a,b){return a.sentAt - b.sentAt})

    return (
      <div className="chat-window" id={`${name}-window`}>
        <p>Logged in as {userFirstName}</p>
        <h3>To:
          <select
            className="to-dropdown"
            id={`${userFirstName}-userSelection`}
            onChange={this.handleUserChange}
            name="userChattingWith"
            value={currentlyChattingWith.id}>
            {
              users && users.map((user) => {
                return (
                  <option
                    value={user.id}>
                    {`${user.firstName} ${user.lastName}`}
                  </option>
                )
              })
            }
          </select>
        </h3>
        <div className="window-container">
          <div className="messages-outer">
            <div id={`${name}-messages`} className="messages-container">
              {currentlyChattingWith.id == user && <h3>Cannot send message to yourself</h3>}
              {messagesWithThisUser && messagesWithThisUser.map((message) => {
                return (
                  <MessageBubble message={message} user={user} />
                )
              })}
              {otherUsersTyping.length > 0 &&
                <div className="typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>}
            </div>
          </div>
          <Input user={user} chattingWithID={currentlyChattingWith.id} />
        </div>
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    messages: state.messages,
    usersTyping: state.usersTyping,
    users: state.users
  }
}

export default connect(mapState, null)(ChatWindow)

