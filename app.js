const express = require('express');

const app = express();

// bring in routes
const { getPosts } = require('./routes/post');

app.get('/', getPosts);

const port = 8080;

app.listen(port, () => {
  console.log(`Express listening at port: ${port}`);
});
