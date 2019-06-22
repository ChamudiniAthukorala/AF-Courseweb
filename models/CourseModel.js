const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CourseSchema = new Schema({
  courseId: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  lectureIncharge: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Course = mongoose.model("courses", CourseSchema);
