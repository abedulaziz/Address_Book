const User = require("../models/User");


const checkDuplicate = async(req, res, next) => {

  const isDuplicate = await User.exists({email: req.body.email})
  
  if (isDuplicate) {
    return res.status(400).json({message: "This email is already taken"})
  }
  next()
}

module.exports = checkDuplicate