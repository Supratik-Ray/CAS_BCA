import { StatusCodes } from "http-status-codes";
import { matchedData } from "express-validator";
import { BadRequestError } from "../errors";
import Like from "../models/Like";

export const createLike = async (req, res) => {
  const { id: projectId } = matchedData(req);
  try {
    await Like.create({ project: projectId, user: req.user.userId });
    res.status(StatusCodes.CREATED).json({
      success: true,
      msg: `Project with id: ${projectId} liked by user: ${req.user.userId}`,
    });
  } catch (error) {
    if (error.code === 11000) {
      throw new BadRequestError("user already liked this project");
    }
    throw error;
  }
};

export const deleteLike = async (req, res) => {
  const { id: projectId } = matchedData(req);
  await Like.findOneAndDelete({ project: projectId, user: req.user.userId });
  res.status(StatusCodes.OK).json({
    success: true,
    msg: `Like for Project with id: ${projectId} deleted by user: ${req.user.userId}`,
  });
};
