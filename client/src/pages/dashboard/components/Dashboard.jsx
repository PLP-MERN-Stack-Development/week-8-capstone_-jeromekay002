import { useEffect, useState } from 'react';
import DashboardCard from './DashboardCard'; // Assuming this is your custom card component
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    tenants: 0,
    caretakers: 0,
    properties: 0,
    rentCollected: 0
  });

  useEffect(() => {
    axios.get('/api/dashboard/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error('Error fetching stats:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <DashboardCard title="Total Tenants" value={stats.tenants} icon="tenants" color="bg-blue-600" />
      <DashboardCard title="Caretakers" value={stats.caretakers} icon="caretakers" color="bg-green-600" />
      <DashboardCard title="Properties" value={stats.properties} icon="properties" color="bg-yellow-500" />
      <DashboardCard title="Rent Collected" value={`KSh ${stats.rentCollected.toLocaleString()}`} icon="rent" color="bg-purple-600" />
    </div>
  );
};

export default Dashboard;
