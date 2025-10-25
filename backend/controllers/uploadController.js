import fs from "fs";
import { StatusCodes } from "http-status-codes";
import cloudinary from "../config/cloudinary.js";
import { BadRequestError } from "../errors/index.js";

export const uploadImage = async (req, res) => {
  const { image } = req.files || {};

  if (!image) {
    throw new BadRequestError("No image provided");
  }

  const allowedTypes = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(image.mimetype)) {
    fs.unlinkSync(image.tempFilePath);
    throw new BadRequestError("Invalid image type");
  }

  const maxSize = 1024 * 1024;

  if (image.size > maxSize) {
    fs.unlinkSync(image.tempFilePath);
    throw new BadRequestError("Image needs to be under 1MB");
  }

  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    use_filename: true,
    folder: "projectImages",
  });

  fs.unlinkSync(image.tempFilePath);

  res.status(StatusCodes.OK).json({
    success: true,
    image: { url: result.secure_url, publicID: result.public_id },
  });

  res.status;
};
