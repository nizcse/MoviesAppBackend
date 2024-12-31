import express from 'express';
import dotenv from 'dotenv';
import { getMovies, getMoviesById, postMovies } from './routes/movies';
import { connectToDatabase } from './services/database.service';
import bodyParser from 'body-parser';
dotenv.config();
// import {PORT} from '@env'
const app = express();
app.use(bodyParser.json())
connectToDatabase()
const port = process.env.PORT;
// console.log(PORT)
app.get('/', (req, res) => {
  res.send('namaste World!');
});

app.get('/movies',getMovies)
app.get('/movies/:id',getMoviesById)
app.post('/movies',postMovies)
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});