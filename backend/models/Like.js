import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
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
  createdAt: { type: Date, default: Date.now },
});

LikeSchema.index({ project: 1, createdBy: 1 }, { unique: true });

const Like = mongoose.model("Like", LikeSchema);

export default Like;
