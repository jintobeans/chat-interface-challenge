import react, { Component } from 'react'

export default class MessageBubble extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { message, user } = this.props
    let sentAtDisplayed = message.sentAt.toString().slice(0, message.sentAt.toString().indexOf('G') - 4)
    return (
      <div className={message.user === user ? "message-sender" :    "message-recipient"}>
      <div
        className={message.user === user ? "message-bubble-sender" :    "message-bubble-recipient"}
        id={`message-${message.sentAt}`}>
        {message.text}
        </div>
        <div className="sentAt">
        {sentAtDisplayed}
        </div>
      </div>
    )
  }
}
