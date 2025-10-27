import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: { url: String, publicId: String },
    liveLink: String,
    githubLink: String,
    totalLikes: { type: Number, default: 0 },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
