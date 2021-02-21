const express = require('express');

const app = express();

const morgan = require('morgan');

const myOwnMiddleware = (req, res, next) => {
  console.log('Middleware applied!');
  next();
};

app.use(myOwnMiddleware);

// bring in routes
const { getPosts } = require('./routes/post');

// middleware
app.use(morgan('dev'));

app.get('/', getPosts);

const port = 8080;

app.listen(port, () => {
  console.log(`Express listening at port: ${port}`);
});
