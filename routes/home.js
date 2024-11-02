const express = require("express");
const routerHome = express.Router();

routerHome.get("/", (req, res) => {
  res.send("We are on home!");
});

module.exports = routerHome;
