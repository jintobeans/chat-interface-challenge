import react, { Component } from 'react'
import { connect } from 'react-redux'
import { MessageBubble } from '../components'
import Input from './Input'

export class ChatWindow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let overflowingBox = document.getElementById(`${this.props.name}-messages`)
    overflowingBox.scrollTop = overflowingBox.scrollHeight - overflowingBox.clientHeight
  }

  componentDidUpdate(nextProps) {
    let overflowingBox = document.getElementById(`${this.props.name}-messages`)
    overflowingBox.scrollTop = overflowingBox.scrollHeight - overflowingBox.clientHeight
  }

  render() {
    let { messages, user, name, chattingWithID, usersTyping, users } = this.props
    let otherUsersTyping = usersTyping.filter((userTyping) => {
      return userTyping !== user
    })
    let userChattingWith = users.find((user) => {
      return user.id === chattingWithID
    })
    return (
      <div className="chat-window" id={`${name}-window`}>
        <h3>To: {`${userChattingWith.firstName} ${userChattingWith.lastName}`}</h3>
        <div className="window-container">
          <div className="messages-outer">
            <div id={`${name}-messages`} className="messages-container">
              {messages && messages.map((message) => {
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
          <Input user={user} chattingWithID={chattingWithID} />
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

