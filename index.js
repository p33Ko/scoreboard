const express = require("express");
const bodyParser = require("body-parser");
const resultsRoutes = require("./api/routes/results");
const scoreboardRoutes = require("./api/routes/scoreboard");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(scoreboardRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })

  .then(console.log("connected"))

  .catch((error) => {
    console.log("xxxxxxxxxxxxxxxxxx");
    console.log(error);
    console.log("xxxxxxxxxxxxxxxxxx");
  });

app.use(resultsRoutes);
app.use(scoreboardRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(3000);
