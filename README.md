# Backend Developer Intern Assignment

## Overview

This project implements a **secure and scalable REST API** with authentication and role-based access.
A simple **React frontend** is included to demonstrate interaction with the APIs.

The system allows users to register, login, and manage tasks using a protected dashboard.

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* bcrypt password hashing
* Swagger API documentation

### Frontend

* React.js
* Axios

---

## Features

### Authentication

* User Registration
* User Login
* Password hashing using bcrypt
* JWT based authentication

### Task Management

* Create task
* View tasks
* Update task
* Delete task

### Security

* Protected API routes
* JWT token validation
* Input validation

---

## API Endpoints

### Auth

POST /api/v1/auth/register
POST /api/v1/auth/login

### Tasks

GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

---

## Project Structure

backend/

* controllers
* models
* routes
* middleware
* config

frontend/

* components
* API integration

---

## Running the Project

### Backend

cd backend
npm install
npm run dev

### Frontend

cd frontend
npm install
npm start

---

## API Documentation

Swagger Docs:

http://localhost:5000/api-docs

---
React Frontend
      │
      ▼
Express REST API
      │
      ▼
MongoDB Database

---

## Database Schema

User

* name
* email
* password
* role

Task

* title
* description
* userId

---

## Author

Kuldeep Thakur
