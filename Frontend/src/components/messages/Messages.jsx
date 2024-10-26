import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/messageSkeletons";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-auto px-4">
      {true &&
        [...Array(3)].map((_, idx) => {
          <MessageSkeleton key={idx} />;
        })}
      {/* {!loading && messages.length > 0 ? (
        <div>
          {messages?.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">
          Send a message to start a conversation
        </p>
      )} */}
    </div>
  );
};

export default Messages;
