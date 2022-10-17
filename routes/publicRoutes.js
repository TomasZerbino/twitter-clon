const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");

// Rutas Públicas:
// ...

publicRouter.get("/login", userController.login)

publicRouter.get("/register", userController.register)

publicRouter.post('/register', userController.create)

publicRouter.get("/user/create", userController.create);



module.exports = publicRouter;
