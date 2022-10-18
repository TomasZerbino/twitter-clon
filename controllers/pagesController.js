const Tweet = require("../models/Tweet");

async function showHome(req, res) {
  /* const tweets = await Tweet.findAll(); */
  res.render("home");
}

async function showProfile(req, res) {
  const tweets = await Tweet.find({author: {$in: [req.user._id]}}).limit(20)
  res.render("profile",{
    tweets
  });
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
