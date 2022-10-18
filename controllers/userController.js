const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Display a listing of the resource.

async function register(req, res) {
  res.render("register");
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const userAutentication = await User.findOne({ email: req.body.email });
  const passwordAutentication = req.body.password === req.body.confirmPassword;

  if (!userAutentication & passwordAutentication) {
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
    if (!passwordAutentication) {
      req.flash("user", "⚠️  Password confirmation doesn't match Password!");
      res.redirect("back");
    } else {
      req.flash("user", "⚠️  User already exists!");
      res.redirect("back");
    }
  }
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

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
