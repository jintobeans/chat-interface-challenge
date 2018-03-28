import react, { Component } from 'react'
import { connect } from 'react-redux'
import { newUserTyping, userNotTyping, sendMessageThunk} from '../store'

export class Input extends Component {

  handleSendMessage = (event) => {
    event.preventDefault()
    if (event.target.message.value !== ""){
      let newMessage = {
        sentAt: new Date(),
        sentBy: this.props.user,
        sentTo: this.props.chattingWithID,
        text: event.target.message.value
      }
      this.props.sendMessage(newMessage)
      let input = document.getElementById(`input-${this.props.user}`)
      input.value = ""
    }
    this.props.removeUser({id: this.props.user})
  }

  handleTyping = (event) => {
    event.preventDefault()
    let userTypingObj = {
      id: this.props.user,
      recipient: this.props.chattingWithID
    }
    if (event.target.value !== "") {
      this.props.addUser(userTypingObj)
    } else {
      this.props.removeUser(userTypingObj)
    }
  }

  render(){
    return (
      <div className="input-container">
        <form id={`form-${this.props.user}`} onSubmit={this.handleSendMessage}>
          <input
            className="input-text"
            type="text"
            id={`input-${this.props.user}`}
            name="message"
            onChange={this.handleTyping}
            placeholder=" Send A Message"
          />
          <input
            className="send-button"
            type="submit"
            value=">"/>
        </form>
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    messages: state.messages
  }
}

let mapDispatch = (dispatch) => {
  return {
    addUser: (user) => dispatch(newUserTyping(user)),
    removeUser: (user) => dispatch(userNotTyping(user)),
    sendMessage: (message) => dispatch(sendMessageThunk(message))
  }
}

export default connect(null, mapDispatch)(Input)
