# User Authentication and Role-Based Authorization API

This project is a Node.js application that implements a user authentication and role-based authorization system. It provides secure login, token-based authentication, and access control for different user roles.

## Features

1. **User Registration and Login**:
   - Hashes passwords for secure storage using `bcrypt.js`.
   - Generates JWT tokens for authenticated users.

2. **Role-Based Access Control**:
   - Grants specific access based on user roles (`admin`, `manager`, `user`).

3. **Middleware**:
   - Verifies JWT tokens to authenticate users.
   - Authorizes user roles for specific endpoints.

4. **Secure Database Connection**:
   - Connects to a MongoDB database using `mongoose`.

---

## Installation

### Prerequisites
- Node.js installed
- MongoDB database
- `.env` file with the following keys:
  
  ```plaintext
  CONNECTION_STRING=<Your MongoDB connection URI>
  JWT_SECRET=<Your JWT secret key>
  PORT=<Server port (default: 3001)>

### Steps to Install

Clone the repository:
```bash
  git clone <repository-url>
  cd <repository-folder>

```

Install dependencies:
```bash
npm install

```
Set up environment variables:

- Create a `.env` file in the root directory.
- Add `CONNECTION_STRING`, `JWT_SECRET`, and optionally `PORT`

Run the application:
```bash
npm run dev

```    
## Project Structure
```bash
root/
│
├── node_modules/
├── src/
│   ├── config/
│   │   └── dbConnect.js       # MongoDB connection setup
│   ├── controllers/
│   │   └── authController.js  # User registration and login logic
│   ├── middleware/
│   │   ├── authMiddleware.js  # Token verification middleware
│   │   └── roleMiddleware.js  # Role authorization middleware
│   ├── models/
│   │   └── userModel.js       # User schema definition
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── userRoutes.js      # Role-based access routes
│   └── index.js               # Application entry point
│
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── package-lock.json           # Dependency tree lock file


```



## EndPoints

### Authentication `(/api/auth)` :

Register a new user:

  - Method: `POST`
  - URL: `/api/auth/register`
  - Body:
``` 
json

{
  "username": "user1",
  "password": "password123",
  "role": "user"
}
```

  - Response:
```
json

{
  "message": "User registered with username user1"
}
```
Login:

- Method: `POST`
- URL: `/api/auth/login`
- Body:
```
json

{
  "username": "user1",
  "password": "password123"
}
``` 
Response:
```
json

{
  "token": "<JWT Token>"
}
```
### Role-Based Access `(/api/users)` :
Admin-only access:

- Method: `GET`
- URL: `/api/users/admin`
- Headers:
```
Authorization: Bearer <JWT Token>
```
- Response:
```
{
  "message": "Welcome Admin"
}
```
Manager and Admin access:

- Method: `GET`
- URL: `/api/users/manager`
- Headers:
```
Authorization: Bearer <JWT Token>
```

Response:
```
{
  "message": "Welcome Manager"   
}
```
Access for all roles:

- Method: `GET`
- URL: `/api/users/user`
- Headers:
```
Authorization: Bearer <JWT Token>
```
- Response:
```
{
  "message": "Welcome User"
}
```
