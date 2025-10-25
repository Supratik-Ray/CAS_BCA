import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import { UnauthenticatedError } from "../errors/index.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ success: true, user: { userId: user.id, name: user.name }, token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) throw new UnauthenticatedError("invalid credentials");

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new UnauthenticatedError("invalid credentials");
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ success: true, user: { userId: user.id, name: user.name }, token });
};
