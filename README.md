# Task11: Bearer Token Authentication and Authorization

## Description
This project implements a JWT (JSON Web Token) authentication system using Node.js and MongoDB. Users can register, log in, and access protected routes with the appropriate token.

## Features
- User registration
- User login
- JWT generation for authentication
- Protected endpoint that requires a valid token

## Technologies Used
- **Node.js**: JavaScript runtime for building the server
- **Express.js**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **MongoDB Atlas**: Cloud-based database service
- **JWT**: For secure token-based authentication
- **Nodemon**: For automatic server restarts during development

## Installation

### Prerequisites
- Node.js (version 14 or above)
- MongoDB Atlas account

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/GanishwarArun/Task11-Bearer-token.git
   cd Task11-Bearer-token

   
Here’s a sample README.md template for your GitHub project. You can customize it further based on your project's specifics:

markdown
Copy code
# Task11: Bearer Token Authentication

## Description
This project implements a JWT (JSON Web Token) authentication system using Node.js and MongoDB. Users can register, log in, and access protected routes with the appropriate token.

## Features
- User registration
- User login
- JWT generation for authentication
- Protected endpoint that requires a valid token

## Technologies Used
- **Node.js**: JavaScript runtime for building the server
- **Express.js**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **MongoDB Atlas**: Cloud-based database service
- **JWT**: For secure token-based authentication
- **Nodemon**: For automatic server restarts during development

## Installation

### Prerequisites
- Node.js (version 14 or above)
- MongoDB Atlas account

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/GanishwarArun/Task11-Bearer-token.git
   cd Task11-Bearer-token
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following:

plaintext
Copy code
NODE_ENV=development
PORT=8002
MONGODB_URI=mongodb+srv://<username>:<password>@authenicationauthorizat.2ml6x.mongodb.net/rl
JWT_SECRET=<your_jwt_secret>
Start the server:

bash
Copy code
npm start
Visit http://localhost:8002/ to access the API.

API Endpoints
POST /register

Register a new user.
Request Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

POST /login

Log in an existing user.
Request Body: {
  "email": "john@example.com",
  "password": "password123"
}


GET /user/protected-endpoint

Access a protected endpoint.
Requires Authorization header with Bearer token: Authorization: Bearer <token>


Deployment
This application is deployed on Render. You can access it at the following link:  https://task11-bearer-token-1.onrender.com/


License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
MongoDB Documentation
JWT.io
