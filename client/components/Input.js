import React from 'react'
import { connect } from 'react-redux'
import { newUserTyping, userNotTyping, sendMessageThunk} from '../store'
import io from 'socket.io-client';


export class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageToPreview: ''
    }
  }

  handleSendMessage = (event) => {
    event.preventDefault()
    if (event.target.message.value !== "" || this.state.imageToPreview){
      let newMessage = {
        sentAt: new Date(),
        sentBy: this.props.user,
        sentTo: this.props.chattingWithID,
        text: event.target.message.value,
        image: this.state.imageToPreview
      }
      this.props.sendMessage(newMessage)
      // const input = document.getElementById(`input-${this.props.user}`)
      // input.value = ""
      if (this.textInput) {
        this.textInput.value = ""
      }
      if (this.imageInput) {
        this.imageInput.value = null
      }
      this.setState({
        imageToPreview: undefined
      })
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
    // const socket = io(window.location.origin);
    // socket.emit('new-message', event.target.value)
  }

  handleFileSelection = (event) => {
    let reader = new FileReader()
    reader.onload = () => {
      this.setState({
        imageToPreview: reader.result
      })
    };
    reader.readAsDataURL(event.target.files[0]);

  }

  render(){
    return (
      <div className="input-container">
        <form
          id={`form-${this.props.user}`} onSubmit={this.handleSendMessage}>
          {this.state.imageToPreview &&
            <img src={this.state.imageToPreview} />}
          <input
            className="input-text"
            type="text"
            id={`input-${this.props.user}`}
            name="message"
            onChange={this.handleTyping}
            placeholder=" Send A Message"
            ref={(elem) => {
              this.textInput = elem
            }}
          />
          <input
            type="file"
            id="input"
            onChange={this.handleFileSelection}
            ref={(elem) => {
              this.imageInput = elem
            }} />
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
