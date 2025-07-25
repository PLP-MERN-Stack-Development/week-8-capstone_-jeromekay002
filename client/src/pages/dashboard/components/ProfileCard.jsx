import { User } from "lucide-react";

export default function ProfileCard({ name, email, phone, role }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-md">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="text-blue-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
}
