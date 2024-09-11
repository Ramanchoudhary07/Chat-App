import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const chatColor = fromMe ? "chat-bubble-info" : "";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const messageTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${chatColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer">
        <time className="text-xs  text-gray-400 opacity-50">{messageTime}</time>
      </div>
    </div>
  );
};

export default Message;
