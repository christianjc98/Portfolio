import mongoose from "mongoose";
import validator from "validator";

const ContactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 35,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  message: {
    type: String,
    required: [true, "Please provide message"],
    maxlength: 255,
    trim: true,
  },
});

export default mongoose.model("ContactForm", ContactFormSchema);
