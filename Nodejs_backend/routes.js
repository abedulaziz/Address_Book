require("dotenv").config()

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")

const authenticateToken = require("./middleware/auth")
const checkDuplicate = require("./middleware/checkDuplicates")
const AuthController = require("./controllers/AuthContorller")

const User = require("./models/User");


app.use(express.json())


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


app.get("/api/users", async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;


// register api
app.post("/api/users/register", checkDuplicate, AuthController.register);

// login
app.post("/api/users/login", AuthController.login)


// 
app.get("/api/users/:user_id/get_contacts", authenticateToken, async (req, res, user_id) => {
  console.log(user_id);
  const contacts = await User.find()

  try {
    res.json(contacts)
  }catch (err) {
    console.log(err);
    res.send(err)
  }

})


module.exports = app