# 🧠 Fullstack Assignment: Random Fact Fetcher + Prime Number Checker

This project includes two parts:

1. **Frontend (Vite + React + TypeScript)** – A simple webpage with a button that fetches a random fact using a public API.
2. **Backend (Node.js)** – An API endpoint that checks if a number is a prime number.

---

## 🔗 Live Demo

You can test the frontend by running it locally as described below. Backend runs on `http://localhost:3001`.

---

## 📁 Folder Structure
```bash
├── frontend # React-based frontend using Vite + TypeScript
└── backend # Node.js backend with a prime-checking endpoint
```

---

## 🚀 Frontend: Random Fact Fetcher

### 📦 Tech Stack
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### 🛠 Setup Instructions

```bash
cd frontend
npm install
npm run dev
```

## 🌐 What It Does
### Displays a button.

When clicked, fetches a random fact from https://catfact.ninja/fact.

Uses async/await for clean and readable API calls.

## 🔧 Backend: Prime Number Checker
📦 Tech Stack
Node.js (no external frameworks)

## setup instructions
```bash
cd backend
node index.js
```

## 📡 API Endpoint
### test using browser
```bash
http://localhost:3001/is-prime?number=29
```
### test using curl
```bash
curl "http://localhost:3001/is-prime?number=17"
# Output: {"number":17,"isPrime":true}

curl "http://localhost:3001/is-prime?number=4"
# Output: {"number":4,"isPrime":false}
```
## author
### Devvrat Singh Panwar.

