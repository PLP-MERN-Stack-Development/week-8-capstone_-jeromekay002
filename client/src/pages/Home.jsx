import React from "react";
import heroImg from "../assets/hero.jpg";
import Button from "../components/ui/Button";
import SectionWrapper from "../components/ui/SectionWrapper";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import { UserRound, ShieldCheck, Clock3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white pt-20">
        <SectionWrapper className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to <span className="text-blue-600">RealEase</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Manage tenants, caretakers, and landlords in real time with powerful tools.
            </p>
            <div className="mt-6 space-x-4">
              <Button>Get Started</Button>
              <a href="/about" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img src={heroImg} alt="hero" className="rounded-xl shadow-lg" />
          </div>
        </SectionWrapper>
      </section>

      {/* Features Section */}
      <SectionWrapper className="bg-blue-50">
        <Title text="Why Choose RealEase?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg hover:scale-105 transition duration-300">
            <UserRound className="text-blue-600 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Tenant Management</h3>
            <p className="text-gray-600">Easily manage tenants with our intuitive tools.</p>
          </Card>
          <Card className="hover:shadow-lg hover:scale-105 transition duration-300">
            <ShieldCheck className="text-blue-600 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Caretaker Access</h3>
            <p className="text-gray-600">Empower caretakers to manage properties effectively.</p>
          </Card>
          <Card className="hover:shadow-lg hover:scale-105 transition duration-300">
            <Clock3 className="text-blue-600 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">Chat and notifications keep everyone informed.</p>
          </Card>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="text-center">
        <Title text="Ready to Simplify Property Management?" />
        <p className="text-gray-600 mb-6">
          Join today and experience the future of real estate management.
        </p>
        <Button>Register Now</Button>
      </SectionWrapper>
    </div>
  );
}
