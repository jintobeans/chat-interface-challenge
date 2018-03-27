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
    let { messages, user, name, chattingWith, usersTyping } = this.props
    let otherUsersTyping = usersTyping.filter((userTyping) => {
      return userTyping !== user
    })
    return (
      <div className="chat-window" id={`${name}-window`}>
        <h3>Chatting with {chattingWith}</h3>
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
          <Input user={user} />
        </div>
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    messages: state.messages,
    usersTyping: state.usersTyping
  }
}

export default connect(mapState, null)(ChatWindow)

