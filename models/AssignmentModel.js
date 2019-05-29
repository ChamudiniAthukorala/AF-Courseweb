const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const AssignmentSchema = new Schema({
    courseId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    creationTime: {
      type: String,
      default: Date.now
    },
    updateTime: {
        type: String,
        required: true
      },
    dueDate: {
      type: Date,
      required: true
    },
    dueTime: {
        type: String,
        required: true
      },
    assignment: {
        type: String,
        required: true
      },
    SubmissionStatus: {
        type: String,
        required: true
      },
    remainTime: {
        type: String,
        required: true
      },
    lastModified: {
        type: String,
        required: true
      },
    comments: {
        type: String,
        required: true
      },
  });
  
  module.exports = Assignment = mongoose.model("assignment", AssignmentSchema);
  