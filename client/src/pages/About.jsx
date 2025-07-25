import React from "react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import { Info, Users, Building2 } from "lucide-react";

export default function About() {
    return (
        <SectionWrapper>
            <Title text="About Us" />
            <p className="text-lg text-gray-700 mb-10">
                RealEase is built to modernize property management in Kenya and beyond.
                Whether you're a landlord, tenant, or caretaker, we help simplify your
                workflow with smart tools.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <Info className="text-blue-500 w-6 h-6" />
                        <h2 className="text-xl font-semibold text-blue-600">Our Vision</h2>
                    </div>
                    <p className="text-gray-600">
                        Empower every landlord and caretaker with efficient digital solutions.
                    </p>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <Users className="text-green-500 w-6 h-6" />
                        <h2 className="text-xl font-semibold text-green-600">Our Team</h2>
                    </div>
                    <p className="text-gray-600">
                        A group of passionate developers and real estate experts solving housing challenges.
                    </p>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                        <Building2 className="text-purple-500 w-6 h-6" />
                        <h2 className="text-xl font-semibold text-purple-600">Core Values</h2>
                    </div>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Efficiency</li>
                        <li>Integrity</li>
                        <li>User Focus</li>
                        <li>Reliability</li>
                    </ul>
                </Card>
            </div>
        </SectionWrapper>
    );
}
