const express = require("express");
const router = express.Router();

// @route   GET api/student/test
// @desc    Test student route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "studetn works" }));

module.exports = router;
