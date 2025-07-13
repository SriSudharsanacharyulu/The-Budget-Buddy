# ✨ The Budget Buddy

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live](https://img.shields.io/badge/demo-online-success)](https://the-budget-buddy-ezj94n2t2.vercel.app/)

🚀 A full-stack web app to help you plan and track your trip budgets — stress-free and beautifully.

---

## 📋 Table of Contents
- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [📸 Screenshots](#-screenshots)
- [🚀 Live Demo](#-live-demo)
- [🛠️ Local Development](#-️local-development)
  - [🔷 Frontend](#-frontend)
  - [🔷 Backend](#-backend)
- [📄 Environment Variables](#-environment-variables)
- [🌐 Deployment](#-deployment)
- [📜 License](#-license)
- [👋 About](#-about)

---

## ✨ Features
✅ Plan trip costs for multiple people  
✅ Save and view your trip history  
✅ Delete trips from history  
✅ Beautiful, responsive UI (works on mobile & desktop)  
✅ Fully deployed & accessible online  

---

## 🧰 Tech Stack
- 🔷 **Frontend:** React, TailwindCSS, Framer Motion, Shadcn UI
- 🔷 **Backend:** Node.js, Express, MongoDB (Atlas)
- 🔷 **Deployment:** Vercel (Frontend) & Render (Backend)

---

## 📸 Screenshots
*(Add your own screenshots here if you wish — Landing Page, Calculator Page, History Section, Mobile view, etc.)*

---

## 🚀 Live Demo
🌐 [Frontend](https://the-budget-buddy-ezj94n2t2.vercel.app/)  
🌐 [Backend API](https://the-budget-buddy.onrender.com/api/trips)

---

# 🛠️ Local Development

If you want to run it locally on your machine instead of the live version:

---

## 🔷 Frontend

### 📂 Path: `/client`

This contains the **React app** which runs the user interface.

### Run Frontend:
```bash
cd client
npm install
npm start
➡️ Frontend will start on:
http://localhost:3000

Frontend Features:
Landing Page with animated title, tagline, & button

Calculator Page: enter trip details, calculate total

View history of saved trips

Delete trips from history

Fully responsive and mobile-friendly

🔷 Backend
📂 Path: /server
This contains the Node.js + Express server, connected to MongoDB Atlas.

Run Backend:
bash
Copy
Edit
cd server
npm install
npm start
➡️ Backend will start on:
http://localhost:5000

Backend Features:
REST API with the following endpoints:

POST /api/trips → save a trip

GET /api/trips → get all trips

DELETE /api/trips/:id → delete a trip

Stores trip data in MongoDB Atlas

📄 Environment Variables
For backend (/server), you need a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Replace your_mongodb_connection_string with the MongoDB URI from your Atlas cluster.

🌐 Deployment
Frontend
✅ Deployed to Vercel
→ Live Frontend

Backend
✅ Deployed to Render
→ Live Backend

📜 License
MIT — feel free to fork & build upon!

👋 About
Built with ❤️ by Sri Sudharsanacharyulu


📫 Connect with me:
GitHub | LinkedIn

#webdevelopment #reactjs #fullstackdeveloper #learning