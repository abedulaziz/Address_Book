const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const createToken = (id) => {
  
  return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 1800
  })
}


// register
module.exports.register = async(req, res) => {

  try {
    const salt = await bcrypt.genSalt()
    const hashedPwd = await bcrypt.hash(req.body.password, salt)

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd,
      phone_number: req.body.phone_number,
      contacts: req.body.contacts

    })

    const token = createToken(user._id)
    res.cookie("jwt", token, {httpOnly: true, maxAge: 1800})


    res.json({access_token: token, id: user._id})
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

// login
module.exports.login = async(req, res) => {

    const findEmail =  await User.find({email: req.body.email})
    const user = {email: req.body.email}
    const access_token = jwt.sign(user ,process.env.ACCESS_TOKEN_SECRET)
  
  
    try {
      res.json({"access_token": access_token})
    }catch (err) {
      console.log(err.messge);
      res.send(err.message, err.code)
    }
}
