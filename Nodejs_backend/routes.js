const express = require("express");
const userModel = require("./models/User");
const app = express();

app.post("/api/users/add_user", async (req, res) => {
  console.log(req);
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);

  } catch (error) {
    res.status(500).send(error);
  }
});


app.get("/api/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;