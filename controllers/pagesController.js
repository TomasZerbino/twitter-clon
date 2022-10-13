const { Tweets} = require("../models");

async function showHome(req, res) {
  const tweets = await Tweet.findAll();
  res.render("home", { tweets });
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
  showContact,
  showAboutUs,
};
