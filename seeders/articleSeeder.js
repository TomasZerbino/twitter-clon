// const { faker } = require("@faker-js/faker");
// const { Tweet } = require("../models");

// faker.locale = "es";

// module.exports = async () => {
//   const tweets = [];

//   for (let i = 0; i < 3000; i++) {
//     tweets.push({
//       title: faker.lorem.sentence(5),
//       content: faker.lorem.paragraphs(),
//     });
//   }

//   await Tweet.bulkCreate(tweets);
//   console.log("[Database] Se corrió el seeder de Tweets.");
// };
