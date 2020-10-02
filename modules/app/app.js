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

module.exports = app;
