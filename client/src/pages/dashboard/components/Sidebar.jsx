import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, ShieldCheck, LogOut } from "lucide-react";

const Sidebar = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen px-6 py-8">
      <nav className="space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 transition ${
              isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`
          }
        >
          <Home className="w-5 h-5" /> Dashboard
        </NavLink>

        {/* Only for Admin and Landlord */}
        {(role === "admin" || role === "landlord") && (
          <NavLink
            to="/tenants"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 transition ${
                isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
              }`
            }
          >
            <Users className="w-5 h-5" /> Tenants
          </NavLink>
        )}

        {/* Only for Admin */}
        {role === "admin" && (
          <NavLink
            to="/caretakers"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 transition ${
                isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
              }`
            }
          >
            <ShieldCheck className="w-5 h-5" /> Caretakers
          </NavLink>
        )}

        <NavLink
          to="/logout"
          className="flex items-center gap-3 p-3 rounded-md font-medium text-red-500 hover:bg-red-100 transition"
        >
          <LogOut className="w-5 h-5" /> Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
