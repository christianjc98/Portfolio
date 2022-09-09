import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    websiteUrl: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    codeUrl: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
