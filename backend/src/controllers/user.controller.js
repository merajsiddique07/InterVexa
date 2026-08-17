import User from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: `User does not found. ${error}`,
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: `Current user does not exists. ${error}`,
    });
  }
};
