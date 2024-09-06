import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div
      className="flex p-6 sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg shadow-md bg-gray-800 
      bg-clip-padding backdrop-filter backdrop-blur-md
      bg-opacity-50 border border-gray-700"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
