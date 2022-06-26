require("dotenv").config()

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const authenticateToken = require("./middleware/auth")

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
app.post("/api/users/register", async (req, res) => {

  const hashedPwd = await bcrypt.hash(req.body.password, 10)

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPwd,
    phone_number: req.body.phone_number,
  })

  try {
    user.save()
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


// login
app.post("/api/users/login", async (req, res) => {
  
  // const findEmail =  await User.find({email: req.body.email})

  const user = {email: req.body.email}
  const access_token = jwt.sign(user ,process.env.ACCESS_TOKEN_SECRET)


  try {
    res.json({"access_token": access_token})
  }catch (err) {
    console.log(err);
    res.send(err)
  }

})


// login
app.get("/api/users/get_contacts", authenticateToken, async (req, res) => {
  
  const contacts = await User.find()

  try {
    res.json(contacts)
  }catch (err) {
    console.log(err);
    res.send(err)
  }

})


module.exports = app