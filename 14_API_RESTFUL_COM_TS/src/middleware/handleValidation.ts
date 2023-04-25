import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// this will validate that the req is according to the validation file using it
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: object[] = [];

  errors.array().map((err) => extractedErrors.push({ [err.type]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
