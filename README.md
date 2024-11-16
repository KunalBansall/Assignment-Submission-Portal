# Assignment Submission Portal

A robust backend system for managing assignment submissions with user and admin functionality.

## Features

- User and Admin authentication
- Assignment submission system
- Assignment review system (accept/reject)
- OAuth2 integration
- JWT Authentication
- Role-Based C
- MongoDB database
- Express.js backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node src/index.js
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register**  
  Register a new user or admin.  
  **Request body**:
  ```json
  {
    "name": "user_name",
    "email": "user_email",
    "password": "user_password"
  }
  ```

- **POST /api/auth/login**  
  Login and receive a JWT token for authentication.  
  **Request body**:
  ```json
  {
    "email": "user_email",
    "password": "user_password"
  }
  ```

- **GET /api/auth/admins**  
  Get a list of all admins.  
  **Authorization**: Bearer token required.

### Assignment Management (Admin-only)

- **POST /api/assignments/upload**  
  Upload an assignment for review by an admin.  
  **Request body**:
  ```json
  {
    "task": "task_description",
    "adminId": "admin_id"
  }
  ```  
  **Authorization**: Bearer token required.

- **GET /api/admin/assignments**  
  Fetch all assignments assigned to the admin.  
  **Authorization**: Bearer token required.

- **POST /api/admin/assignments/:id/accept**  
  Accept the assignment with the given ID.  
  **URL Parameters**: `:id` (assignment ID).  
  **Authorization**: Bearer token required.

- **POST /api/admin/assignments/:id/reject**  
  Reject the assignment with the given ID.  
  **URL Parameters**: `:id` (assignment ID).  
  **Authorization**: Bearer token required.

### Authentication

The system uses **JWT (JSON Web Tokens)** for authentication. To access restricted endpoints (like those for admins), include the token in the `Authorization` header:
```bash
Authorization: Bearer <token>
```
You can obtain a token by logging in with the `/api/auth/login` endpoint.

### Example API Requests

1. **Register a User**

   **URL**: `POST /api/auth/register`  
   **Request Body**:
   ```json
   {
     "name": "John Doe",
     "email": "john.doe@example.com",
     "password": "password123"
   }
   ```

2. **Login**

   **URL**: `POST /api/auth/login`  
   **Request Body**:
   ```json
   {
     "email": "john.doe@example.com",
     "password": "password123"
   }
   ```

   **Response**:
   ```json
   {
     "token": "your_jwt_token_here"
   }
   ```

3. **Upload Assignment**

   **URL**: `POST /api/assignments/upload`  
   **Request Body**:
   ```json
   {
     "task": "Complete the React.js project",
     "adminId": "admin_id_here"
   }
   ```  
   **Headers**:
   ```bash
   Authorization: Bearer <user_token>
   ```

4. **Get Assignments for Admin**

   **URL**: `GET /api/admin/assignments`  
   **Headers**:
   ```bash
   Authorization: Bearer <admin_token>
   ```

5. **Accept an Assignment**

   **URL**: `POST /api/admin/assignments/:id/accept`  
   **URL Parameters**: `:id` - The ID of the assignment to accept.  
   **Headers**:
   ```bash
   Authorization: Bearer <admin_token>
   ```

6. **Reject an Assignment**

   **URL**: `POST /api/admin/assignments/:id/reject`  
   **URL Parameters**: `:id` - The ID of the assignment to reject.  
   **Headers**:
   ```bash
   Authorization: Bearer <admin_token>
   ```

## Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing users and assignments.
JWT: JSON Web Tokens for user authentication.
bcryptjs: For password hashing.
dotenv: To manage environment variables.
express-validator: To validate incoming requests.
multer: For handling file uploads (if applicable).
OAuth2: For Google authentication (optional).
```

The system uses JWT for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <token>
```
