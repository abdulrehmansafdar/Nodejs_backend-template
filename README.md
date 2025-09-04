# Node.js + Express.js Backend API Template

A clean, modular Express.js API template with TypeScript, JWT authentication, Swagger docs, and MongoDB.  
Perfect for rapid backend development.

## Features

- TypeScript for type safety
- JWT authentication
- MongoDB integration (via Mongoose)
- Modular structure (controllers, services, routes, models, middlewares)
- Swagger UI for API documentation (`/swagger/index.html`)
- Ready-to-use user authentication and product CRUD

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdulrehmansafdar/Nodejs_backend-template.git your_project_name
cd your_project_name
npm install
node setup.js your_project_name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory.  
**This file is ignored by git for security.**  
Example:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/clean_api
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=expiration time for jwt token (e.g. 1d or 7d)
```

- `PORT`: Port to run the server (default: 5000)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `JWT_EXPIRES_IN`: JWT token expiry (e.g., `7d`)

### 4. Run the development server

```bash
npm run dev
```

Server will start at `http://localhost:5000`.

### 5. API Documentation

Visit [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html) for interactive Swagger docs.

## Project Structure

```
src/
  app.ts
  server.ts
  config/
  controllers/
  middlewares/
  models/
  repositories/
  routes/
  services/
  types/
  utils/
```

## .gitignore

This template ignores:

```
node_modules/
dist/
.env
```

**Do not** ignore `src/` or config files—these are needed for development.

## License

MIT