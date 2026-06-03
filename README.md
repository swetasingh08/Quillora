# Quillora

A MERN-stack blogging platform integrated with Gemini AI for assisted writing.

(![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)



## 📑 Table of Contents

- [🌐 Live Demo](#-live-demo)
- [📝 Description](#-description)
- [✨ Key Features](#-key-features)
- [🎯 Use Cases](#-use-cases)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Key Dependencies](#-key-dependencies)
- [🚀 Commands and Scripts](#-commands-and-scripts)
- [🌐 API Endpoints](#-api-endpoints)
- [📁 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
- [🛠️ Development Setup](#️-development-setup)
- [👥 Contributing](#-contributing)
- [📄 License](#-license)

## 🌐 Live Demo

This project is configured for [Vercel](https://vercel.com) with separate frontend and backend deployments:

| Environment | URL |
|-------------|-----|
| 🖥️ **Frontend** | https://quillora-pearl.vercel.app/ |
| 🚂 **Backend API** | https://quillora-server.vercel.app/ |

## 📝 Description

Quillora is a full-stack blogging platform designed to streamline the process of creating, editing, and publishing articles online. By pairing a modern web interface with **Gemini AI** 🧠 capabilities, it provides users with an assistant tool directly in the writing workflow, helping writers draft, structure, and refine their articles with ease.

The platform provides structured content organization through categories, rich article management features, and a built-in commenting system that encourages community interaction and engagement.

At its core, Quillora follows a decoupled architecture, separating concerns between a responsive client application and a scalable backend API. The frontend is built with **React** ⚛️, styled using **Tailwind CSS** 🌬️, and enhanced with smooth animations powered by **Framer Motion** 🎭. The backend leverages **Node.js** and **Express** 🚂 to handle authentication, content management, and API operations efficiently.

Data persistence and integrity are ensured through **MongoDB Atlas** 🍃 and **Mongoose** 🦦, providing a secure and scalable database solution. The application is deployed on **Vercel** ▲ for seamless cloud hosting and continuous deployment.

To improve portability, consistency, and deployment flexibility, Quillora also supports **Docker** 🐳 containerization. Docker enables developers to package the application and its dependencies into isolated containers, ensuring a consistent environment across development, testing, and production systems. Additionally, **Docker Compose** simplifies multi-service orchestration, making it easy to manage the frontend, backend, and supporting services with a single command.

Whether deployed on Vercel, cloud infrastructure, or self-hosted servers, Quillora offers a modern, scalable, and developer-friendly blogging ecosystem powered by AI-assisted content creation.


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
| 🟨 **JavaScript** | Core programming language |
| ⚛️ **React** | Frontend UI library |
| ⚡ **Vite** | Build tool & development server |
| 🌬️ **Tailwind CSS** | Utility-first CSS framework |
| 🎭 **Framer Motion** | UI animations and transitions |
| 🚂 **Node.js** | JavaScript runtime environment |
| 🚀 **Express.js** | Backend API and server framework |
| 🍃 **MongoDB Atlas** | Cloud-hosted NoSQL database |
| 🦦 **Mongoose** | MongoDB object modeling and schema management |
| 🧠 **Google Gemini AI** | AI-powered content generation and assistance |
| 🖼️ **ImageKit** | Image upload, storage, and optimization |
| 🔐 **JWT (jsonwebtoken)** | Authentication and authorization |
| 📤 **Multer** | File upload handling middleware |
| 🌐 **CORS** | Cross-Origin Resource Sharing support |
| ⚙️ **Dotenv** | Environment variable management |
| ▲ **Vercel** | Application deployment and hosting |
| 🐳 **Docker** | Containerization and environment consistency |
| 🐙 **Git & GitHub** | Version control and collaboration |
**📚 Notable libraries:** Framer Motion 🎭

## 📦 Key Dependencies

 📦 Frontend Dependencies

| Package | Version | Purpose |
|----------|----------|----------|
| `react` | ^19.2.5 | ⚛️ Frontend UI library |
| `react-dom` | ^19.2.5 | 🖥️ React DOM rendering |
| `react-router-dom` | ^7.14.2 | 🧭 Client-side routing |
| `axios` | ^1.16.1 | 🌐 HTTP client for API communication |
| `tailwindcss` | ^4.2.4 | 💨 Utility-first CSS framework |
| `@tailwindcss/vite` | ^4.2.4 | 🎨 Tailwind CSS integration with Vite |
| `framer-motion` | ^12.38.0 | 🎭 Animations and transitions |
| `quill` | ^2.0.3 | ✍️ Rich text editor |
| `marked` | ^18.0.4 | 📝 Markdown parsing and rendering |
| `moment` | ^2.30.1 | 📅 Date formatting and manipulation |
| `react-hot-toast` | ^2.6.0 | 🔔 Toast notifications |

---

 📦 Backend Dependencies

| Package | Version | Purpose |
|----------|----------|----------|
| `express` | ^5.2.1 | 🚀 Backend web framework |
| `mongoose` | ^9.6.2 | 🍃 MongoDB object modeling |
| `@google/genai` | ^2.6.0 | 🧠 Gemini AI integration |
| `jsonwebtoken` | ^9.0.3 | 🔐 Authentication & authorization |
| `multer` | ^2.1.1 | 📤 File upload handling |
| `imagekit` | ^6.0.0 | 🖼️ Image storage and optimization |
| `cors` | ^2.8.6 | 🌐 Cross-Origin Resource Sharing |
| `dotenv` | ^17.4.2 | ⚙️ Environment variable management |

---

 🏗️ Architecture Summary

```text
Frontend
├── React 19
├── React Router
├── Tailwind CSS
├── Framer Motion
├── Quill Editor
└── Axios

Backend
├── Node.js
├── Express.js
├── MongoDB Atlas
├── Mongoose
├── Gemini AI
├── JWT Authentication
├── Multer
└── ImageKit

DevOps
├── Docker
├── Docker Compose
├── GitHub
└── Vercel
```


## 🚀 Commands and Scripts


 🚀 Available Scripts
 

| Script | Command | Description |
|----------|----------|----------|
| 🟢 **dev** | `npm run dev` | Start Vite development server with React 19 and hot reload |
| 🏗️ **build** | `npm run build` | Create an optimized production build |
| 🔍 **lint** | `npm run lint` | Run ESLint to check code quality and maintain code standards |
| 👁️ **preview** | `npm run preview` | Preview the production build locally before deployment |

---

 🐳 Docker Commands
 

| Command | Description |
|----------|----------|
| `docker compose up --build` | Build and start all services |
| `docker compose up` | Start existing containers |
| `docker compose down` | Stop and remove all containers |
| `docker compose logs -f` | View container logs in real time |
| `docker compose restart` | Restart all services |

---

📦 Package Management

| Command | Description |
|----------|----------|
| `npm install` | Install project dependencies |
| `npm update` | Update installed packages |
| `npm audit fix` | Fix known dependency vulnerabilities |

## 🌐 API Endpoints

📝 Blog Routes

| Method | Endpoint | Description |
|----------|----------|----------|
| `GET` | `/api/blog/all` | Get all published blogs |
| `GET` | `/api/blog/:blogId` | Get a single blog by ID |
| `GET` | `/api/blog/comment/:blogId` | Get comments for a specific blog |
| `POST` | `/api/blog/add-comment` | Add a comment to a blog |
| `POST` | `/api/blog/generate` | Generate blog content using Gemini AI *(Protected)* |
| `POST` | `/api/blog/toggle-publish` | Toggle blog publish status *(Protected)* |
| `POST` | `/api/blog/delete` | Delete a blog *(Protected)* |

---

 👨‍💼 Admin Routes

| Method | Endpoint | Description |
|----------|----------|----------|
| `POST` | `/api/admin/login` | Admin authentication |
| `GET` | `/api/admin/comment` | Get all comments *(Protected)* |
| `GET` | `/api/admin/blogs` | Get all blogs for admin dashboard *(Protected)* |
| `GET` | `/api/admin/dashboard` | Get dashboard statistics *(Protected)* |
| `POST` | `/api/admin/approve-comment` | Approve a comment *(Protected)* |
| `POST` | `/api/admin/delete-comment` | Delete a comment *(Protected)* |

---

> **Protected Routes:** Require a valid JWT token in the request headers.



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

## ⚡ Quick Start

### Using Docker Compose (Recommended)

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd quillora

# Start all services
docker compose up -d
```

Open:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

---

## 🛠️ Development Setup

### 💻 Local Development

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd quillora
```

### 📦 Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

### 🚀 Run Development Servers

#### Frontend

```bash
cd client
npm run dev
```

#### Backend

```bash
cd server
npm run dev
```

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t quillora .
```

### Run Docker Container

```bash
docker run -p 3000:3000 quillora
```

---

## 🐳 Docker Compose

### Start All Services

```bash
docker compose up -d
```

### View Logs

```bash
docker compose logs -f
```

### Stop All Services

```bash
docker compose down
```

### Rebuild Containers

```bash
docker compose up --build
```

---

## ☁️ Deployment

### Vercel

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod
```
## 👥 Contributing

Contributions are welcome! 🎉 Here's the standard workflow:

1. 🍴 **Fork** the repository

2. 📥 **Clone** your fork:

   ```bash
   git clone https://github.com/swetasingh08/Quillora.git
   ```

3. 🌿 **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

4. 💾 **Commit your changes**:

   ```bash
   git commit -m "feat: add some feature"
   ```

5. 📤 **Push to your branch**:

   ```bash
   git push origin feature/your-feature
   ```

6. 🎯 **Open a Pull Request**

Please follow the existing code style and include tests for new behavior where applicable.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### ⭐ Don't forget to star this repo if you found it helpful! ⭐

</div>


                  


