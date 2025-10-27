import { body } from "express-validator";

const commentBodyValidator = [
  body("text")
    .trim()
    .notEmpty()
    .withMessage("text is required")
    .isLength({ min: 2, max: 100 })
    .withMessage(
      "text needs to be minimum 2 characters and maximum 100 characters long"
    ),
];

export { commentBodyValidator };
