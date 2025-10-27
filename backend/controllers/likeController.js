import { StatusCodes } from "http-status-codes";
import { matchedData } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Like from "../models/Like.js";
import Project from "../models/project.js";

export const createLike = async (req, res) => {
  const { id: projectId } = matchedData(req);
  try {
    await Like.create({ project: projectId, createdBy: req.user.userId });
    await Project.findByIdAndUpdate(projectId, { $inc: { totalLikes: 1 } });
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
  const deleted = await Like.findOneAndDelete({
    project: projectId,
    createdBy: req.user.userId,
  });
  if (deleted) {
    await Project.findByIdAndUpdate(projectId, { $inc: { totalLikes: -1 } });
  } else {
    throw new NotFoundError(`No like found for project: ${projectId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    msg: `Like for Project with id: ${projectId} deleted by user: ${req.user.userId}`,
  });
};
