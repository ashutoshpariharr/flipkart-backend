const User = require("../model/user-schema");

const userController = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });

    if (exist) {
      return res.status(401).json({ message: "Username already exists" });
    }

    // Declare newUser using const
    const newUser = new User(req.body);
    await newUser.save();

    console.log(newUser);

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ error: "Internal server error" });
  }
};


const userLoginController = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await User.findOne({ username: username, password: password });

    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json({ message: "Please registeration first" });
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Login error" });
  }
};

module.exports = {
  userController,
  userLoginController,
};