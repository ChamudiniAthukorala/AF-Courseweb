const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CourseInstructorsSchmea = new Schema({
  uid: {
    type: String
  },
  email: {
    type: String
  },
  courseID: {
    type: String
  }
});

module.exports = CourseInstructors = mongoose.model(
  "courseinstructors",
  CourseInstructorsSchmea
);
