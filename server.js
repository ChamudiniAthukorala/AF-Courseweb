const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const studets = require("./routes/api/student");
const lecturers = require("./routes/api/lecturer");
const notifications = require("./routes/api/notification");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;
//connect to mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

//use routes
app.use("/api/users", users);
app.use("/api/student", studets);
app.use("/api/lecturer", lecturers);
app.use("/api/notification", notifications);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
