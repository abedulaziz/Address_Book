const jwt = require("jsonwebtoken")


const authenticateToken = (req, res, next) => {

  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  console.log(token);

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {

    if (err) {
      console.log(err)
      return res.sendStatus(403)
    } 
    console.log(decodedToken)
    next()
  })

}

module.exports = authenticateToken