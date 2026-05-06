import React from "react";

const Inbox = ({ messages = [] }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#E8E2D0]">
      {messages.map((msg) => (
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
  );
};

export default Inbox;