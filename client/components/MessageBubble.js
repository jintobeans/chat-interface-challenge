import react, { Component } from 'react'

export default class MessageBubble extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let { message, user } = this.props
    return (
      <div
        className={message.user === user ? "message-bubble-sender" : "message-bubble-recipient"}
        id={`message-${message.id}`}>
        {message.text}
      </div>
    )
  }
}
