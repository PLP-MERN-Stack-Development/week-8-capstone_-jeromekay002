import { useEffect, useState } from "react";
import socket from "../../utilis/socket";

const MessageList = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receive_message");
  }, []);

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <h3 className="text-md font-bold mb-2">
        Chat with {selectedUser ? selectedUser.name : "Select a user"}
      </h3>
      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-blue-100 p-2 rounded max-w-md">
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
