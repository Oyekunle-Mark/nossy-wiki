const server = require('./api/server');

const PORT = 5000;

server.listen(PORT, () =>
  console.log(`We are ready to rumble at port ${PORT}`),
);
