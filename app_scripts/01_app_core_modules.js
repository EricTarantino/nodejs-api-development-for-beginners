const http = require('http');
const { sum } = require('../helpers.js');

const server = http.createServer((req, res) => {
  res.end('hello from hello world node.js');
});

server.listen(3000);

// var let const
const total = sum(20, 200);
console.log('TOTAL', total);
