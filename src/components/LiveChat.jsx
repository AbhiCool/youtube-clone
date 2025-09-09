import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { liveMessageLimit } from "../utils/constants";
import { generateRandomUsername, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [liveMessages, setLiveMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMessages((prev) => {
        return [
          {
            name: generateRandomUsername(),
            message: getRandomMessage(),
          },
          ...prev,
        ].slice(0, liveMessageLimit);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setLiveMessages((prev) => {
      return [
        {
          name: "You",
          message,
        },
        ...prev,
      ].slice(0, liveMessageLimit);
    });
    setMessage("");
  };
  return (
    <div className="live-chat  border border-gray-300 rounded-lg md:w-1/4 w-full h-[600px]">
      <div className=" w-full h-10 bg-black text-white  px-6 flex items-center">
        Live Chat
      </div>
      <div className="flex flex-col-reverse overflow-y-auto py-2 px-4 h-[84%]">
        {liveMessages.map(({ name, message }) => (
          <p
            key={name + message}
            className="flex items-center gap-2 text-xs text-gray-700 my-2"
          >
            <span className="inline-block shrink-0">
              <FaUserCircle size={30} />
            </span>
            <span className="font-semibold ">
              {name} <span className="ml-3 font-normal">{message}</span>
            </span>
          </p>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="flex items-center p-2 gap-2">
        <input
          className=" w-full px-4 py-2 rounded-xl border border-gray-300"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="border border-gray-300 rounded-xl py-2 px-4 cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
