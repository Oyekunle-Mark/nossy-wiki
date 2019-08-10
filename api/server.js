const express = require('express');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, O curious one!',
  }),
);

server.get((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Check the URL chief!,',
  }),
);

module.exports = server;
