const User = require("../models/User");
const flash = require("connect-flash");
const bcrypt = require("bcryptjs");
const Tweet = require("../models/Tweet");

// Display a listing of the resource.

async function register(req, res) {
  res.render("register");
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const userAutentication = await User.findOne({ email: req.body.email });

  if (!userAutentication) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const userCreated = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });
    if (userCreated) {
      req.login(userCreated, function () {
        res.redirect("/login");
      });
    }
  } else {
    req.flash("user", "Este usuario ya existe");
    res.redirect("back");
  }
}
// Update the specified resource in storage.
async function update(req, res) {
  const tweet = await Tweet.findById(req.params.id);
  if (tweet.likes.includes(req.user._id)) {
    const liked = tweet.likes.indexOf(req.user._id);
    tweet.likes.splice(liked, 1);
  } else {
    tweet.likes.push(req.user._id);
  }
  await tweet.save();
  res.redirect("/");
}
// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  // index,
  register,

  show,
  create,
  store,
  edit,
  update,
  destroy,
};
