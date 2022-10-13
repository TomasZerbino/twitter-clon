const { Router } = require("express");
const express = require("express");
const publicRouter = express.Router();
const User = require("../models/User");

// Rutas Públicas:
// ...

Router.get("/user/create", (req, res) => {
  const newUser = new User({
    firstname: "Raul",
    lastname: "Gonzalez",
    email: "raulito@gmail.com",
    username: "raulitocra97",
    password: "hola",
    
  });
  newUser.save();
  return res.json(newUser);
});

module.exports = publicRouter;
