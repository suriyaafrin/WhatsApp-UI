import { useState } from 'react'
import './App.css'
import { chats } from '../data/chat.js';
import ChatList from './Component/ChatList.jsx';
import SearchBar from './Component/SearchBar.jsx';
import SidebarHeader from './Component/SidebarHeader.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedChat, setSelectedChat] = useState(null)

  const filteredChats = chats.filter((chat) =>
    chat.userFullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SidebarHeader />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ChatList
        filteredChats={filteredChats}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        searchTerm={searchTerm}
      />
    </>
  )
}

export default App