const express = require("express");
const router = express.Router();

// @route   GET api/notification/test
// @desc    Test notification route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "notify works" }));

module.exports = router;
