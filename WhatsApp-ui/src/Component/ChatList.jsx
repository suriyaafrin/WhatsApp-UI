import React from "react";

const ChatList = ({ filteredChats, selectedChat, setSelectedChat, searchTerm }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {filteredChats.length > 0 ? (
        filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className={`flex items-center gap-4 p-4 border-b border-gray-300 hover:bg-gray-100 cursor-pointer transition-all ${
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
                <span className="text-xs text-gray-500">{chat.deliveryTime}</span>
              </div>
              <p className="text-gray-600 text-sm truncate mt-1">{chat.lastMessage}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="p-10 text-center text-gray-500">
          No chats found for "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default ChatList;