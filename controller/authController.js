import userModel from "../model/userModel.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        message: "All fields must be required",
        success: false,
      });
    }

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const newUser = await userModel.create({
      name: name,
      email: email,
      password: password,
    });

    res.status(200).json({
      message: "User registerd Successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error in register controller ${error.message}`,
      success: false,
      error: error,
    });
  }
};
