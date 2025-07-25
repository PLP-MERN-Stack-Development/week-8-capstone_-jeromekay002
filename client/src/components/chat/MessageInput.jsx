import { useState } from "react";
import socket from "../../utilis/socket";

const MessageInput = ({ selectedUser }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!selectedUser) return;
    socket.emit("send_message", {
      to: selectedUser.id,
      text: message,
    });
    setMessage("");
  };

  return (
    <div className="p-4 bg-white flex gap-2">
      <input
        className="flex-1 border p-2 rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
