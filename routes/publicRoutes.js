const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");

// Rutas Públicas:
// ...

publicRouter.get("/user/create", userController.create);

module.exports = publicRouter;
