import User from "../models/User.js";

const register = async (req, res) => {
  try {
      const user = await User.create(req.body);
      res.status(200).send(user.toJSON());
  } catch (error) {
    res.status(400).send({
        error: "This email account is already in use",
        message: error.message
    });
  }
};

export default register;
