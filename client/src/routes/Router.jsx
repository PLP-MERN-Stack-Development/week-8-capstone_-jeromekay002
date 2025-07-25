import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
// import Dashboard from '../pages/admin/Dashboard';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import LandlordDashboard from '../pages/dashboard/LandlordDashboard';
// import Chat from '../pages/chat';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
      {/* Dashboard routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
      {/* <Route path="/chat" element={<Chat />} /> */}
    </Routes>
  );
}
