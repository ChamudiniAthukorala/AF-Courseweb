// const express = require("express");
// const router = express.Router();
// const keys = require("../../config/keys");

// //db not complete
// const Admin = require("../../models/AdminModel");

// //check status not cokplete
// router.get("/test", (req, res) => res.json({ msg: "______ works" }));

// //load input valications
// const validateRegisterInputAdmin = require("../../validation/register_admin");

// //add
// router.post("/", (req, res) => {
//   const { errors, isValid } = validateRegisterInputAdmin(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   Admin.findOne({ email: req.body.email }).then(admin => {
//     if (admin) {
//       errors.email = "Email already exists";
//       return res.status(400).json(errors);
//     } else {
//       const avatar = gravatar.url(req.body.email, {
//         //this varible is used forupload profile sign image to database
//         s: "200", //size
//         r: "pg", //rating
//         d: "mm" //default
//       });

//       const newAdmin = new Admin({
//         fname: req.body.name,
//         lname: req.body.lname,
//         dob: req.body.dob,
//         uid: req.body.uid,
//         email: req.body.email,
//         password: req.body.password,
//         avatar
//       });

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newAdmin.password, salt, (err, hash) => {
//           if (err) throw err;
//           newAdmin.password = hash;
//           newAdmin
//             .save()
//             .then(admin => res.json(admin))
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

// //remove
// router.delete("/:admin_id", function(req, res) {
//   console.log(req.params.admin_id);
//   let id = req.params.admin_id;
//   Employee.remove(
//     {
//       _id: id
//     },
//     function(err) {
//       if (err) res.send(err);
//       else res.send("Successfully! Admin has been Deleted.");
//     }
//   );
// });

// //update
// router.put("/:admin_id", function(req, res) {
//   // create mongose method to update a existing record into collection
//   let id = req.params.admin_id;
//   const data = {
//     fname: req.body.name,
//     lname: req.body.lname,
//     dob: req.body.dob,
//     email: req.body.email,
//     password: req.body.password
//   };

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(data.password, salt, (err, hash) => {
//       if (err) throw err;
//       data.password = hash;
//       // save the user
//       Admin.findByIdAndUpdate(id, data, function(err, admin) {
//         if (err) throw err;

//         res.send("Successfully! Admin updated - " + admin.fname);
//       });
//     });
//   });
// });

// //find all
// router.get("/", function(req, res) {
//   Admin.find(function(err, admin) {
//     if (err) {
//       res.status(400).send(e);
//     } else {
//       res.json({
//         fname: req.admin.name,
//         lname: req.admin.lname,
//         dob: req.admin.dob,
//         uid: req.admin.uid,
//         email: req.admin.email,
//         password: req.admin.password
//       });
//     }
//   });
// });

// //find by id
// router.get("/:adminID:", (req, res) => {
//   const uid = req.body.adminID;
//   Admin.findOne({ uid }).then(admin => {
//     //check for marks
//     if (!admin) {
//       return res.status(404).json("User not found!");
//     } else {
//       res.json({
//         fname: req.admin.name,
//         lname: req.admin.lname,
//         dob: req.admin.dob,
//         uid: req.admin.uid,
//         email: req.admin.email,
//         password: req.admin.password
//       });
//     }
//   });
// });

// module.exports = router;
