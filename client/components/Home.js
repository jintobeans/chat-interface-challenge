import ChatWindow from './ChatWindow'

export const Home = () => (

  <div id='home'>
    <ChatWindow user={1} name='laura' chattingWith='Rob'/>
    <ChatWindow user={2} name='rob' chattingWith='Laura'/>
  </div>
)

export default Home
