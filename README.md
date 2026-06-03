A MERN-stack blogging platform integrated with Gemini AI for assisted writing.

(![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)



## 📑 Table of Contents

- [🌐 Live Demo](#-live-demo)
- [📝 Description](#-description)
- [✨ Key Features](#-key-features)
- [🎯 Use Cases](#-use-cases)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Quick Start](#-quick-start)
- [📦 Key Dependencies](#-key-dependencies)
- [🚀 Available Scripts](#-available-scripts)
- [🌐 API Endpoints](#-api-endpoints)
- [📁 Project Structure](#-project-structure)
- [🛠️ Development Setup](#️-development-setup)
- [🚢 Deployment](#-deployment)
- [👥 Contributing](#-contributing)

## 🌐 Live Deployment

| Environment | URL |
|-------------|-----|
| 🖥️ **Frontend** | https://quillora-client.vercel.app |
| 🚂 **Backend API** | https://quillora-server.vercel.app |

## 📝 Description

Quillora is a full-stack blogging platform designed to streamline the process of creating, editing, and publishing articles online. By pairing a modern web interface with **Gemini AI** 🧠 capabilities, it provides users with an assistant tool directly in the writing workflow, helping writers draft, structure, and refine their articles with ease. The platform provides structured content organization via categories and standard user interactions such as a built-in commenting system. At its core, Quillora separates concerns into a reactive client application and a decoupled API server. The frontend is built with **React** ⚛️, styled using **Tailwind CSS** 🌬️, and animated with **Framer Motion** 🎭, while the backend relies on **Node.js** and **Express** 🚂 to manage resources. Data storage and integrity are handled using **MongoDB Atlas** 🍃 and **Mongoose** 🦦, providing a secure and scalable architecture deployed smoothly on **Vercel** ▲.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **Gemini AI Writing Assistance** | Draft and refine blog posts directly within the content editor leveraging the Gemini API |
| 📝 **Full Blog Lifecycle Management** | Create, edit, and delete blogs with support for categorization and responsive layouts |
| 🛠️ **Decoupled REST API Architecture** | Utilizes structured Node.js and Express routes divided into admin operations and blog content APIs |
| 🎨 **Tailwind and Framer Motion UI** | A clean, responsive user interface built using Tailwind CSS with fluid transition animations |
| 💾 **Structured MongoDB Persistence** | Uses Mongoose schemas to safely model and store blog posts, admin details, and comments in MongoDB |

## 🎯 Use Cases

- 🏠 Hosting a private or public personal blog with integrated AI assistance to expedite writing drafts
- 📚 Learning how to integrate the Gemini API with a Node.js, Express, and React full-stack application
- 🚀 Deploying a scalable MERN application with separate frontend and backend deployments on Vercel

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| 🐳 **Docker** | Containerization & environment consistency |
| 🟨 **JavaScript** | Core programming language |
| ⚛️ **React** | Frontend UI library |
| 🌬️ **Tailwind CSS** | Utility-first CSS framework |
| ⚡ **Vite** | Build tool & dev server |

**📚 Notable libraries:** Framer Motion 🎭

## ⚡ Quick Start

```bash

# 1. 📥 Clone the repository
git clone https://github.com/swetasingh08/Quillora.git

# 2. 📦 Install dependencies
npm install

# 3. 🚀 Start the dev server
npm run dev
```

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@tailwindcss/vite` | ^4.2.4 | 🎨 Tailwind CSS Vite integration |
| `axios` | ^1.16.1 | 🌐 HTTP client for API calls |
| `framer-motion` | ^12.38.0 | 🎭 Animation library |
| `marked` | ^18.0.4 | 📝 Markdown parser |
| `moment` | ^2.30.1 | 📅 Date manipulation |
| `quill` | ^2.0.3 | ✍️ Rich text editor |
| `react` | ^19.2.5 | ⚛️ UI library |
| `react-dom` | ^19.2.5 | 🖥️ DOM rendering |
| `react-hot-toast` | ^2.6.0 | 🔔 Toast notifications |
| `react-router-dom` | ^7.14.2 | 🧭 Client-side routing |
| `tailwindcss` | ^4.2.4 | 💨 Utility-first CSS |

## 🚀 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| 🟢 **dev** | `npm run dev` | Start development server with hot reload |
| 🏗️ **build** | `npm run build` | Build for production deployment |
| 🔍 **lint** | `npm run lint` | Run ESLint for code quality |
| 👁️ **preview** | `npm run preview` | Preview production build locally |

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | 🏠 Base endpoint / Health check |

> 💡 For complete API documentation, explore the [server routes](./server/routes/) directory.

## 📁 Project Structure

```
📁 Quillora/
├── 📁 client/                     ⚛️ Frontend React application
│   ├── 🐳 Dockerfile              Container config for client
│   ├── 📄 index.html              Entry HTML file
│   ├── 📦 package.json            Client dependencies
│   ├── 📁 public/                 📢 Static assets
│   │   ├── favicon.svg            ⭐ Site favicon
│   │   └── icons.svg              🎯 Icon sprites
│   ├── 📁 src/                    💻 Source code
│   │   ├── App.jsx                🏠 Root component
│   │   ├── 📁 assets/             🖼️ Images & icons
│   │   ├── 📁 components/         🧩 Reusable components
│   │   │   ├── BlogCard.jsx       📇 Blog card display
│   │   │   ├── BlogList.jsx       📋 Blog listing
│   │   │   ├── Footer.jsx         👣 Site footer
│   │   │   ├── Header.jsx         🎩 Site header
│   │   │   ├── Loader.jsx         ⏳ Loading spinner
│   │   │   ├── Navbar.jsx         🧭 Navigation bar
│   │   │   ├── Newsletter.jsx     📧 Email subscription
│   │   │   └── 📁 admin/          🔐 Admin components
│   │   │       ├── BlogTableItem.jsx
│   │   │       ├── CommentTableItem.jsx
│   │   │       ├── Login.jsx
│   │   │       └── Sidebar.jsx
│   │   ├── 📁 context/            🌐 App state management
│   │   │   └── AppContext.jsx
│   │   ├── 📁 pages/              📄 Page components
│   │   │   ├── Blog.jsx           📖 Single blog view
│   │   │   ├── Home.jsx           🏠 Homepage
│   │   │   └── 📁 admin/          🔐 Admin pages
│   │   │       ├── AddBlog.jsx    ✍️ Create new blog
│   │   │       ├── Comments.jsx   💬 Manage comments
│   │   │       ├── Dashboard.jsx  📊 Admin dashboard
│   │   │       ├── Layout.jsx     🖼️ Admin layout
│   │   │       └── ListBlog.jsx   📋 Blog management
│   │   ├── index.css              🎨 Global styles
│   │   └── main.jsx               🚀 Entry point
│   ├── vercel.json                ▲ Vercel deployment config
│   └── vite.config.js             ⚡ Vite configuration
├── 📁 server/                     🚂 Backend Express application
│   ├── 🐳 Dockerfile              Container config for server
│   ├── 📁 configs/                ⚙️ Configuration files
│   │   ├── db.js                  🍃 MongoDB connection
│   │   ├── gemini.js              🧠 Gemini AI config
│   │   └── imageKit.js            🖼️ Image handling config
│   ├── 📁 controllers/            🎮 Request handlers
│   │   ├── adminController.js     🔐 Admin logic
│   │   └── blogController.js      📝 Blog logic
│   ├── 📁 middleware/              🔗 Custom middleware
│   │   ├── auth.js                🔒 Authentication
│   │   └── multer.js              📤 File upload handling
│   ├── 📁 models/                 📊 Database schemas
│   │   ├── Blog.js                📝 Blog post model
│   │   └── Comment.js             💬 Comment model
│   ├── 📁 routes/                 🛣️ API route definitions
│   │   ├── adminRoutes.js         🔐 Admin endpoints
│   │   └── blogRoutes.js          📝 Blog endpoints
│   ├── 📦 package.json            Server dependencies
│   ├── server.js                  🚀 Server entry point
│   └── vercel.json                ▲ Vercel deployment config
└── 🐳 docker-compose.yml          Multi-container setup
```

## 🛠️ Development Setup

### 💻 Node.js / JavaScript
1. 📥 Install Node.js (v18+ recommended)
2. 📦 Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. 🚀 Start the dev server: see the **Quick Start** above

### 🐳 Docker
```bash
# 🏗️ Build the image
docker build -t my-app .

# 🚀 Run the container
docker run -p 3000:3000 my-app
```

## 🚢 Deployment

### ▲ Vercel (Recommended)

This project is configured for [Vercel](https://vercel.com) with separate frontend and backend deployments:

| Service | Deployment URL |
|---------|---------------|
| 🖥️ **Frontend** | [https://quillora-client.vercel.app](https://quillora-client.vercel.app) |
| 🚂 **Backend API** | [https://quillora-server.vercel.app](https://quillora-server.vercel.app) |

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### 🐳 Docker
```bash
docker build -t quillora .
docker run -p 3000:3000 quillora
```

### 🐳 Docker Compose
```bash
docker compose up -d
```

## 👥 Contributing

Contributions are welcome! 🎉 Here's the standard flow:

1. 🍴 **Fork** the repository
2. 📥 **Clone** your fork: `git clone https://github.com/swetasingh08/Quillora.git`
3. 🌿 **Branch**: `git checkout -b feature/your-feature`
4. 💾 **Commit**: `git commit -m 'feat: add some feature'`
5. 📤 **Push**: `git push origin feature/your-feature`
6. 🎯 **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---

<div align="center">

### ⭐ Don't forget to star this repo if you found it helpful! ⭐



</div>
