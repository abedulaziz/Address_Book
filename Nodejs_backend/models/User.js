const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  phone_number: {
    type: String,
    required: true,
    min: 8,
    max: 12
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