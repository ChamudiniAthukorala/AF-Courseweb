const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CourseReqsSchmea = new Schema({
  uid: {
    type: String
  },
  courseID: {
    type: String
  }
});

module.exports = CourseReqs = mongoose.model("coursereqs", CourseReqsSchmea);
