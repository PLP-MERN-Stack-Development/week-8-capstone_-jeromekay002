import { useEffect, useState } from "react";
import axios from "axios";
import { UsersRound, MoreVertical } from "lucide-react";

export default function TenantTable() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/tenants");
        setTenants(res.data.tenants);
      } catch (err) {
        console.error("Error fetching tenants:", err);
      }
    };

    fetchTenants();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <UsersRound className="text-blue-600" size={20} /> Tenants
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">House</th>
              <th className="px-4 py-3 text-left">Joined</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tenants.map((tenant) => (
              <tr key={tenant._id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{tenant.name}</td>
                <td className="px-4 py-3">{tenant.phone}</td>
                <td className="px-4 py-3">{tenant.email}</td>
                <td className="px-4 py-3">{tenant.unitNumber || "N/A"}</td>
                <td className="px-4 py-3"> {new Date(tenant.joinDate).toISOString().slice(0, 10)}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
