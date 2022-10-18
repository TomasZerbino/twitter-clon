const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const pagesController = require("../controllers/pagesController");
const loginController = require("../controllers/loginController");
const tweetController = require("../controllers/tweetController");
const loggedUserRedirect = require("../middlewares/redirectLoggedUser");
const passport = require("passport");

// Rutas Públicas:
// ...
publicRouter.get("/", pagesController.showHome);

publicRouter.post("/", loggedUserRedirect, tweetController.create);

publicRouter.get("/profile", pagesController.showProfile);

publicRouter.get("/register", userController.register);

publicRouter.post("/register", userController.create);

publicRouter.get("/user/create", userController.create);

publicRouter.get("/login", loginController.show);

publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
  // loginController.login
);

publicRouter.get("/logout", loginController.logout);

publicRouter.patch("/likes/:id", loggedUserRedirect, userController.update);

module.exports = publicRouter;
