# MERN Stack Capstone Project

This assignment focuses on designing, developing, and deploying a comprehensive full-stack MERN application that showcases all the skills you've learned throughout the course.

## Assignment Overview

You will:
1. Plan and design a full-stack MERN application
2. Develop a robust backend with MongoDB, Express.js, and Node.js
3. Create an interactive frontend with React.js
4. Implement testing across the entire application
5. Deploy the application to production

## Getting Started

1. Accept the GitHub Classroom assignment
2. Clone the repository to your local machine
3. Follow the instructions in the `Week8-Assignment.md` file
4. Plan, develop, and deploy your capstone project

## Files Included

- `Week8-Assignment.md`: Detailed assignment instructions

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git and GitHub account
- Accounts on deployment platforms (Render/Vercel/Netlify/etc.)

## Project Ideas

The `Week8-Assignment.md` file includes several project ideas, but you're encouraged to develop your own idea that demonstrates your skills and interests.

## Submission

Your project will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Commit and push your code regularly
2. Include comprehensive documentation
3. Deploy your application and add the live URL to your README.md
4. Create a video demonstration and include the link in your README.md

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [GitHub Classroom Guide](https://docs.github.com/en/education/manage-coursework-with-github-classroom) 


## RealEase - real estate management system

## project overview 
### Features
## 🔐 Authentication
-Admin login & registration (JWT-based)

- Roles: Admin, Landlord, Caretaker, Tenant

## 🧑‍🤝‍🧑 Tenants/Caretakers Management
- Add / edit / delete tenants

- View authorized caretakers

- Assign caretaker to building or units

## 🏢 Landlord Management
- View landlords

- Assign properties

## 🧾 Real-time Group Chat
- Group chat between caretakers, tenants, admin

- Socket.io-based messaging

## 📄 Pages
- Landing Page (Home, About, Services, Contact)

- Admin Dashboard (multi-tabbed: Users, Chats, Tenants, etc.)

- Login & Registration

## Folder Structure (Frontend)

real-estate-app/
├── client/ (Vite + React + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
        │   ├── dashboard/
        │   │   ├── AdminDashboard.jsx
        │   │   ├── LandlordDashboard.jsx
        │   │   └── DashboardLayout.jsx
        │
        ├── components/
        │   ├── dashboard/
        │   │   ├── Sidebar.jsx
        │   │   ├── Topbar.jsx
        │   │   ├── Table.jsx
        │   │   ├── ProfileCard.jsx
        │   │   └── StatCard.jsx
        │   │   ├── layouts/
        │   │   ├── routes/
        │   │   ├── context/
        │   │   ├── hooks/
        │   │   ├── utils/
        │   │   ├── App.jsx
        │   │   └── main.jsx
│   └── vite.config.js
├── server/ (Express + MongoDB)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── README.md
└── package.json


## 🛠 Technologies Used

- **MongoDB** – NoSQL Database
- **Express.js** – Backend API
- **React.js** – Frontend UI
- **Node.js** – JavaScript runtime
- **TailwindCSS** – Utility-first CSS
- **Axios** – HTTP requests
- **Mongoose** – MongoDB ODM

---
## 🤝 Contributors

- **Jerome Kaloki** – Developer & Architect

## 📍 Target Audience

- Independent landlords
- Real estate agencies
- Property management companies
- Kenyan landlords and caretaker