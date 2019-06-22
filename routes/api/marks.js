const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const Mark = require("../../models/MarksModel");

router.get("/test", (req, res) => res.json({ msg: "marks works" }));

router.get("/", function(req, res) {
  Mark.find(function(err, marks) {
    if (err) {
      res.status(400).send(e);
    } else {
      res.json(marks);
    }
  });
});

//Get all marks per courser ID
router.get("/getmarks/:courseId", (req, res) => {
  const courseId = req.body.courseId;
  Marks.findOne({ courseId }).then(mark => {
    //check for marks
    if (!mark) {
      return res.status(404).json("Student or assignment not found!");
    } else {
      res.json({
        courseId: req.mark.courseId,
        assignmentid: req.mark.assignmentId,
        studentId: req.mark.studentId,
        mark: req.mark.mark
      });
    }
  });
});

//Get all marks per assignemnt ID
router.get("/getmarks/:assignmentId", (req, res) => {
  const assignmentId = req.body.assignmentId;
  Marks.findOne({ assignmentId }).then(mark => {
    //check for marks
    if (!mark) {
      return res.status(404).json("Student or assignment not found!");
    } else {
      res.json({
        courseId: req.mark.courseId,
        assignmentid: req.mark.assignmentId,
        studentId: req.mark.studentId,
        mark: req.mark.mark
      });
    }
  });
});

//adding marks
router.post("/addMarks", (req, res) => {
  const newMark = new Mark({
    courseId: req.body.courseId,
    assignmentId: req.body.assignmentId,
    studentId: req.body.studentId,
    mark: req.body.mark
  });
  newMark
    .save()
    .then(mark => {
      res.status(200).json({ Marks: "Marks added" });
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

//update marks
router.put("/updateMarks/:id", (req, res) => {
  Mark.findById(req.params.id, function(err, marks) {
    if (!marks) {
      res.status(400).send("Marks details not found");
    } else marks.courseId = req.body.courseId;
    marks.assignmentId = req.body.assignmentId;
    marks.studentId = req.body.studentId;
    marks.mark = req.body.mark;

    marks
      .save()
      .then(marks => {
        res.json("Marks updated");
      })
      .catch(err => {
        res.status(400).send("Marks not updated");
      });
  });
});

module.exports = router;
