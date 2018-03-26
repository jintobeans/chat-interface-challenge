import react, { Component } from 'react'
import { connect } from 'react-redux'
import { newUserTyping, userNotTyping} from '../store'

export class Input extends Component {

  handleSendMessage = (event) => {
    event.preventDefault()
    console.log('sent this', event.target.message.value)
  }

  handleTyping = (event) => {
    event.preventDefault()
    console.log('typing this', event.target.value)
    if (event.target.value !== "") {
      this.props.addUser(this.props.user)
    } else {
      this.props.removeUser(this.props.user)
    }
    //will update redux to indicate typing??
  }

  render(){
    return (
      <div className="input-container">
        <form onSubmit={this.handleSendMessage}>
          <input
            className="input-text"
            type="text"
            name="message"
            onChange={this.handleTyping}
          />
          <input
            className="send-button"
            type="submit"
            value="GO"/>
        </form>
      </div>
    )
  }
}

let mapDispatch = (dispatch) => {
  return {
    addUser: (user) => dispatch(newUserTyping(user)),
    removeUser: (user) => dispatch(userNotTyping(user))
  }
}

export default connect(null, mapDispatch)(Input)
