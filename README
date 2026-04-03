# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for a finance dashboard that manages financial records, user roles, and access control. It provides secure APIs for handling transactions, user management, and summary analytics.

The system is designed with a focus on **clean architecture, role-based access control, and efficient data processing**.

---

## ⚙️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT Authentication**
* **bcryptjs (Password Hashing)**

---

## 🚀 Features

### 🔐 Authentication

* User Registration
* User Login with JWT Token

### 👤 User & Role Management

* Roles: **Viewer, Analyst, Admin**
* Admin can:

  * View all users
  * Update user roles and status
* User status: Active / Inactive

---

### 💰 Financial Records Management

* Create, Read, Update, Delete financial records
* Fields:

  * Amount
  * Type (Income / Expense)
  * Category
  * Date
  * Description
* Filtering support:

  * By type
  * By category
  * By date range

---

### 📊 Dashboard Summary API

Provides aggregated insights:

* Total Income
* Total Expense
* Net Balance
* Category-wise totals
* Recent transactions (latest 5)

---

### 🔐 Role-Based Access Control

| Role    | Permissions                             |
| ------- | --------------------------------------- |
| Viewer  | View summary only                       |
| Analyst | View records + summary                  |
| Admin   | Full access (users + records + summary) |

---

## 📡 API Endpoints

### 🔹 Auth Routes

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login & get token

---

### 🔹 User Routes (Admin Only)

* `GET /api/users` → Get all users
* `PATCH /api/users/:id` → Update user role/status

---

### 🔹 Financial Records Routes

* `POST /api/records` → Create record (Admin)
* `GET /api/records` → Get records (Analyst + Admin)
* `PATCH /api/records/:id` → Update record (Admin)
* `DELETE /api/records/:id` → Delete record (Admin)

---

### 🔹 Summary Route

* `GET /api/summary` → Dashboard summary (All roles)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <repo-link>
cd fin-assign
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 🧪 Testing

* APIs tested using **Postman**
* JWT used for secured endpoints
* Role-based access verified with multiple users

---

## 👨‍💻 Author

**Amit Wala**
