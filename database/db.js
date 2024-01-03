const mongoose = require("mongoose");

const Connection = async (URL) => {
  //Connection(user, password);

  try {
    await mongoose.connect(URL);

    console.log("Connection connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = Connection;
