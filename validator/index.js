// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

exports.createPostValidator = [
  body('title', 'title too short').isLength({ min: 5 }),
  body('title', 'write title').notEmpty(),
  body('body', 'body too short').isLength({ min: 10 }),
  body('body', 'write body').notEmpty(),
];
