import ChatSidebar from "./ChatSidebar";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useState } from "react";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-full">
      <ChatSidebar onSelectUser={setSelectedUser} />
      <div className="flex-1 flex flex-col">
        <MessageList selectedUser={selectedUser} />
        <MessageInput selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default ChatPage;
