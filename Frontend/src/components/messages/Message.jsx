import React from "react";

const Message = ({ status }) => {
  return (
    <div className={`chat chat-${status}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className={`chat-bubble chat-bubble-info`}>Hi, how are you.</div>
      <div className="chat-footer">
        <time className="text-xs  text-gray-400 opacity-50">12:46</time>
      </div>
    </div>
  );
};

export default Message;
