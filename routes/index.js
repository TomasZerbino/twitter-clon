const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
<<<<<<< HEAD
const makeUserAvailable = require("../middlewares/makeUserAvailable");

module.exports = (app) => {
  app.use(makeUserAvailable);
=======
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

module.exports = (app) => {
  app.use(makeUserAvailableInViews);
>>>>>>> 1c763aeacba4b1626f4eb2cff82e2d59dd6df2cb
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
};
