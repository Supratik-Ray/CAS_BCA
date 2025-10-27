import { StatusCodes } from "http-status-codes";
import { matchedData } from "express-validator";
import Comment from "../models/Comment.js";
import { NotFoundError } from "../errors/index.js";

export const getAllComments = async (req, res) => {
  const { id: projectId } = matchedData(req);
  const comments = await Comment.find({ project: projectId })
    .sort("-createdAt")
    .populate("createdBy", "_id name");
  res.status(StatusCodes.OK).json({ success: true, comments });
};

export const createComment = async (req, res) => {
  const { id: projectId, text } = matchedData(req);
  const comment = await Comment.create({
    project: projectId,
    text,
    createdBy: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json({ success: true, comment });
};

export const updateComment = async (req, res) => {
  const { id: projectId, commentId, text } = matchedData(req);
  const updatedComment = await Comment.findOneAndUpdate(
    {
      project: projectId,
      createdBy: req.user.userId,
      _id: commentId,
    },
    { text },
    { new: true, runValidators: true }
  ).populate("createdBy", "_id name");

  if (!updateComment) {
    throw new NotFoundError(`No comment with id: ${commentId} found`);
  }

  res.status(StatusCodes.OK).json({ success: true, updatedComment });
};

export const deleteComment = async (req, res) => {
  const { id: projectId, commentId } = matchedData(req);

  const comment = await Comment.findOneAndDelete({
    _id: commentId,
    project: projectId,
    createdBy: req.user.userId,
  });

  if (!comment) {
    throw new NotFoundError(`No comment with id: ${commentId} found`);
  }

  res.status(StatusCodes.OK).json({ success: true, mssg: "Comment deleted" });
};
