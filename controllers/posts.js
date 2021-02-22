// ...rest of the initial code omitted for simplicity.
const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res) => {
  Post.find()
    .select('_id title body')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((errors) => console.log(errors));
};

exports.createPost = (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const post = new Post(req.body);
  try {
    post.save().then((result) => {
      res.status(200).json({
        post: result,
      });
    });
  } catch (error) {
    res.json({ error });
  }
};
