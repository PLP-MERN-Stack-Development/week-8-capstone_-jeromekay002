import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SectionWrapper from "../components/ui/SectionWrapper";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const role = watch("role");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      await axios.post("http://localhost:5000/api/auth/register", data);
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || err.message));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper className="max-w-md mx-auto">
      <Title text="Create an Account" />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        {/* Common Fields */}
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Jerome Kaloki"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            {...register("phone", { required: "Phone is required" })}
            type="tel"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="0712345678"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" }
            })}
            type="password"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="********"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
        </div>

        {/* Role Selector */}
        <div>
          <label className="block text-sm font-medium">Register as</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">-- Select Role --</option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
            <option value="caretaker">Caretaker</option>
          </select>
          {errors.role && <p className="text-red-600 text-sm">{errors.role.message}</p>}
        </div>

        {/* Conditional Fields Based on Role */}
        {role === "landlord" && (
          <>
            <div>
              <label className="block text-sm font-medium">National ID</label>
              <input
                {...register("nationalId", { required: "National ID is required" })}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="12345678"
              />
              {errors.nationalId && <p className="text-red-600 text-sm">{errors.nationalId.message}</p>}
            </div>
          </>
        )}

        {role === "tenant" && (
          <>
            <div>
              <label className="block text-sm font-medium">Property Name</label>
              <input
                {...register("property", { required: "Property is required" })}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Sunrise Apartments"
              />
              {errors.property && <p className="text-red-600 text-sm">{errors.property.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Room Number</label>
              <input
                {...register("roomNumber", { required: "Room number is required" })}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="A-204"
              />
              {errors.roomNumber && <p className="text-red-600 text-sm">{errors.roomNumber.message}</p>}
            </div>
          </>
        )}

        {role === "caretaker" && (
          <div>
            <label className="block text-sm font-medium">Assigned Property</label>
            <input
              {...register("assignedProperty", { required: "Assigned property is required" })}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Greenview Complex"
            />
            {errors.assignedProperty && <p className="text-red-600 text-sm">{errors.assignedProperty.message}</p>}
          </div>
        )}

        <Button className="w-full" type="submit" disabled={submitting}>
          {submitting ? "Registering..." : "Register"}
        </Button>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </SectionWrapper>
  );
}
