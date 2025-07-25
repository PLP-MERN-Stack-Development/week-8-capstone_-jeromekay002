import DashboardLayout from "./DashboardLayout";
import TenantTable from "./components/TenantTable";
import Title from "../../components/ui/Title";
import CaretakerTable from "./components/CaretakerTable";
import DashboardCard from "./components/DashboardCard";

export default function AdminDashboard() {
    return (
        <DashboardLayout>
            <Title text="Admin Overview" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <DashboardCard title="Total Tenants" value="120" icon="tenants" color="bg-blue-600" />
                <DashboardCard title="Caretakers" value="8" icon="caretakers" color="bg-green-600" />
                <DashboardCard title="Properties" value="15" icon="properties" color="bg-yellow-500" />
                <DashboardCard title="Rent Collected" value="KSh 850,000" icon="rent" color="bg-purple-600" />
            </div>
            <TenantTable />
            <CaretakerTable />
        </DashboardLayout>
    );
}
