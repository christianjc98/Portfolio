import { StatusCodes } from "http-status-codes";
import ContactForm from "../models/ContactForm.js";
import nodemailer from "nodemailer";
import BadRequestError from "../errors/bad-request.js";
const postContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    throw new BadRequestError("Please provide all values");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "christianjanssenc@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "christianjanssenc@gmail.com",
    subject: `Contact message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions);

  const contactForm = await ContactForm.create({ name, email, message });
  res.status(StatusCodes.CREATED).json({ contactForm });
};

export { postContactForm };
