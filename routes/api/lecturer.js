const express = require("express");
const router = express.Router();

// @route   GET api/lecturer/test
// @desc    Test lecturer route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "lecturers works" }));

module.exports = router;
