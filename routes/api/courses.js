const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

//db not complete
const Course = require("../../models/CourseModel");

//check status not cokplete
router.get("/test", (req, res) => res.json({ msg: "course works" }));

//load input valications
//const validateRegisterInputAdmin = require("../../validation/register_admin");

//add
router.post("/add", (req, res) => {
  const newCourse = new Course({
    courseId: req.body.courseId,
    courseName: req.body.courseName,
    description: req.body.description,
    year: req.body.year,
    semester: req.body.semester,
    lectureIncharge: req.body.lectureIncharge
  });
  newCourse
    .save()
    .then(course => {
      res.status(200).json("New Course added");
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

//remove
router.delete("/:course_id", function(req, res) {
  console.log(req.params.course_id);
  let id = req.params.course_id;
  Course.remove(
    {
      _id: id
    },
    function(err) {
      if (err) res.send(err);
      else res.send("Successfully! Course has been Deleted.");
    }
  );
});

//update
router.put("/updateCourse/:id", (req, res) => {
  Course.findById(req.params.id, function(err, course) {
    if (!course) {
      res.status(400).send("Course details not found");
    } else (course.courseId = req.body.courseId), (course.courseName = req.body.courseName), (course.description = req.body.description), (course.year = req.body.year), (course.semester = req.body.semester), (course.lectureIncharge = req.body.lectureIncharge);

    course
      .save()
      .then(course => {
        res.json("course updated");
      })
      .catch(err => {
        res.status(400).send("course not updated");
      });
  });
});

//find all
router.get("/", function(req, res) {
  Course.find(function(err, course) {
    if (err) {
      res.status(400).send(e);
    } else {
      res.json({
        courseId: req.course.courseId,
        courseName: req.course.courseName,
        description: req.course.description,
        year: req.course.year,
        semester: req.course.semester,
        lectureIncharge: req.course.lectureIncharge
      });
    }
  });
});

//find by id
router.get("/:course_id", (req, res) => {
  const courseId = req.body.course_id;
  Course.findOne({ courseId }).then(course => {
    //check for marks
    if (!course) {
      return res.status(404).json("Course not found!");
    } else {
      res.json({
        courseId: req.course.courseId,
        courseName: req.course.courseName,
        description: req.course.description,
        year: req.course.year,
        semester: req.course.semester,
        lectureIncharge: req.course.lectureIncharge
      });
    }
  });
});

module.exports = router;
