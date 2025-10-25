import { param } from "express-validator";
const mongoIdValidator = [
  param("id")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid project ID"),
];

export { mongoIdValidator };
