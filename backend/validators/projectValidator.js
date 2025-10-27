import { body, query } from "express-validator";

const createProjectValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("title is required")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "title needs to be minimum 3 characters and maximum 20 characters long"
    ),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("description is required")
    .isLength({ min: 5, max: 100 })
    .withMessage(
      "description needs to be minimum 5 characters and maximum 100 characters long"
    ),

  body("githubLink")
    .trim()
    .notEmpty()
    .withMessage("github Link is required")
    .isURL({ protocols: ["http", "https"], require_protocol: true })
    .withMessage("Github Link must be a valid URL")
    .custom((value) => {
      if (!value.includes("github.com")) {
        throw new Error("Github Link must be a valid github URL");
      }
      return true;
    }),

  body("liveLink")
    .optional()
    .trim()
    .isURL({ protocols: ["http", "https"], require_protocol: true })
    .withMessage("Live Link must be a valid URL"),

  body("image")
    .optional()
    .isObject()
    .withMessage("Image must be an object containing url and publicId"),

  body("image.url")
    .optional()
    .isURL({ protocols: ["http", "https"], require_protocol: true })
    .withMessage("Image URL must be a valid URL"),

  body("image.publicId")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Image publicId is required if image is provided"),
];

const updateProjectValidator = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("title is required")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "title needs to be minimum 3 characters and maximum 20 characters long"
    ),

  body("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("description is required")
    .isLength({ min: 5, max: 100 })
    .withMessage(
      "description needs to be minimum 5 characters and maximum 100 characters long"
    ),

  body("githubLink")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("github Link is required")
    .isURL({ protocols: ["http", "https"], require_protocol: true })
    .withMessage("Github Link must be a valid URL")
    .custom((value) => {
      if (!value.includes("github.com")) {
        throw new Error("Github Link must be a valid github URL");
      }
      return true;
    }),

  body("liveLink")
    .optional()
    .trim()
    .isURL({ protocols: ["http", "https"], require_protocol: true })
    .withMessage("Live Link must be a valid URL"),

  body("image")
    .optional()
    .isObject()
    .withMessage("Image must be an object containing url and publicId"),

  body("image.url")
    .optional()
    .isURL({ protocols: ["http", "https"], require_protocol: true })
    .withMessage("Image URL must be a valid URL"),

  body("image.publicId")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Image publicId is required if image is provided"),
];

const getAllProjectsValidator = [
  query("search")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Search query too long"),

  query("sort")
    .optional()
    .trim()
    .custom((value) => {
      const validFields = ["createdAt", "title", "totalLikes"];
      const fields = value.split(" ").map((field) => field.replace("-", ""));
      const allValid = fields.every((field) => validFields.includes(field));
      if (!allValid) throw new Error("Invalid sort fields");
      return true;
    }),

  query("page")
    .optional()
    .toInt()
    .isInt({ min: 1 })
    .withMessage("page must be a valid integer greater than 0"),

  query("limit")
    .optional()
    .toInt()
    .isInt({ min: 1, max: 50 })
    .withMessage("limit must be a valid integer between 1 and 50"),
];

export {
  createProjectValidator,
  updateProjectValidator,
  getAllProjectsValidator,
};
