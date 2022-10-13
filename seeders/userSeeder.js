const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const { mongoose } = require("mongoose");

faker.locale = "es";

module.exports = async () => {
  await mongoose.connection.dropDatabase();
  const users = [];

  for (let i = 0; i < 20; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.name.firstName() + faker.name.lastName(),
      password: 1234,
    });
  }

  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
