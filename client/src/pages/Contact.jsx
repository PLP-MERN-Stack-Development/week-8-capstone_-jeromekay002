import React from "react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Title from "../components/ui/Title";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <SectionWrapper>
            <Title text="Contact Us" />
            <p className="text-lg text-gray-700 mb-10">
                Have questions, suggestions, or need help? Reach out to us—we're always happy to help!
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                <div className="flex items-start gap-3">
                    <Mail className="text-red-500 w-6 h-6 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p>support@realease.co.ke</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Phone className="text-green-500 w-6 h-6 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p>+254 712 345 678</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
