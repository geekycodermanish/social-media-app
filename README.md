# Social Media Application

This is a simple social media application with user authentication, posts, likes, and follows functionality. It uses Node.js and Express for the backend and React.js for the frontend. MySQL is used as the database to store user profiles, posts, likes, and follows.

## Features

- User Registration and Login
- Creating New Posts
- Retrieving All Posts
- Liking Posts
- Following Users
- Authentication Middleware
- JWT (JSON Web Tokens) for User Authentication

## Technologies Used

### Backend

- Node.js
- Express
- MySQL
- JWT (JSON Web Tokens)

### Frontend

- React.js
- React Router

## Installation

### Prerequisites

- Node.js
- npm
- MySQL

### Backend Setup

1. Clone the repository:

    bash
    git clone https://github.com/yourusername/social-media-app.git
    cd social-media-app
    

2. Install dependencies:

    bash
    cd backend
    npm install
    

3. Configure the database:

    - Create a MySQL database named `social_media`.
    - Update the database configuration in `backend/config/db.js`:

    javascript
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'yourpassword',
        database: 'social_media'
    });

    module.exports = connection;
    
    
4. Start the backend server:

    bash
    npm run dev
    

### Frontend Setup

1. Install dependencies:

    bash
    cd frontend
    npm install
    

2. Start the frontend server:

    bash
    npm run dev
    

## API Endpoints

### User Authentication

- **POST /auth/register**
  - Register a new user.

- **POST /auth/login**
  - Login an existing user.

### Posts

- **POST /posts**
  - Create a new post.
  - Protected route (requires authentication).

- **GET /posts**
  - Retrieve all posts.

### Likes

- **POST /posts/like/:postId**
  - Like a post.
  - Protected route (requires authentication).

### Follows

- **POST /users/follow/:userId**
  - Follow a user.
  - Protected route (requires authentication).

## Authentication Middleware

The authentication middleware protects routes that require authentication. It verifies the JWT token and ensures that the user is authenticated before allowing access to the protected routes.

## Frontend Functionality

- User registration and login.
- Forms to create new posts.
- Display a feed of posts on the homepage with options to like posts and follow users.
- User authentication with JWT tokens.
- Client-side routing using React Router.

## Usage

1. Register a new user.
2. Login with the registered user credentials.
3. Create new posts.
4. View the feed of posts.
5. Like posts and follow other users.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
