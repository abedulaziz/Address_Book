const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    minlength: 4,
    maxlength: 255,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    minlength: 6,
    maxlength: 255,
    unique: true,
    dropDups: true,
    validate: [val => {new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$").test(val)}, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    min: [6, "Password is too short"],
    max: 1024,
  },
  phone_number: {
    type: String,
    required: true,
    minlength: [8, "Minimum password length is 8 characters"],
    maxlength: 12
  },
  contacts: [{
    full_name: String,
    phone_number: String,
    relationship_status: {
      type: String,
      enum: ["single", "married", "engaged"]
    },
    email: String,
    location:{
      type: Array,
      coordinates: [32, 20]
    } 
  }]
  
})

const User = mongoose.model("User", UserSchema)
module.exports =  User;