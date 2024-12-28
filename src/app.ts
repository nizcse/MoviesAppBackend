import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { movies } from './routes/movies';
// import {PORT} from '@env'
const app = express();
const port = process.env.PORT;
// console.log(PORT)
app.get('/', (req, res) => {
  res.send('namaste World!');
});

app.get('/movies',movies)
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});