const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CourseStudentsSchmea = new Schema({
  uid: {
    type: String
  },
  courseID: {
    type: String
  }
});

module.exports = CourseStudents = mongoose.model(
  "coursestudents",
  CourseStudentsSchmea
);
