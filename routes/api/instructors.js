const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

//db not complete
const Instructor = require("../../models/InstructorModel");

//check status not cokplete
router.get("/test", (req, res) => res.json({ msg: "______ works" }));

//load input valications
const validateRegisterInputInstructor = require("../../validation/register_instructor");

//add
router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInputInstructor(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Instructor.findOne({ email: req.body.email }).then(instructor => {
    if (instructor) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        //this varible is used forupload profile sign image to database
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default
      });

      const newInstructor = new Instructor({
        fname: req.body.name,
        lname: req.body.lname,
        dob: req.body.dob,
        uid: req.body.uid,
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newInstructor.password, salt, (err, hash) => {
          if (err) throw err;
          newInstructor.password = hash;
          newInstructor
            .save()
            .then(instructor => res.json(instructor))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//remove
router.delete("/:instructor_id", function(req, res) {
  console.log(req.params.instructor_id);
  let id = req.params.instructor_id;
  Instructor.remove(
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
router.put("/:instructor_id", function(req, res) {
  // create mongose method to update a existing record into collection
  let id = req.params.instructor_id;
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
      Instructor.findByIdAndUpdate(id, data, function(err, instructor) {
        if (err) throw err;

        res.send("Successfully! Admin updated - " + instructor.fname);
      });
    });
  });
});

//find all
router.get("/", function(req, res) {
  Instructor.find(function(err, instructor) {
    if (err) {
      res.status(400).send(e);
    } else {
      res.json({
        fname: req.instructor.name,
        lname: req.instructor.lname,
        dob: req.instructor.dob,
        uid: req.instructor.uid,
        email: req.instructor.email,
        password: req.instructor.password
      });
    }
  });
});

//find by id
router.get("/:instructor_id:", (req, res) => {
  const uid = req.body.instructor_id;
  Instructor.findOne({ uid }).then(instructor => {
    //check for marks
    if (!instructor) {
      return res.status(404).json("User not found!");
    } else {
      res.json({
        fname: req.instructor.name,
        lname: req.instructor.lname,
        dob: req.instructor.dob,
        uid: req.instructor.uid,
        email: req.instructor.email,
        password: req.instructor.password
      });
    }
  });
});

module.exports = router;
