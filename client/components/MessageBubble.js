import react, { Component } from 'react'

export default class MessageBubble extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let { message, user } = this.props
    return (
      <div className="message-bubble" id={`message-${message.id}`}>
        {message.text}
      </div>
    )
  }
}
