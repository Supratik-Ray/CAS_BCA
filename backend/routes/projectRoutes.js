import express from "express";

//controllers
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
} from "../controllers/projectController.js";
import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
} from "../controllers/commentController.js";
import { createLike, deleteLike } from "../controllers/likeController.js";
import { uploadImage } from "../controllers/uploadController.js";

//validators
import {
  createProjectValidator,
  updateProjectValidator,
} from "../validators/projectValidator.js";
import { mongoIdValidator } from "../validators/mongoValidator.js";
import validateRequest from "../middlewares/validateRequest.js";

//middlewares
import authenticationMiddleware from "../middlewares/authentication.js";

const router = express.Router();

//public routes
router.get("/", getAllProjects);
router.use(authenticationMiddleware);

//protected routes
//projects
router.route("/").post(createProjectValidator, validateRequest, createProject);

router
  .route("/:id")
  .get(mongoIdValidator, validateRequest, getProject)
  .patch(
    [mongoIdValidator, updateProjectValidator],
    validateRequest,
    updateProject
  )
  .delete(mongoIdValidator, validateRequest, deleteProject);

//comments
router.route("/:id/comments").get(getAllComments).post(createComment);
router
  .route("/:id/comments/:commentId")
  .patch(updateComment)
  .delete(deleteComment);

//likes
router.route("/:id/likes").post(createLike).delete(deleteLike);

//uploads
router.route("/imageUploads").post(uploadImage);

export default router;
