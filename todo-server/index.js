const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(todoRoutes);
app.use(userRoutes);

dotenv.config({ path: './config.env' });
const database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(database);
/* .then(() => console.log('connected to db'))
  .catch((error) => console.log(error)); */

/* app.get('/', (req, res) => {
  res.send('Welcome to backend');
}); */

app.listen(3000, () => {
  // console.log('Listening on port 3000');
});

module.exports = app;
