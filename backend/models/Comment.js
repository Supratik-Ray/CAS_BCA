import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    project: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
