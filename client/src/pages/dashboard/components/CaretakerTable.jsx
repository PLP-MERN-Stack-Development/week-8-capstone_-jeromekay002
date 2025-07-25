import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";

export default function CaretakerTable() {
  const [caretakers, setCaretakers] = useState([]);

  useEffect(() => {
    const fetchCaretakers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/caretakers"); // Replace with your actual endpoint
        setCaretakers(res.data.caretakers);
      } catch (error) {
        console.error("Failed to fetch caretakers:", error);
      }
    };

    fetchCaretakers();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-5 mt-4">
      <h2 className="text-lg font-semibold mb-4">Caretakers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Property</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {caretakers.map((caretaker, index) => (
              <tr key={caretaker._id} className="text-sm text-gray-800 hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{caretaker.name}</td>
                <td className="px-4 py-2 border">{caretaker.email}</td>
                <td className="px-4 py-2 border">{caretaker.phone}</td>
                <td className="px-4 py-2 border"> {caretaker.plotAssigned}</td>
                <td className="px-4 py-2 border">
                  <button className="text-blue-600 hover:underline flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    View
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
