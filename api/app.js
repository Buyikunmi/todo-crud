const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRouter = require("./routes/todo");

var app = express();
require("dotenv").config();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Mongodb connection
console.log("Connecting to MongoDB...");
mongoose.connect(
  process.env.MONGOURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error("An error occured", err);
    else console.log("Connected to MongoDB...");
  }
);

// Routes
app.use("/api/todo", todoRouter);

// Serve Static Files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

module.exports = app;
