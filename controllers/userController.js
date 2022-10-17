const User = require("../models/User");

// Display a listing of the resource.
async function login(req, res) {
  res.render('login')
}

async function register(req, res) {
  res.render('register')
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const newUser = new User({
    firstname: "Lucas",
    lastname: "Ramirez",
    email: "luquitas@gmail.com",
    username: "luquitas54",
    password: "hola",
  });
  await newUser.save();
  return res.json(newUser);
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
  index,
  register,
  login,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
