import { useEffect, useState } from "react";
import axios from 'axios';
import DashboardLayout from "./DashboardLayout";
import Title from "../../components/ui/Title";
import ProfileCard from "./components/ProfileCard";
import DashboardCard from "./components/DashboardCard";
import TenantTable from "./components/TenantTable";
import CaretakerTable from "./components/CaretakerTable";

export default function LandlordDashboard() {
  const [stats, setStats] = useState({
    tenants: 0,
    caretakers: 0,
    properties: 0,
    rentCollected: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard/stats");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);


  return (
    <DashboardLayout>
      <Title text="Landlord Dashboard" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <DashboardCard
          title="Total Tenants"
          value={stats.tenants}
          icon="tenants"
          color="bg-blue-600"
        />
        <DashboardCard
          title="Caretakers"
          value={stats.caretakers}
          icon="caretakers"
          color="bg-green-600"
        />
        <DashboardCard
          title="Properties"
          value={stats.properties}
          icon="properties"
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Rent Collected"
          value={`KSh ${stats.rentCollected.toLocaleString()}`}
          icon="rent"
          color="bg-purple-600"
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-6 mb-3">
        <ProfileCard
          name="John Mwangi"
          email="john@landlord.com"
          phone="0700000000"
          role="Landlord"
        />

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Property Overview</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Sunrise Apartments - 8/10 units occupied</li>
            <li>Downtown Flats - 5/5 units occupied</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Rent Summary</h2>
          <p><strong>Total Collected:</strong> KES 95,000</p>
          <p><strong>Pending:</strong> KES 15,000</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Announcements</h2>
          <p className="text-sm text-gray-700">Monthly inspections scheduled for next week.</p>
        </div>
      </div>
      <TenantTable />
      <CaretakerTable />
    </DashboardLayout>
  );
}