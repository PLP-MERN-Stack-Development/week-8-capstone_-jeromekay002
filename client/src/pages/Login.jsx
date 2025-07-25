import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SectionWrapper from "../components/ui/SectionWrapper";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      // Role-based redirect
      if (user.role === "landlord") navigate("/landlord-dashboard");
      else if (user.role === "caretaker") navigate("/caretaker-dashboard");
      else if (user.role === "tenant") navigate("/tenant-dashboard");
      else if (user.role === "admin") navigate("/admin-dashboard");
      else navigate("/dashboard"); // fallback
      
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper className="max-w-md mx-auto">
      <Title text="Login to RealEase" />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded px-4 py-2"
            type="email"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            className="w-full border border-gray-300 rounded px-4 py-2"
            type="password"
            placeholder="********"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
        </div>

        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <p className="text-sm text-gray-600 text-center">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </form>
    </SectionWrapper>
  );
}
