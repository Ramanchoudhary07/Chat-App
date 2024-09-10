import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full block p-2.5 bg-gray-700 
        border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <button
            disabled={loading}
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <BsFillSendFill />
          </button>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
