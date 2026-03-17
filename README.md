# 📩 Spam Message Classifier (AI + FastAPI + Docker + Nginx)

A full-stack Machine Learning web application that classifies messages as **Spam** or **Not Spam** with a confidence score.
This project is built using **FastAPI**, **Scikit-learn**, and deployed using **Docker, Docker Compose, and Nginx (Reverse Proxy)**.

---

## 🚀 Features

* ✅ Spam vs Not Spam classification
* ✅ Confidence score (% probability)
* ✅ Modern responsive UI
* ✅ REST API with FastAPI
* ✅ Fully Dockerized (Frontend + Backend)
* ✅ Nginx Reverse Proxy for API routing
* ✅ Production-ready architecture

---

## 🧠 Tech Stack

### 🔹 Backend

* Python
* FastAPI
* Scikit-learn
* NLTK

### 🔹 Frontend

* HTML
* CSS
* JavaScript

### 🔹 DevOps / Deployment

* Docker
* Docker Compose
* Nginx (Reverse Proxy)

---

## 📁 Project Structure

```id="b2n6kz"
spam-classifier/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── services/
│   │   └── models/
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── nginx.conf
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites

* Docker installed
* Docker Compose installed

---

## ▶️ Run the Project

```bash id="1c2x42"
docker-compose up --build
```

---

## 🌐 Access the Application

| Service          | URL                        |
| ---------------- | -------------------------- |
| Frontend (Nginx) | http://localhost:3000      |
| Backend API Docs | http://localhost:8000/docs |

---

## 🔄 Architecture (Production Style)

```id="w3nq3q"
Browser
   ↓
Nginx (Frontend Container - Reverse Proxy)
   ↓
FastAPI Backend (API)
   ↓
Machine Learning Model
```

---

## 🔌 API Endpoint

### POST `/predict`

#### Request

```json id="f04z6p"
{
  "message": "Congratulations! You won a free iPhone"
}
```

#### Response

```json id="2v7v9c"
{
  "prediction": "Spam",
  "confidence": 92.4
}
```

---

## 🧠 How It Works

1. User enters a message in the UI
2. Frontend sends request to `/predict`
3. Nginx forwards request to backend (`FastAPI`)
4. Backend:

   * Cleans text using NLP
   * Converts text using TF-IDF vectorizer
   * Uses trained ML model for prediction
5. Returns:

   * Prediction (Spam / Not Spam)
   * Confidence score

---

## ⚠️ Common Issues

### ❌ Infinite "Checking..."

* Ensure Nginx proxy is configured correctly
* Check `nginx.conf` routing

---

### ❌ API not working

* Ensure backend container is running
* Check logs:

```bash id="gq03f0"
docker logs spam-backend
```

---

### ❌ CORS Error

* Ensure CORS middleware is enabled in FastAPI

---

## 🚀 Future Improvements

* 🔐 User Authentication (JWT)
* 📊 Analytics Dashboard
* 🗄️ Database integration (MongoDB/PostgreSQL)
* ☁️ Cloud Deployment (AWS / Render)
* 📱 Mobile responsiveness improvements

---

## 👨‍💻 Author

**Dhruv Sharma**

---

## ⭐ Resume Highlight

> Built a full-stack AI-based Spam Classifier using FastAPI and Scikit-learn, deployed via Docker with Nginx as a reverse proxy, implementing a microservices architecture with real-time predictions and confidence scoring.

---

## 📜 License

This project is open-source and available under the MIT License.
