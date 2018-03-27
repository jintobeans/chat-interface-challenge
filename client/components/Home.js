import ChatWindow from './ChatWindow'
import { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {

  render(){
    return (
      <div id='home'>
        <ChatWindow user={1} name='Laura' chattingWithID={2} />
        <ChatWindow user={2} name='Rob' chattingWithID={1} />
      </div>
    )
  }
}

let mapState = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapState, null)(Home)
