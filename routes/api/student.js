const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

//db not complete
const Student = require("../../models/StudentModel");

//check status not cokplete
router.get("/test", (req, res) => res.json({ msg: "______ works" }));

//load input valications
const validateRegisterInputStudent = require("../../validation/register_student");

//add
router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInputStudent(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Student.findOne({ email: req.body.email }).then(student => {
    if (student) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        //this varible is used forupload profile sign image to database
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default
      });

      const newStudent = new Student({
        fname: req.body.name,
        lname: req.body.lname,
        dob: req.body.dob,
        uid: req.body.uid,
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          newStudent
            .save()
            .then(student => res.json(student))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//remove
router.delete("/:student_id", function(req, res) {
  console.log(req.params.student_id);
  let id = req.params.student_id;
  Student.remove(
    {
      _id: id
    },
    function(err) {
      if (err) res.send(err);
      else res.send("Successfully! Admin has been Deleted.");
    }
  );
});

//update
router.put("/:student_id", function(req, res) {
  // create mongose method to update a existing record into collection
  let id = req.params.student_id;
  const data = {
    fname: req.body.name,
    lname: req.body.lname,
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.password
  };

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(data.password, salt, (err, hash) => {
      if (err) throw err;
      data.password = hash;
      // save the user
      Student.findByIdAndUpdate(id, data, function(err, student) {
        if (err) throw err;

        res.send("Successfully! Admin updated - " + student.fname);
      });
    });
  });
});

//find all
router.get("/", function(req, res) {
  Student.find(function(err, student) {
    if (err) {
      res.status(400).send(e);
    } else {
      res.json({
        fname: req.student.name,
        lname: req.student.lname,
        dob: req.student.dob,
        uid: req.student.uid,
        email: req.student.email,
        password: req.student.password
      });
    }
  });
});

//find by id
router.get("/:adminID:", (req, res) => {
  const uid = req.body.adminID;
  Student.findOne({ uid }).then(admin => {
    //check for marks
    if (!admin) {
      return res.status(404).json("User not found!");
    } else {
      res.json({
        fname: req.student.name,
        lname: req.student.lname,
        dob: req.student.dob,
        uid: req.student.uid,
        email: req.student.email,
        password: req.student.password
      });
    }
  });
});

module.exports = router;
