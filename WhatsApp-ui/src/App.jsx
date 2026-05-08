import { useState, useRef } from "react";
import "./App.css";
import { chats } from "../data/chat.js";
import ChatList from "./Component/ChatList.jsx";
import SearchBar from "./Component/SearchBar.jsx";
import SidebarHeader from "./Component/SidebarHeader.jsx";
import ChatHeader from "./Component/ChatHeader.jsx";
import Inbox from "./Component/Inbox.jsx";
import MessageInput from "./Component/MessageInput.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [chatData, setChatData] = useState(
    chats.map((chat) => ({ ...chat, lastMessageTime: Date.now() })),
  );

  const notificationSound = useRef(
    new Audio("/Music/universfield-happy-message-ping-351298.mp3"),
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const now = Date.now();

    const messageToSend = {
      id: now,
      sender: "me",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const messageToReceive = {
      id: now + 1,
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
              lastMessageTime: now,
            }
          : chat,
      ),
    );

    setSelectedChat((prev) => ({
      ...prev,
      messages: [...prev.messages, messageToSend, messageToReceive],
      lastMessage: newMessage.trim(),
      lastMessageTime: now,
    }));

    setNewMessage("");

    setTimeout(() => {
      notificationSound.current.currentTime = 0;
      notificationSound.current.play().catch((err) => {
        console.warn("Sound playback failed:", err);
      });
    }, 500);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar — hidden on mobile when a chat is selected */}
      <div
        className={`
          flex flex-col border-r border-gray-300 bg-white
          w-full md:w-87.5
          ${selectedChat ? "hidden md:flex" : "flex"}
        `}
      >
        <SidebarHeader />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ChatList
          chatData={chatData}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          searchTerm={searchTerm}
        />
      </div>

      {/* Chat panel — hidden on mobile when no chat is selected */}
      <div
        className={`
          flex-1 flex flex-col
          w-full md:w-auto
          ${selectedChat ? "flex" : "hidden md:flex"}
        `}
      >
        {selectedChat ? (
          <>
            <ChatHeader selectedChat={selectedChat} onBack={handleBack} />
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
  );
}

export default App;