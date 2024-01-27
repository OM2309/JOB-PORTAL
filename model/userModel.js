import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
