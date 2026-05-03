import { useState } from 'react'
import './App.css'
import { chats } from '../data/chat.js';
// import ChatSidebar from './navbar_left'
// import ChatWindow from './SearchBar'
import ChatInbox from './ChatInbox/index.jsx';






function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <NavbarLeft />
      <SearchBar /> */}
      <ChatInbox/>
      
    </>
  )
}

export default App
