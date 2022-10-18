const Tweets = require("../models/Tweet");

async function showHome(req, res) {
  // const tweets = await Tweet.findAll();
  res.render("home");
  console.log(req.isAuthenticated());
}

async function showProfile(req, res) {
  res.render("profile");
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showProfile,
  showContact,
  showAboutUs,
};
