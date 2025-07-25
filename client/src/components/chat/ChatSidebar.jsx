export default function ChatSidebar() {
  const users = [
    { name: "Landlord John", role: "landlord" },
    { name: "Caretaker Mary", role: "caretaker" },
    { name: "Tenant Alice", role: "tenant" },
  ];

  return (
    <div className="w-64 bg-white border-r p-4 ">
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      <ul className="space-y-3">
        {users.map((user, index) => (
          <li
            key={index}
            className="p-3 rounded-lg cursor-pointer bg-gray-100 hover:bg-blue-100 transition"
          >
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
