
<img src="https://capsule-render.vercel.app/api?type=waving&color=0A66C2&height=180&section=header&text=Linkastra&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=A%20Full-Stack%20Professional%20Networking%20Platform&descAlignY=58&descSize=18&descColor=A8D4F5" width="100%"/>


<div align="center">

# 🔗 Linkastra

### A Full-Stack Professional Networking Platform

*LinkedIn Clone · Built with Next.js, Node.js & Redux Toolkit*

![Status](https://img.shields.io/badge/Status-In%20Development-2ECC71?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-Next.js%20%2B%20Node.js-0E76A8?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Full--Stack-8E44AD?style=for-the-badge)

</div>

---

## 📋 Project Overview

**Linkastra** is a full-stack professional networking platform inspired by LinkedIn, designed to demonstrate real-world engineering competencies — including relational database design, RESTful API architecture, token-based security, file management, and modern React state management at scale.

> 🚧 **Currently in active development.**  
> Core backend APIs are complete and the frontend feed is functional — displaying posts in a card-based UI via live API integration.

| Field | Details |
|---|---|
| **Project Name** | Linkastra |
| **Type** | Full-Stack Web Application (LinkedIn Clone) |
| **Status** | In Development — Feed API integrated & rendering on frontend |
| **Architecture** | Monorepo · `/backend` (Node.js/Express) · `/frontend` (Next.js) |
| **Deployment Target** | Render *(planned)* |
| **Auth Strategy** | Token-Based Authentication (JWT + bcrypt) |

---

## ✨ Features

### ✅ Implemented
- User registration & login with **bcrypt** password hashing
- **JWT** token-based authentication & protected routes
- Post creation and retrieval via RESTful APIs
- Frontend feed — posts rendered in a **responsive card view**
- File upload support (profile pictures, media attachments)
- Modular backend: controllers, models, routes, uploads

### 📋 Planned / In Progress
- Connection request system (send, accept, reject) with full state management
- User profiles with experience, education & skills sections
- **PDF export** of profile / resume *(Project FUGU — Web APIs integration)*
- Biometric / hardware-based authentication *(Project FUGU — WebAuthn)*
- Notifications feed
- Full deployment pipeline on Render

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with SSR & file-based routing |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management |
| [Axios](https://axios-http.com/) | HTTP client for API communication |

### Backend
| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) | REST API server |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | Password hashing |
| [JWT](https://jwt.io/) | Stateless token-based auth |

### Tooling & Deployment
| Technology | Purpose |
|---|---|
| REST HTTP Client | API testing during development |
| [Render](https://render.com/) | Cloud deployment *(planned)* |

---

## 📁 Project Structure

```
Linkastra/
├── backend/
│   ├── controllers/     # Route handler logic
│   ├── models/          # Database models / schemas
│   ├── routes/          # API route definitions
│   ├── uploads/         # File upload storage
│   ├── .env             # Environment variables (not committed)
│   ├── api.http         # REST HTTP client collection
│   └── server.js        # Express app entry point
├── frontend/
│   ├── src/             # Next.js app source
│   ├── public/          # Static assets
│   ├── .next/           # Next.js build output (not committed)
│   └── next.config.mjs  # Next.js configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- A running database instance (configured via `.env`)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/Linkastra.git
cd Linkastra
```

**2. Setup & run the backend**
```bash
cd backend
npm install
# Add your DB credentials and JWT_SECRET to .env
node server.js
```

**3. Setup & run the frontend**
```bash
cd ../frontend
npm install
npm run dev
```

The app will be available at **http://localhost:3000**

---

## 💡 Key Engineering Concepts

| Concept | Description |
|---|---|
| **Token Auth (JWT)** | Stateless authentication via signed JWT tokens, with bcrypt for secure password hashing at rest |
| **Redux Toolkit** | Centralized global state for connection request flows, auth state, and feed data |
| **File Upload** | Multipart form handling on the Express backend; files persisted under `/uploads` |
| **Project FUGU** | Google Chrome initiative bridging native device hardware to web apps — enabling PDF export, biometric login (WebAuthn), and WebGPU-backed features via browser APIs |

---

## 🗺️ Development Roadmap

| Phase | Milestone | Status |
|:---:|---|:---:|
| 1 | Database design & schema | ✅ Complete |
| 2 | Backend REST APIs (auth, posts, users) | ✅ Complete |
| 3 | Frontend feed — post cards via API | ✅ Complete |
| 4 | Connection request system | 🔄 In Progress |
| 5 | Full profile pages | 📋 Planned |
| 6 | PDF export (Project FUGU) | 📋 Planned |
| 7 | WebAuthn biometric auth | 📋 Planned |
| 8 | Deployment on Render | 📋 Planned |

---

## ☁️ Deployment

Linkastra is planned for deployment on **Render**, hosting both services separately:

- **Backend** — Node.js web service on Render
- **Frontend** — SSR Next.js service on Render
- Environment variables managed via Render's dashboard *(never committed to source)*

---

## 📌 Note

> This project is actively under development. Features marked as *Planned* will be implemented in upcoming iterations. The README will be updated as development progresses.

---

<div align="center">

Built with ❤️ by **Dimple** &nbsp;·&nbsp; Linkastra © 2025
</div>