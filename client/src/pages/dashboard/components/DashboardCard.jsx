import { Building2, Users, Wallet, ShieldCheck } from "lucide-react";

const icons = {
  tenants: <Users className="w-6 h-6 text-white" />,
  caretakers: <ShieldCheck className="w-6 h-6 text-white" />,
  properties: <Building2 className="w-6 h-6 text-white" />,
  rent: <Wallet className="w-6 h-6 text-white" />,
};

export default function DashboardCard({ title, value, icon = "tenants", color = "bg-blue-600" }) {
  console.log("Rendering card with value:", value);
  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-md">
      <div className={`p-3 rounded-full ${color} mr-4`}>
        {icons[icon] || icons.tenants}
      </div>
      <div>
        <h4 className="text-gray-600 text-sm font-medium">{title}</h4>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
