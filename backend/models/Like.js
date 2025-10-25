import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: Date, default: Date.now() },
});

LikeSchema.index({ project: 1, createdBy: 1 }, { unique: true });

const Like = mongoose.model(LikeSchema);

export default Like;
