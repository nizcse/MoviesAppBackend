import express from 'express';
import { movies } from './routes/movies';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies',movies)
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});