const http = require('http');

const server = http.createServer((req, res) => {
  // This is intentionally left blank to demonstrate the error
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});