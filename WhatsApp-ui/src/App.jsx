import { useState } from 'react'
import './App.css'
import { chats } from '../data/chat.js';
import ChatList from './Component/ChatList.jsx';
import SearchBar from './Component/SearchBar.jsx';
import SidebarHeader from './Component/SidebarHeader.jsx';
import ChatHeader from './Component/ChatHeader.jsx';
import Inbox from './Component/Inbox.jsx';
import MessageInput from './Component/MessageInput.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedChat, setSelectedChat] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const [chatData, setChatData] = useState(chats)

  const filteredChats = chatData.filter((chat) =>
    chat.userFullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const messageToSend = {
      id: Date.now(),
      sender: "me",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const messageToReceive = {
      id: Date.now() + 1,
      sender: "them",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatData((prevChats) =>
      prevChats.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, messageToSend, messageToReceive],
              lastMessage: newMessage.trim(),
            }
          : chat,
      ),
    );

    setSelectedChat((prev) => ({
      ...prev,
      messages: [...prev.messages, messageToSend, messageToReceive],
      lastMessage: newMessage.trim(),
    }));

    setNewMessage("");
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Left Sidebar */}
      <div className="w-87.5 flex flex-col border-r border-gray-300 bg-white">
        <SidebarHeader />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ChatList
          filteredChats={filteredChats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          searchTerm={searchTerm}
        />
      </div>

      {/* Right Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <ChatHeader selectedChat={selectedChat} />
            <Inbox messages={selectedChat.messages || []} />
            <MessageInput
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              handleSendMessage={handleSendMessage}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
            Select a chat to start messaging
          </div>
        )}
      </div>

    </div>
  )
}

export default App