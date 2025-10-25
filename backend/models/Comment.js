import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    text: String,
    project: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model(CommentSchema);

export default Comment;
