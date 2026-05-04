import React, { useState } from "react";
import { chats as initialChats } from "../../data/chat.js";

const ChatInbox = () => {
  const [chats, setChats] = useState(initialChats);
  const [selectedChat, setSelectedChat] = useState(initialChats[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // ← New State for Search

  // Filter chats based on search term
  const filteredChats = chats.filter((chat) =>
    chat.userFullName?.toLowerCase().includes(searchTerm.toLowerCase()),
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

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === selectedChat.id
          ? {
              ...chat,
              messages: [...chat.messages, messageToSend],
              lastMessage: newMessage.trim(),
            }
          : chat,
      ),
    );

    setSelectedChat((prev) => ({
      ...prev,
      messages: [...prev.messages, messageToSend],
      lastMessage: newMessage.trim(),
    }));

    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* LEFT SIDEBAR */}
      <div className="w-130 border-r border-gray-200 bg-white flex flex-col">
        {/* Upper Navbar */}
        <div className="h-22 border-b border-gray-200 bg-gray-200 flex items-center justify-between px-4 shadow-sm">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 rounded-full border-2 border-white shadow object-cover"
              src="https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg"
              alt="Profile"
            />
            <span className="font-semibold text-lg text-gray-900">Suriya</span>
          </div>

          <div className="flex items-center gap-6 text-gray-500">
            <i className="fa-solid fa-user-group text-xl cursor-pointer hover:text-gray-700"></i>
            <i className="fa-regular fa-circle text-xl cursor-pointer hover:text-gray-700"></i>
            <i className="fa-solid fa-comment-dots text-xl cursor-pointer hover:text-gray-700"></i>
            <i className="fa-solid fa-ellipsis-vertical text-xl cursor-pointer hover:text-gray-700"></i>
          </div>
        </div>

        {/* Search Bar - Functional */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            {/* Search Input Box */}
            <div className="flex-1 flex items-center bg-gray-100 rounded-xl px-5 py-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search or start new chat"
                className="bg-transparent outline-none flex-1 ml-3 text-sm placeholder-gray-500"
              />
            </div>

            {/* Menu Icon */}
            <div className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-2xl cursor-pointer transition-all">
              <i className="fa-solid fa-bars-staggered text-xl"></i>
            </div>
          </div>
        </div>

        {/* Chat List - Showing Filtered Results */}
        <div className="flex-1 overflow-y-auto ">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`flex items-center gap-4 p-4 border-b border-gray-300  hover:bg-gray-100 cursor-pointer transition-all ${
                  selectedChat?.id === chat.id
                    ? "bg-blue-50 border-r-4 border-blue-600"
                    : ""
                }`}
              >
                <img
                  src={chat.profileImage}
                  alt={chat.userFullName}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100 border-2 border-green-400"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {chat.userFullName}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {chat.deliveryTime}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm truncate mt-1">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center text-gray-500">
              No chats found for "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE - Chat Area */}
      {selectedChat && (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-5 border-b border-gray-200 bg-gray-200 flex items-center justify-between">
            {/* Left Side - User Info */}
            <div className="flex items-center gap-4">
              <img
                src={selectedChat.profileImage}
                alt={selectedChat.userFullName}
                className="w-12 h-12 rounded-full ring-2 ring-gray-100 object-cover"
              />
              <div>
                <h2 className="font-semibold text-xl text-gray-800">
                  {selectedChat.userFullName}
                </h2>
                <p className="text-green-600 text-sm font-medium">Online</p>
              </div>
            </div>

            {/* Right Side - Action Icons */}
            <div className="flex items-center gap-6 text-gray-600">
              {/* Phone Call */}
              <button
                className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
                title="Voice Call"
              >
                <i className="fa-solid fa-phone text-2xl"></i>
              </button>

              {/* Video Call */}
              <button
                className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
                title="Video Call"
              >
                <i className="fa-solid fa-video text-2xl"></i>
              </button>

              {/* Search */}
              <button
                className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
                title="Search in chat"
              >
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              </button>

              {/* 3-Dot Menu */}
              <button
                className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
                title="More options"
              >
                <i className="fa-solid fa-ellipsis-vertical text-2xl"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#E8E2D0]">
            {selectedChat.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[65%] px-5 py-3 rounded-3xl text-[15.5px] leading-relaxed shadow-sm ${
                    msg.sender === "me"
                      ? "bg-green-700 text-white rounded-br-none"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <p
                    className={`text-[10px] mt-2 text-right ${
                      msg.sender === "me" ? "text-green-100" : "text-gray-500"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-gray-200 border-t border-gray-200">
            <div className="flex items-center gap-3">
              {/* Icons Outside - Left Side */}
              <div className="flex items-center gap-1 text-gray-500">
                <button
                  className="p-3 hover:bg-gray-100 hover:text-gray-700 rounded-full transition-all"
                  title="Emoji"
                >
                  <i className="fa-regular fa-face-smile text-2xl"></i>
                </button>

                <button
                  className="p-3 hover:bg-gray-100 hover:text-gray-700 rounded-full transition-all"
                  title="Attachment"
                >
                  <i className="fa-solid fa-paperclip text-2xl"></i>
                </button>

                <button
                  className="p-3 hover:bg-gray-100 hover:text-gray-700 rounded-full transition-all"
                  title="Camera"
                >
                  <i className="fa-solid fa-camera text-2xl"></i>
                </button>
              </div>

              {/* Main Input Box */}
              <div className="flex-1 flex items-center bg-gray-100 rounded-full px-6 py-2 border border-gray-200">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent focus:outline-none text-base placeholder-gray-500"
                />
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="bg-green-600 hover:bg-green-700 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl active:scale-95 transition-all shadow-md"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInbox;
