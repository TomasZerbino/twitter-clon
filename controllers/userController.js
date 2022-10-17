const User = require("../models/User");
const flash = require("connect-flash");

// Display a listing of the resource.
async function login(req, res) {
  res.render("login");
}

async function register(req, res) {
  res.render("register");
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {

  const userAutentication = await User.findOne({ email: req.body.email });
  console.log(userAutentication);
  if (!userAutentication) {
    const userCreated = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
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
  login,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
