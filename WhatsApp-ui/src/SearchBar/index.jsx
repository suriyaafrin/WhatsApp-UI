import React, { useState } from 'react';

const ChatWindow = ({ selectedChat, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    onSendMessage(newMessage.trim());
    setNewMessage('');
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400 text-lg">
        Select a chat to start messaging
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">

      {/* Chat Header */}
      <div className="p-5 border-b border-gray-200 bg-white flex items-center gap-4">
        <img
          src={selectedChat.profileImage}
          alt={selectedChat.userFullName}
          className="w-12 h-12 rounded-full ring-2 ring-gray-100"
        />
        <div>
          <h2 className="font-semibold text-xl text-gray-800">{selectedChat.userFullName}</h2>
          <p className="text-green-600 text-sm font-medium">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {selectedChat.messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[65%] px-5 py-3 rounded-3xl text-[15.5px] leading-relaxed shadow-sm ${
                msg.sender === 'me'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              {msg.text}
              <p className={`text-[10px] mt-2 text-right ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-5 bg-white border-t border-gray-200">
        <div className="flex items-center bg-gray-100 rounded-full px-6 py-2 border border-gray-200">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent focus:outline-none text-base placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl active:scale-95"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;