const Post = require('../models/post');

exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: 'First post' }, { title: 'Second post' }],
  });
};

exports.createPost = (req, res) => {
  console.log('create post');
  const post = new Post(req.body);
  console.log('CREATED A NEW POST', post);
};
