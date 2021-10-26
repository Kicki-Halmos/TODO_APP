const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(todoRoutes);
app.use(userRoutes);

const mongoUri = 'mongodb+srv://kicki:admin@cluster0.dca84.mongodb.net/todoDB?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Welcome to backend');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
