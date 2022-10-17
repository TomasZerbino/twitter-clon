const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const pagescontroller = require("../controllers/pagesController");

// Rutas Públicas:
// ...
publicRouter.get("/", pagescontroller.showHome);

publicRouter.get("/profile", pagescontroller.showProfile);

publicRouter.get("/login", userController.login);

publicRouter.get("/register", userController.register);

publicRouter.get("/user/create", userController.create);

module.exports = publicRouter;
