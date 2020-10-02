require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { NODE_ENV, CLIENT_ORIGIN } = require('./config');

const app = express();
app.use(morgan('tiny'));
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use('/people', require('../people/people.router'));
app.use('/pets', require('../pets/pets.router'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((error, req, res, next) => {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    response = { error };
  }
  res.status(500).json(response);
});

module.exports = app;
