# Movies App Backend

A **Node.js** back-end service for the Movies App, built to manage movies and favorites data with a **MongoDB** database.

## Features

- Fetch movies from a public API and store them in MongoDB.
- Manage user favorites.
- Provide secure API endpoints for front-end integration.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **TypeScript**
- **Concurrently** (for running tasks simultaneously)
- **nodemon** (for development)
- **dotenv** (for environment variable management)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nizcse/MoviesAppBackend.git
   cd MoviesAppBackend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Install **dotenv**:
     ```sh
     npm install dotenv ts-node
     ```
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     API_KEY=your_freetestapi_key # If applicable
     ```

4. Start the server:
   ```sh
   npm start
   ```
   This will:
   - Use **Concurrently** to compile TypeScript files (`tsc --watch`).
   - Start the server with **nodemon**, watching the compiled files in the `dist` folder.

## API Endpoints

### Movies Endpoints

- **GET /api/movies**: Fetch all movies from the database.
- **GET /api/movies/:id**: Fetch a single movie by its ID.
- **POST /api/movies**: Add a new movie to the database.

### Favorites Endpoints

- **GET /api/favorites**: Fetch all favorite movies for a user.
- **POST /api/favorites**: Add a movie to the favorites list.
- **DELETE /api/favorites/:id**: Remove a movie from the favorites list.

## Development

### Run in Development Mode

The `start` script uses **Concurrently** to:
- Compile TypeScript files in real time.
- Restart the server automatically using **nodemon**.

Run the following command for development:
```sh
npm start
```

### Linting

This project uses ESLint for linting. Run the following command to check for linting errors:
```sh
npm run lint
```

## Future Enhancements

- Add user authentication and authorization.
- Implement rate limiting for API security.
- Introduce advanced filtering and sorting for movies.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This back-end service is designed to complement the front-end Movies App, providing robust and scalable API support.

## Note

Add database (MongoDB) on your own.
