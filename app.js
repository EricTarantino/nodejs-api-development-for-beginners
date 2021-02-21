const express = require('express');

const app = express();

const mongoose = require('mongoose');

const morgan = require('morgan');

const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('DB Connected', { useNewUrlParser: true });
});

mongoose.connection.on('err', (err) => {
  console.log(`Connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require('./routes/post');

// middleware
app.use(morgan('dev'));

app.use('/', postRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Express listening at port: ${port}`);
});
