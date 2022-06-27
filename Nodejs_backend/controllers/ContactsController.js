const User = require("../models/User")

const getUserContacts = async(req, res) => {

    const user = await User.findById(req.params.user_id)
    
    try {
      res.json({contacts: user.contacts})
      
    }catch (err) {
      res.status(400).send(err)
    }
  
}

module.exports = getUserContacts