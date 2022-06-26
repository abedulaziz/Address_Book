const User = require("../models/User");



const checkDuplicate = async(req, res, next) => {

  const isDuplicate = await User.find({email: req.body.email})
  
  if (isDuplicate.length > 0) {
    res.status(400).send("This email is already taken")
  }

  next()

}

module.exports = checkDuplicate