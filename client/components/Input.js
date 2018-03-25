import react, { Component } from 'react'

export default class Input extends Component {

  handleSendMessage = (event) => {
    event.preventDefault()
    console.log('e', event.target.message.value)
  }

  handleTyping = (event) => {
    event.preventDefault()
    console.log('typing this', event.target.value)
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
            onChange={this.handleTyping}/>
          <input
            className="send-button"
            type="submit"
            value="GO"/>
        </form>
      </div>
    )
  }
}
