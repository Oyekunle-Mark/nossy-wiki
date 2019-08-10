const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();
const searchRouter = require('../search');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, O curious one!',
  }),
);

server.use('/api/search', searchRouter);

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Check the URL chief!,',
  }),
);

module.exports = server;
