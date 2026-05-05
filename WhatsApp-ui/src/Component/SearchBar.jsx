import React from "react";
import { chats } from "../../data/chat.js";
const SearchBar = ({ searchTerm = "", setSearchTerm }) => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
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

        <div className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-2xl cursor-pointer transition-all">
          <i className="fa-solid fa-bars-staggered text-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;