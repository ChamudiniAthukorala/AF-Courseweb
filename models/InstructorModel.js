const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const InstructorSchema = new Schema({
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
    default: "instructor"
  }
});

module.exports = Instructor = mongoose.model("instructors", InstructorSchema);
