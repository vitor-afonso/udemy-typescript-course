import { body } from 'express-validator';

// Creates array of errors to be validated by handleValidation (at the route) that will process the errors.

export const movieCreateValidation = () => {
  return [
    body('title').isString().withMessage('Title is required.').isLength({ min: 5 }).withMessage('Title must have at least 5 characters.'),
    body('rating')
      .isNumeric()
      .withMessage('Rating must be a number.')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error('Rating must be between 0 and 10.');
        }
        return true;
      }),
    body('description').isString().withMessage('Description is required.').isLength({ min: 10 }).withMessage('Description must have at least 10 characters.'),
    body('director').isString().withMessage('Director is required.'),
    body('poster').isURL().withMessage('Image must be a URL.'),
  ];
};
