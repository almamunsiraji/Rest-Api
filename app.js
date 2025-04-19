const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express();

module.exports = app;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRouter);

// Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
// Route not found Error
app.use((req, res, next) => {
  res.status(400).json({ message: "Route not found" });
});
// Server error

app.use((error, req, res, next) => {
  res.status(400).json({ message: "Server Error" });
});
