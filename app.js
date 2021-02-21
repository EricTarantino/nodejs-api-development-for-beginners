const express = require('express');

const app = express();

// bring in routes
const postRoutes = require('./routes/post');

app.get('/');

const port = 8080;

app.listen(port, () => {
  console.log(`Express listening at port: ${port}`);
});
