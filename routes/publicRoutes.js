const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
<<<<<<< HEAD
const pagescontroller = require("../controllers/pagesController");
const tweetController = require("../controllers/tweetController");
const passport = require("passport");
=======
const pagesController = require("../controllers/pagesController");
const loginController = require("../controllers/loginController");
const loggedUserRedirect = require("../middlewares/redirectLoggedUser");
const passport = require("passport");

>>>>>>> 1c763aeacba4b1626f4eb2cff82e2d59dd6df2cb
// Rutas Públicas:
// ...
publicRouter.get("/", pagesController.showHome);

<<<<<<< HEAD
publicRouter.post("/", tweetController.create);

publicRouter.get("/profile", pagescontroller.showProfile);

publicRouter.get("/login", userController.login);
=======
publicRouter.get("/profile", pagesController.showProfile);
>>>>>>> 1c763aeacba4b1626f4eb2cff82e2d59dd6df2cb

publicRouter.get("/register", userController.register);

publicRouter.post("/register", userController.create);

publicRouter.get("/user/create", userController.create);

<<<<<<< HEAD
=======
publicRouter.get("/login", loginController.show);

>>>>>>> 1c763aeacba4b1626f4eb2cff82e2d59dd6df2cb
publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
<<<<<<< HEAD
);

=======
// loginController.login
);

publicRouter.get("/logout", loginController.logout);

>>>>>>> 1c763aeacba4b1626f4eb2cff82e2d59dd6df2cb
module.exports = publicRouter;
