const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const MarksSchema = new Schema({
  courseId: {
    type: String,
    required: true
  },
  assignmentId: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  mark: {
    type: Number,
    required: true
  }
});

module.exports = Marks = mongoose.model("mark", MarksSchema);
