# E Commerce

This project serves as the assignment 2 of the Mission Success to JP.

## Prerequisites

- Node.js (v18)
- npm
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/itskawsarjamil/msJP-assignment2-ecommerce-server

   ```

2. **Navigate to the project directory:**

   ```bash
   cd msJP-assignment2-ecommerce-server

   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuaration

1. Create a `.env` file in the root directory.

2. Add MongoDB connection string:

   ```bash
    database_url_local=mongodb://localhost:27017/db_name
   ```

## Running the Application

### Production Mode:

1. Compile TypeScript to JavaScript:

   ```bash
   npm run build

   ```

2. Start the server:
   ```bash
   npm run start:prod
   ```

### Development Mode:

    npm run start:dev

## Dependencies

### Main Packages

- **express**: Web framework.
- **mongoose**: MongoDB object modeling.
<!-- - **bcrypt**: Password hashing. -->
- **dotenv**: Environment variables.
- **cors**: Cross-origin resource sharing.
- **http-status**: HTTP status codes.
- **mongodb**: MongoDB driver.
- **ts-node-dev**: TypeScript development server.
- **zod**: Schema validation.

### Development Packages

- **@typescript-eslint**: TypeScript ESLint support.
- **eslint**: Code linting.
- **prettier**: Code formatting.
- **typescript**: TypeScript compiler.
- **@types/express**: TypeScript definitions for Express.
- **@types/node**: TypeScript definitions for Node.js.
<!-- - **@types/bcrypt**: TypeScript definitions for bcrypt. -->
- **@types/cors**: TypeScript definitions for CORS.
