# Smart Expense Tracker

This is a full-stack expense tracking project I'm building to learn backend development and experiment with AI-based financial insights.

Right now the project is in an **early prototype stage**. The main functionality working is adding expenses and storing them in a PostgreSQL database through a Node.js backend.

The AI analysis part is still under development.

---

## Tech Stack

Frontend

* React (Vite)

Backend

* Node.js
* Express

Database

* PostgreSQL

AI (Experimental)

* Google Gemini API

---

## What Works Right Now

* Adding expenses manually
* Saving expenses in PostgreSQL
* Basic API endpoints
* Backend structure for AI analysis

---

## What Is Still In Progress

* AI analysis of spending patterns
* Better dashboard and visualization
* Cleaner UI
* Automatic expense categorization
* More useful financial insights

Right now the AI report endpoint exists but the analysis part is still unreliable.

---

## Project Structure

```
smart-expense-tracker

frontend/
React UI

backend/
Express server
Routes and controllers
PostgreSQL connection
AI service (experimental)
```

---

## Running the Project

### Backend

```
cd backend
npm install
npm run dev
```

You also need a `.env` file with database credentials.

---

### Frontend

```
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Goal of This Project

The idea is to eventually turn this into a **smart expense tracker that can analyze spending behavior and give useful suggestions** using AI.

---

## Author

Neel Wankhade
