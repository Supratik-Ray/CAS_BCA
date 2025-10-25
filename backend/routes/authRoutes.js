import express from "express";
import { login, register } from "../controllers/authController.js";
import {
  loginValidator,
  registerValidator,
} from "../validators/authValidator.js";
import validateRequest from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/login", loginValidator, validateRequest, login);
router.post("/register", registerValidator, validateRequest, register);

export default router;
