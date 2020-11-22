const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");
const bodyParser = require("body-parser");

const client = require("./db/redis").client;
// var connect = require("./database");

const indexRouter = require("./routes/index");

var app = express();

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Main
app.use("/", indexRouter);

app.listen(4000, () => console.log("Server Up and running at 4000"));

module.exports = app;
