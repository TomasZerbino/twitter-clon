const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const pagescontroller = require("../controllers/pagesController");
const tweetController = require("../controllers/tweetController");
const passport = require("passport");
// Rutas Públicas:
// ...
publicRouter.get("/", pagescontroller.showHome);

publicRouter.post("/", tweetController.create);

publicRouter.get("/profile", pagescontroller.showProfile);

publicRouter.get("/login", userController.login);

publicRouter.get("/register", userController.register);

publicRouter.post("/register", userController.create);

publicRouter.get("/user/create", userController.create);

publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

module.exports = publicRouter;
