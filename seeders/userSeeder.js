const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const { mongoose } = require("mongoose");

faker.locale = "es";

module.exports = async () => {
  await mongoose.connection.dropDatabase();
  const users = [];

  for (let i = 0; i < 20; i++) {
    const user = new User ({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: 1234,
      bio: faker.lorem.paragraphs(),
    });
    users.push(user)
  }

  for(let i = 0; i < users.length; i++ ){
    let random = faker.datatype.number({min:0,max:users.length-1});
    while( random === i ){
      random = faker.datatype.number({min:0,max:users.length-1})
    }
    users[i].following.push(users[random]._id)
    users[random].followers.push(users[i]._id)
  }

  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
