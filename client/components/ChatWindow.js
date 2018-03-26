import react, { Component } from 'react'
import { connect } from 'react-redux'
import {MessageBubble} from '../components'
import Input from './Input'

export class ChatWindow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let { messages, user, name, chattingWith, usersTyping } = this.props
    let otherUsersTyping = usersTyping.filter((userTyping) => {
      return userTyping !== user
    })
    return (
      <div className="chat-window" id={`${name}-window`}>
        <h3>Chatting with {chattingWith}</h3>
        <div className="window-container">
          <div className="messages-container">
            {messages && messages.map((message) => {
              return (
                <MessageBubble message={message} user={user}/>
              )
            })}
            {otherUsersTyping.length > 0 &&
              <h4>typing</h4>}
          </div>
          <Input user={user}/>
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

