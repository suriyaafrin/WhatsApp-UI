import React from "react";

const MessageInput = ({ newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="p-5 bg-gray-200 border-t border-gray-200">
      <div className="flex items-center gap-3">
        
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

        <button
          onClick={handleSendMessage}
          className="bg-green-600 hover:bg-green-700 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl active:scale-95 transition-all shadow-md"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default MessageInput;