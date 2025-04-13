# Opportunity Hub - Talent Acquisition Platform

## Project Overview
Opportunity Hub is a Gen AI based hiring tool that assists companies with their hiring process. Built using the MERN stack (MongoDB, Express, React, Node.js), it provides:
- User authentication and authorization
- Job listing and search functionality
- Application management
- User profile management

## Backend Documentation

### API Endpoints

#### Authentication
- `POST /api/auth/users` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/otp` - Request OTP for email verification
- `POST /api/auth/verify` - Verify email with OTP
- `POST /api/auth/google/oauth` - Google OAuth login
- `GET /api/auth/status` - Check authentication status
- `POST /api/auth/password/reset/request` - Request password reset
- `POST /api/auth/password/reset` - Reset password

#### Jobs
- `GET /api/jobs` - Get all job listings
- `GET /api/jobs/search` - Search jobs

#### Applications
- `POST /api/apply` - Apply for a job
- `GET /api/apply` - Get user applications

#### User
- `GET /api/user` - Get user data

### Database Models
- User: Stores user credentials and profile data
- Jobs: Contains job listings
- Applications: Tracks job applications

## Frontend Documentation

### Main Components
- **Authentication Pages**:
  - Login
  - Registration
  - OTP Verification
  - Password Reset

- **User Dashboard**:
  - Jobs - Browse and search job listings
  - Dashboard - Overview of applications and interviews
  - Profile - Manage user profile and settings

### Technical Stack
- React.js with Vite
- React Router for navigation
- React Toastify for notifications
- Context API for state management

## Setup Instructions

### Prerequisites

#### Essential:
- **Node.js v18+** - [Download Node.js](https://nodejs.org/)
- **MongoDB** (choose one):
  - Local installation: [MongoDB Community Server](https://www.mongodb.com/try/download/community)
  - Cloud service: [MongoDB Atlas](https://www.mongodb.com/atlas/database)
  
#### Recommended:
- **Git** - [Git SCM](https://git-scm.com/)
- **Postman** (for API testing) - [Download Postman](https://www.postman.com/downloads/)
- **VS Code** (code editor) - [Download VS Code](https://code.visualstudio.com/)

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   - This installs all required packages from package.json

3. **Environment Configuration**:
   Create `.env` file in backend root with these variables:
   ```env
   # Server Configuration
   PORT=5000
   CLIENT_URL=http://localhost:5173
   
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Authentication
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=30d
   
   # Email Service
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Running the Server**:
   - Development mode (with hot reload):
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```
   - The server will be available at: http://localhost:5000

5. **Verification**:
   Test the API endpoints using Postman or curl. Here are some examples:

   - **Check Authentication Status**:
     ```bash
     curl -X GET http://localhost:5000/api/auth/status
     ```
     Expected response:
     ```json
     {"status":"running","message":"API is operational"}
     ```

   - **Register a New User**:
     ```bash
     curl -X POST http://localhost:5000/api/auth/users \
     -H "Content-Type: application/json" \
     -d '{"email": "user@example.com", "password": "yourpassword"}'
     ```
     Expected response:
     ```json
     {"success":true,"message":"User registered successfully"}
     ```

   - **User Login**:
     ```bash
     curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email": "user@example.com", "password": "yourpassword"}'
     ```
     Expected response:
     ```json
     {"success":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
     ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file in frontend root with these variables:
   ```env
   # API Configuration
   VITE_API_BASE_URL=http://localhost:5000/api
   
   # Google OAuth
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   
   # Development Mode
   VITE_DEV_MODE=true
   ```
   Example of a complete frontend `.env` file:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_GOOGLE_CLIENT_ID=1234-xyz.apps.googleusercontent.com
   VITE_DEV_MODE=true
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
   This will launch the app on http://localhost:5173

### Development Workflow

1. **Running Both Servers**:
   - Open two terminal windows
   - Terminal 1 (backend):
     ```bash
     cd backend && npm run dev
     ```
   - Terminal 2 (frontend):
     ```bash
     cd frontend && npm run dev
     ```

2. **Troubleshooting**:
   - If ports are in use:
     ```bash
     netstat -ano | findstr :5000  # Windows
     lsof -i :5000                 # Mac/Linux
     ```
   - Common issues:
     - Ensure MongoDB is running
     - Verify all environment variables are set
     - Check console logs for errors



## Key Features

### Authentication System
- Email/password registration and login
- Google OAuth integration
- JWT-based session management
- Email verification via OTP
- Secure password reset flow

### Job Management
- Job posting and listing
- Advanced search and filtering
- Application tracking
- Interview scheduling

### User Experience
- Responsive design (mobile, tablet, desktop)
- Real-time notifications
- Dashboard analytics
- Profile management

### Security
- Role-based access control
- Data validation
- Rate limiting
- CSRF protection

### Development Features
- Hot module replacement
- API documentation (Swagger)
- Error tracking
- Logging system
