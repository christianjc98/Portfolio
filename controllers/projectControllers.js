import { StatusCodes } from "http-status-codes";
import Project from "../models/Project.js";

const getAllProjects = async (req, res) => {
  let result = Project.find();
  result = result.sort("-createdAt");

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  result.skip(skip).limit(limit);

  const projects = await result;

  const totalProjects = await Project.countDocuments();
  const numOfPages = Math.ceil(totalProjects / limit);

  res.status(StatusCodes.OK).json({ projects, totalProjects, numOfPages });
};

export { getAllProjects };
