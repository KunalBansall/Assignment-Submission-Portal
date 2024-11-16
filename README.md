# Assignment Submission Portal

A robust backend system for managing assignment submissions with user and admin functionality.

## Features

- User and Admin authentication
- Assignment submission system
- Assignment review system (accept/reject)
- OAuth2 integration
- MongoDB database
- Express.js backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration

3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user/admin
- `POST /api/auth/login` - Login
- `GET /api/auth/admins` - Get all admins

### Assignments
- `POST /api/assignments/upload` - Upload assignment
- `GET /api/admin/assignments` - Get admin's assignments
- `POST /api/admin/assignments/:id/accept` - Accept assignment
- `POST /api/admin/assignments/:id/reject` - Reject assignment

## Authentication

The system uses JWT for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <token>
```