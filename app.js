const express = require('express');

const app = express();

const postRoutes = require('routes/post');

app.get('/', (req, res) => {
  res.send('hello world from express');
});

const port = 8080;

app.listen(port, () => {
  console.log(`Express listening at port: ${port}`);
});
