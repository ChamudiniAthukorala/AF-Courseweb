const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const admins = require("./routes/api/admins");
// const assignments = require("./routes/api/assignment");
const courses = require("./routes/api/courses");
const instructors = require("./routes/api/instructors");
const marks = require("./routes/api/marks");
// const notifications = require("./routes/api/notification");
const studets = require("./routes/api/student");
const users = require("./routes/api/users");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//connect to mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//app.get("/", (req, res) => res.send("Hello"));

//passport middleware
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);

//use routes
app.use("/api/admins", admins);
// app.use("/api/assignments", assignments);
app.use("/api/courses", courses);
app.use("/api/instructors", instructors);
app.use("/api/marks", marks);
// app.use("/api/notifications", notifications);
app.use("/api/students", studets);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
