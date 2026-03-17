# 📩 Spam Message Classifier (AI + FastAPI + Docker)

A full-stack Machine Learning web application that classifies messages as **Spam** or **Not Spam** with a confidence score.
Built using **FastAPI**, **Scikit-learn**, and deployed using **Docker & Docker Compose**.

---

## 🚀 Features

- ✅ Spam vs Not Spam classification
- ✅ Confidence score (% probability)
- ✅ Clean and modern UI
- ✅ REST API with FastAPI
- ✅ Fully Dockerized (Backend + Frontend)
- ✅ Production-ready structure

---

## 🧠 Tech Stack

### 🔹 Backend

- Python
- FastAPI
- Scikit-learn
- NLTK

### 🔹 Frontend

- HTML
- CSS
- JavaScript

### 🔹 DevOps

- Docker
- Docker Compose
- Nginx

---

## 📁 Project Structure

```
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
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites

- Docker installed
- Docker Compose installed

---

## ▶️ Run the Project

```bash
docker-compose up --build
```

---

## 🌐 Access the App

| Service          | URL                        |
| ---------------- | -------------------------- |
| Frontend         | http://localhost:3000      |
| Backend API Docs | http://localhost:8000/docs |

---

## 🧪 API Endpoint

### POST `/predict`

#### Request Body

```json
{
  "message": "Congratulations! You won a free iPhone"
}
```

#### Response

```json
{
  "prediction": "Spam",
  "confidence": 92.4
}
```

---

## 🧠 How It Works

1. User enters a message in the UI
2. Frontend sends request to FastAPI backend
3. Backend:
   - Cleans text using NLP
   - Converts text to vectors
   - Uses trained ML model to predict

4. Returns:
   - Prediction (Spam / Not Spam)
   - Confidence score

---

## 📊 Model Details

- Algorithm: Naive Bayes / Logistic Regression
- Vectorization: TF-IDF
- NLP preprocessing using NLTK
- Stopword removal and text cleaning

---

## ⚠️ Common Issues

### ❌ API not working

- Check if backend container is running
- Ensure correct API URL (`http://backend:8000/predict`)

### ❌ CORS Error

- Make sure CORS middleware is enabled in FastAPI

---

## 🚀 Future Improvements

- 🔐 User authentication (login/signup)
- 📊 Dashboard for analytics
- ☁️ Cloud deployment (AWS / Render)
- 📦 Save predictions to database
- 📱 Mobile responsive UI

---

## 👨‍💻 Author

Dhruv Sharma

---

## ⭐ Contribute

Feel free to fork this project and improve it!

---

## 📜 License

This project is open-source and available under the MIT License.
