import react, { Component } from 'react'
import { connect } from 'react-redux'
import {MessageBubble} from '../components'
import Input from './Input'

export class ChatWindow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let { messages, user, name } = this.props

    return (
      <div className="chat-window" id={`${name}-window`}>
        <h3>Chatting with {user}</h3>
        <div className="window-container">
          <div className="messages-container">
            {messages && messages.map((message) => {
              return (
                <MessageBubble message={message} user={user}/>
              )
            })}
          </div>
          <Input />
        </div>
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapState, null)(ChatWindow)

