const express = require('express');
const { body, validationResult } = require('express-validator');
const postController = require('../controllers/posts');
const validator = require('../validator');
// ...rest of the initial code omitted for simplicity.

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/post', validator.createPostValidator, postController.createPost);

module.exports = router;
