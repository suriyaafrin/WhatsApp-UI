import React from 'react';

const NavbarLeft = ({ chats = [], selectedChat, setSelectedChat }) => {
  return (
    <div className="w-96 border-r border-gray-200 bg-white flex flex-col">

      {/* Upper Navbar */}
      <div className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-4 shadow-sm">
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

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center bg-gray-100 rounded-3xl px-5 py-3">
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
            placeholder="Search or start new chat"
            className="bg-transparent outline-none flex-1 ml-3 text-sm placeholder-gray-500"
          />
          <i className="fa-solid fa-bars-staggered text-gray-500 cursor-pointer"></i>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className={`flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer transition-all ${
              selectedChat?.id === chat.id ? 'bg-blue-50 border-r-4 border-blue-600' : ''
            }`}
          >
            <img 
              src={chat.profileImage} 
              alt={chat.userFullName} 
              className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100" 
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 truncate">{chat.userFullName}</h3>
                <span className="text-xs text-gray-500">{chat.deliveryTime}</span>
              </div>
              <p className="text-gray-600 text-sm truncate mt-1">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarLeft;