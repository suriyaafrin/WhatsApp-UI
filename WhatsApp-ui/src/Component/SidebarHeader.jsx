const SidebarHeader = () => {
  return (
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
  );
};

export default SidebarHeader;