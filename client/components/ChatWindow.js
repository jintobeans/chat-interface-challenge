import react, { Component } from 'react'
import { connect } from 'react-redux'
import { MessageBubble } from '../components'

export class ChatWindow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let messages = this.props.messages
    let user = 'rob'
    return (
      <div className="chat-window" id={`${this.props.name}-window`}>
        <h3>Chatting with 'John Smith'</h3>
        {messages && messages.map((message) => {
          return (
            <MessageBubble message={message} user={user}/>
          )
        })}
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

