const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const AdminSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: "admin"
  }
});

module.exports = Admin = mongoose.model("admins", AdminSchema);
