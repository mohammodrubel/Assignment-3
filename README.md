# Blog Project - Assignment 3

## Overview
This project is a backend for a blogging platform that allows users to write, update, and delete blogs. The system features role-based access control with two roles:

- **Admin**: Manages users and their blogs.
- **User**: Creates, updates, and deletes their own blogs.

The application includes secure authentication, role-based authorization, and a public API for viewing blogs with search, sort, and filter functionalities.

---

## Live Demo
- **Live Link**: [Blog Project](https://blog-application-rouge.vercel.app/)

## Video Demonstration
- **Video Link**: [Demonstration Video](https://drive.google.com/drive/folders/1yVb4AylFPSr_slSrWGKpeC5VMW1Yev7n?usp=sharing)

## Source Code
- **GitHub Repository**: [Assignment-3 Repository](https://github.com/mohammodrubel/Assignment-3)

---

## Admin Credentials
- **Email**: `far@gmail.com`
- **Password**: `far@gmail.com`

---

## Features
### User Roles
1. **Admin**:
   - Can delete any blog.
   - Can block any user by updating the `isBlocked` property.
   - Cannot update any blog.
2. **User**:
   - Can register and log in.
   - Can create, update, and delete their own blogs.
   - Cannot perform admin actions.

### Authentication & Authorization
- **Authentication**: Users must log in to perform write, update, and delete operations.
- **Authorization**: Differentiates between Admin and User roles.

### Blog API
A public API to:
- Read blogs with title, content, author details, and other information.
- Search, sort, and filter blogs.

---

## Models
### User Model
```ts
{
  name: string; // Full name of the user
  email: string; // User email address
  password: string; // Hashed password
  role: "admin" | "user"; // User role (default: "user")
  isBlocked: boolean; // Flag to indicate if user is blocked (default: false)
  createdAt: Date; // Timestamp when user was created
  updatedAt: Date; // Timestamp of the last user update
}
```

### Blog Model
```ts
{
  title: string; // Blog post title
  content: string; // Main content of the blog
  author: ObjectId; // Reference to the User model
  isPublished: boolean; // Publication status (default: true)
  createdAt: Date; // Timestamp when blog was created
  updatedAt: Date; // Timestamp of the last blog update
}
```

---

## API Endpoints

### 1. Authentication
#### 1.1 Register User
**Endpoint**: `POST /api/auth/register`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
**Response**:
- Success: `201 Created`
- Failure: `400 Bad Request`

#### 1.2 Login User
**Endpoint**: `POST /api/auth/login`

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
**Response**:
- Success: `200 OK` (Returns JWT token)
- Failure: `401 Unauthorized`

### 2. Blog Management
#### 2.1 Create Blog
**Endpoint**: `POST /api/blogs`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```
**Response**:
- Success: `201 Created`
- Failure: `401 Unauthorized`

#### 2.2 Update Blog
**Endpoint**: `PATCH /api/blogs/:id`

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```
**Response**:
- Success: `200 OK`
- Failure: `401 Unauthorized`

#### 2.3 Delete Blog
**Endpoint**: `DELETE /api/blogs/:id`

**Headers**: `Authorization: Bearer <token>`

**Response**:
- Success: `200 OK`
- Failure: `401 Unauthorized`

#### 2.4 Get All Blogs (Public)
**Endpoint**: `GET /api/blogs`

**Query Parameters**:
- `search`: Filter blogs by title or content.
- `sortBy`: Sort blogs by fields like `createdAt` or `title`.
- `sortOrder`: Sort order (`asc` or `desc`).
- `filter`: Filter blogs by `author` ID.

**Response**:
- Success: `200 OK`
- Failure: `400 Bad Request`

### 3. Admin Actions
#### 3.1 Block User
**Endpoint**: `PATCH /api/admin/users/:userId/block`

**Headers**: `Authorization: Bearer <admin_token>`

**Response**:
- Success: `200 OK`
- Failure: `401 Unauthorized`

#### 3.2 Delete Blog
**Endpoint**: `DELETE /api/admin/blogs/:id`

**Headers**: `Authorization: Bearer <admin_token>`

**Response**:
- Success: `200 OK`
- Failure: `401 Unauthorized`

---

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mohammodrubel/Assignment-3.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Assignment-3
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory and provide values for:
     ```env
     PORT=5000
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     ```
5. Start the server:
   ```bash
   npm start
   ```
6. Access the API at: `http://localhost:5000`

---

## Technologies Used
- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---