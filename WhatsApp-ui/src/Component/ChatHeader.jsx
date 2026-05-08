const ChatHeader = ({ selectedChat, onBack }) => {
  if (!selectedChat) return null;

  return (
    <div className="p-5 border-b border-gray-200 bg-gray-200 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        {/* Back button — mobile only */}
        <button
          onClick={onBack}
          className="md:hidden p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
          title="Back"
        >
          <i className="fa-solid fa-arrow-left text-xl"></i>
        </button>

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

      <div className="flex items-center gap-6 text-gray-600">
        <button
          className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          title="Voice Call"
        >
          <i className="fa-solid fa-phone text-2xl"></i>
        </button>
        <button
          className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          title="Video Call"
        >
          <i className="fa-solid fa-video text-2xl"></i>
        </button>
        <button
          className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          title="Search in chat"
        >
          <i className="fa-solid fa-magnifying-glass text-2xl"></i>
        </button>
        <button
          className="hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          title="More options"
        >
          <i className="fa-solid fa-ellipsis-vertical text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;