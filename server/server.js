// server/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// routes 
const tenantRoutes = require('./routes/tenantRoutes');
const caretakerRoutes = require('./routes/caretakerRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const landlordRoutes = require('./routes/landlordRoutes');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

// Load environment variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (Example placeholder)
app.get("/", (req, res) => {
  res.send("API is running");
});

// Import routes
// app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', authRoutes); 
app.use('/api/tenants', tenantRoutes);
app.use('/api/caretakers', caretakerRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/landlords', landlordRoutes);
app.use('/api/stats', dashboardRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
