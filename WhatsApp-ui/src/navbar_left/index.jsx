import React from "react";

function NavbarLeft() {
  return (
    <div className="border-2 m-10 w-150 flex items-center justify-between p-4 rounded-lg bg-gray-200">
      <div className="">
        <img
          className="h-15 w-13 rounded-full border-5 border-white "
          src="https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg"
          alt="Profile"
        />
      </div>
      <div className="flex items-center justify-center gap-7">
        <i className="fa-solid fa-user-group text-2xl text-gray-600 "></i>
        <i className="fa-regular fa-circle text-2xl text-gray-600"></i>
        <i className="fa-sharp fa-light fa-comment text-2xl text-gray-600"></i>
        <i className="fa-solid fa-ellipsis-vertical text-2xl text-gray-600"></i>
      </div>
    </div>
  );
}

export default NavbarLeft;
