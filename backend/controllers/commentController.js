import { StatusCodes } from "http-status-codes";
import { matchedData } from "express-validator";
import Comment from "../models/Comment";

export const getAllComments = async (req, res) => {
  const { id: projectId } = matchedData(req);
  const comments = await Comment.find({ project: projectId }).sort(
    "-createdAt"
  );
  res.status(StatusCodes).json({ success: true, comments });
};

export const createComment = async (req, res) => {
  const { id: projectId, text } = matchedData(req);
  const comment = await Comment.create({
    project: projectId,
    text,
    user: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json({ success: true, comment });
};

export const updateComment = async (req, res) => {
  const { id: projectId, commentId, text } = matchedData(req);
  const updatedComment = await Comment.findOneAndUpdate(
    {
      project: projectId,
      user: req.user.userId,
      _id: commentId,
    },
    { text },
    { new: true }
  );
  res.status(StatusCodes.CREATED).json({ success: true, updatedComment });
};

export const deleteComment = async (req, res) => {
  res.send("delete Comment");
};
