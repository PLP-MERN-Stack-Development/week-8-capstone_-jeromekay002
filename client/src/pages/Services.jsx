import React from "react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import { Home, ShieldCheck, MessageSquare } from "lucide-react";

export default function Services() {
    return (
        <SectionWrapper>
            <Title text="Our Services" />
            <p className="text-lg text-gray-700 mb-10">
                RealEase offers a powerful set of tools tailored for landlords, tenants, and caretakers to simplify property management and improve communication.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <Home className="text-indigo-500 w-6 h-6" />
                        <h2 className="text-xl font-semibold text-indigo-600">Tenant Management</h2>
                    </div>
                    <p className="text-gray-600">
                        Easily record new tenants, view all tenant profiles, manage rental payments, and track occupancy.
                    </p>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldCheck className="text-teal-500 w-6 h-6" />
                        <h2 className="text-xl font-semibold text-teal-600">Caretaker Access</h2>
                    </div>
                    <p className="text-gray-600">
                        Assign caretakers with restricted access to handle daily property updates, maintenance, and tenant issues.
                    </p>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="text-orange-500 w-6 h-6" />
                        <h2 className="text-xl font-semibold text-orange-600">Real-Time Chat</h2>
                    </div>
                    <p className="text-gray-600">
                        Foster better communication between landlords, tenants, and caretakers with our built-in group chat system.
                    </p>
                </Card>
            </div>
        </SectionWrapper>
    );
}
