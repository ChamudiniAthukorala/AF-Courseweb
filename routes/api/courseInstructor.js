const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const keys = require("../../config/keys");

const CourseInstructor = require("../../models/course_instructors");
const Instructor = require("../../models/InstructorModel");

router.get("/test", (req, res) => res.json({ msg: "course_instructor works" }));

//==========================
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "project9699@gmail.com",
    pass: "9699@ABCH"
  }
});

//add
router.post("/add", (req, res) => {
    const newCourseIns = new CourseInstructor({
        uid: req.body.uid,
        email: req.body.email,
        courseID: req.body.courseID
    });
    newCourseIns
      .save()
      .then(course => {

        var mailOptions = {
          from: "project9699@gmail.com",
          to:  req.body.email,
          subject: "Notifying Instructor Registration to the new Course",
  
          html:
            "<p>Dear madam/sir,</p></br>We are happy to announce that you have </br>been added to the new course as a instructor</br>Thank you!"
        };
  
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        Instructor.findOne({ email: req.body.email }).then(instructor => {
            if (!instructor) {
              errors.email = "Invalid Email";
              return res.status(400).json(errors);
            } else {
        
              var mailOptions = {
                from: "project9699@gmail.com",
                to:  req.body.email,
                subject: "Notifying Instructor Registration to the new Course",
        
                html:
                  "<p>Dear madam/sir,</p></br>We are happy to announce that you have </br>been added to the new course as a instructor</br>Thank you!"
              };
        
              transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
            }
          });

        res.status(200).json("New instructor added to the course");
      })
      .catch(e => {
        res.status(400).send(e);
      });
  });

  router.get("/", function(req, res) {
    CourseInstructor.find(function(err, courseIns) {
      if (err) {
        res.status(400).send(e);
      } else {
        res.json(courseIns);
      }
    });
  });

//Get all instructors per courser ID
router.get("/getCourseInstructors/:courseId", (req, res) => {
    const courseId = req.body.courseId;
    CourseInstructor.findOne({ courseId }).then(courseIns => {
      //check for marks
      if (!courseIns) {
        return res.status(404).json("Assignment not found!");
      } else {
        res.json({
            courseIns
        });
      }
    });
  });

  module.exports = router;