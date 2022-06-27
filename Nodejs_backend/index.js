const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const cors= require("cors")

const cookieParser = require("cookie-parser")

const app = express();

app.use(cors())

app.use(cookieParser())
app.use(express.json());

const username = "AbdulAziz";
const password = "rjbjcBmR4F5aRyw";
const cluster = "cluster0.magzs";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    autoIndex: true, 
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", (req, res) => {
  res.send("haha")

})

app.use(Router)

app.listen(5000, () => {
  console.log("Server is running at port 5000");
})