import { param } from "express-validator";
const mongoIdValidator = (idName) => [
  param(idName)
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid project ID"),
];

export { mongoIdValidator };
