# Quillora

> A MERN-stack blogging platform integrated with Gemini AI for assisted writing.

(https://img.shields.io/github/last-commit/swetasingh08/Quillora?style=for-the-badge&logo=github) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 📝 Description

Quillora is a full-stack blogging platform designed to streamline the process of creating, editing, and publishing articles online. By pairing a modern web interface with Gemini AI capabilities, it provides users with an assistant tool directly in the writing workflow, helping writers draft, structure, and refine their articles with ease. The platform provides structured content organization via categories and standard user interactions such as a built-in commenting system. At its core, Quillora separates concerns into a reactive client application and a decoupled API server. The frontend is built with React, styled using Tailwind CSS, and animated with Framer Motion, while the backend relies on Node.js and Express to manage resources. Data storage and integrity are handled using MongoDB Atlas and Mongoose, providing a secure and scalable architecture deployed smoothly on Vercel.

## ✨ Key Features

- **🤖 Gemini AI Writing Assistance** — Draft and refine blog posts directly within the content editor leveraging the Gemini API.
- **📝 Full Blog Lifecycle Management** — Create, edit, and delete blogs with support for categorization and responsive layouts.
- **🛠️ Decoupled REST API Architecture** — Utilizes structured Node.js and Express routes divided into admin operations and blog content APIs.
- **🎨 Tailwind and Framer Motion UI** — A clean, responsive user interface built using Tailwind CSS with fluid transition animations.
- **💾 Structured MongoDB Persistence** — Uses Mongoose schemas to safely model and store blog posts, admin details, and comments in MongoDB.

## 🎯 Use Cases

- Hosting a private or public personal blog with integrated AI assistance to expedite writing drafts.
- Learning how to integrate the Gemini API with a Node.js, Express, and React full-stack application.
- Deploying a scalable MERN application with separate frontend and backend deployments on Vercel.

## 🛠️ Tech Stack

- 🐳 **Docker**
- 🟨 **JavaScript**
- ⚛️ **React**
- 🌬️ **Tailwind CSS**
- ⚡ **Vite**

**Notable libraries:** Framer Motion

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/swetasingh08/Quillora.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## 📦 Key Dependencies

```
@tailwindcss/vite: ^4.2.4
axios: ^1.16.1
framer-motion: ^12.38.0
install: ^0.13.0
marked: ^18.0.4
moment: ^2.30.1
quill: ^2.0.3
react: ^19.2.5
react-dom: ^19.2.5
react-hot-toast: ^2.6.0
react-router-dom: ^7.14.2
tailwindcss: ^4.2.4
```

## 🚀 Available Scripts

- **dev** — `npm run dev`
- **build** — `npm run build`
- **lint** — `npm run lint`
- **preview** — `npm run preview`

## 🌐 API Endpoints

Detected endpoints (best-effort scan):

```
GET /
```

## 📁 Project Structure

```
.
├── client
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── add_icon.svg
│   │   │   ├── arrow.svg
│   │   │   ├── assets.js
│   │   │   ├── bin_icon.svg
│   │   │   ├── blog_icon.png
│   │   │   ├── blog_pic_1.png
│   │   │   ├── blog_pic_10.png
│   │   │   ├── blog_pic_2.png
│   │   │   ├── blog_pic_3.png
│   │   │   ├── blog_pic_4.png
│   │   │   ├── blog_pic_5.png
│   │   │   ├── blog_pic_6.png
│   │   │   ├── blog_pic_7.png
│   │   │   ├── blog_pic_8.png
│   │   │   ├── blog_pic_9.png
│   │   │   ├── comment_icon.svg
│   │   │   ├── cross_icon.svg
│   │   │   ├── dashboard_icon_1.svg
│   │   │   ├── dashboard_icon_2.svg
│   │   │   ├── dashboard_icon_3.svg
│   │   │   ├── dashboard_icon_4.svg
│   │   │   ├── email_icon.png
│   │   │   ├── facebook_icon.svg
│   │   │   ├── favicon.svg
│   │   │   ├── googleplus_icon.svg
│   │   │   ├── gradientBackground.png
│   │   │   ├── hero.png
│   │   │   ├── home_icon.svg
│   │   │   ├── list_icon.svg
│   │   │   ├── logo.svg
│   │   │   ├── logo_light.svg
│   │   │   ├── react.svg
│   │   │   ├── rich-text-css.txt
│   │   │   ├── star_icon.svg
│   │   │   ├── tick_icon.svg
│   │   │   ├── twitter_icon.svg
│   │   │   ├── upload_area.svg
│   │   │   ├── user_icon.svg
│   │   │   └── vite.svg
│   │   ├── components
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogList.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   └── admin
│   │   │       ├── BlogTableItem.jsx
│   │   │       ├── CommentTableItem.jsx
│   │   │       ├── Login.jsx
│   │   │       └── Sidebar.jsx
│   │   ├── context
│   │   │   └── AppContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages
│   │       ├── Blog.jsx
│   │       ├── Home.jsx
│   │       └── admin
│   │           ├── AddBlog.jsx
│   │           ├── Comments.jsx
│   │           ├── Dashboard.jsx
│   │           ├── Layout.jsx
│   │           └── ListBlog.jsx
│   ├── vercel.json
│   └── vite.config.js
├── docker-compose.yml
└── server
    ├── Dockerfile
    ├── configs
    │   ├── db.js
    │   ├── gemini.js
    │   └── imageKit.js
    ├── controllers
    │   ├── adminController.js
    │   └── blogController.js
    ├── middleware
    │   ├── auth.js
    │   └── multer.js
    ├── models
    │   ├── Blog.js
    │   └── Comment.js
    ├── package.json
    ├── routes
    │   ├── adminRoutes.js
    │   └── blogRoutes.js
    ├── server.js
    └── vercel.json
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

### Docker
1. `docker build -t my-app .`
2. `docker run -p 3000:3000 my-app`

## 🚢 Deployment

### Docker
```bash
docker build -t quillora .
docker run -p 3000:3000 quillora
```

### Docker Compose
```bash
docker compose up -d
```

### Vercel

This project is configured for [Vercel](https://vercel.com). Push to the connected branch or run `vercel` locally.

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/swetasingh08/Quillora.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---
*This README was generated with ❤️ by [ReadmeBuddy](https://readmebuddy.com)*
