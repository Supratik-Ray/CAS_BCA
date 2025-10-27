import { matchedData } from "express-validator";
import Project from "../models/Project.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import cloudinary from "../config/cloudinary.js";
import Like from "../models/Like.js";

//:TODO -> TO ADD VALIDATION FOR GETALLPROJECTS
export const getAllProjects = async (req, res) => {
  const queryObj = {};
  const { search, sort, page = 1, limit = 10 } = req.query;
  if (search) {
    queryObj.title = { $regex: search, $options: "i" };
  }

  let result = Project.find(queryObj);

  if (sort) {
    const sortList = sort.replaceAll(",", " ");
    result = result.sort(sortList);
  } else {
    result = result.sort("-createdAt");
  }

  const skip = (page - 1) * limit;

  let projects = await result
    .skip(skip)
    .limit(Number(limit))
    .populate("createdBy", "_id name")
    .lean();

  const userLikes = await Like.find({ createdBy: req.user.userId }).select(
    "project"
  );
  const userLikedIds = new Set(userLikes.map((like) => String(like.project)));

  projects = await Promise.all(
    projects.map(async (project) => {
      // const totalLikes = await Like.countDocuments({ project: project._id });

      const userhasLiked = userLikedIds.has(String(project._id));
      return { ...project, userhasLiked };
    })
  );

  res.status(StatusCodes.OK).json({ success: true, projects });
};

export const createProject = async (req, res) => {
  const createData = matchedData(req);
  createData.createdBy = req.user.userId;

  const project = await Project.create(createData);

  res.status(StatusCodes.CREATED).json({ success: true, project });
};

export const getProject = async (req, res) => {
  const { id: projectId } = matchedData(req);

  const project = await Project.findById(projectId);

  if (!project) {
    throw new NotFoundError(`No project with id: ${projectId} found`);
  }

  res.status(StatusCodes.OK).json({ success: true, project });
};

export const updateProject = async (req, res) => {
  const { id: projectId, ...updateData } = matchedData(req);

  if (Object.keys(updateData).length === 0) {
    throw new BadRequestError("no data provided for updating project");
  }

  const oldProject = await Project.findOneAndUpdate(
    { _id: projectId, createdBy: req.user.userId },
    updateData,
    { new: false }
  );

  if (!oldProject) {
    throw new NotFoundError(`No project found with id: ${projectId}`);
  }

  if (
    updateData.image &&
    updateData.image.publicId !== oldProject.image.publicId
  ) {
    await cloudinary.uploader.destroy(oldProject.image.publicId);
  }

  const updatedProject = await Project.findById(projectId);

  res.status(StatusCodes.OK).json({ success: true, updatedProject });
};

export const deleteProject = async (req, res) => {
  const { id: projectId } = matchedData(req);

  const project = await Project.findOneAndDelete({
    _id: projectId,
    createdBy: req.user.userId,
  });
  if (!project) {
    throw new NotFoundError(`No project with id: ${projectId} found`);
  }

  await cloudinary.uploader.destroy(project.image.publicId);

  res.status(StatusCodes.OK).json({ success: true });
};
