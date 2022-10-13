const { faker } = require("@faker-js/faker");
const Tweet = require("../models/Tweet");
const { mongoose } = require("mongoose");


module.exports = async () => {
    const tweets = [];
  
    for (let i = 0; i < 300; i++) {
      tweets.push({
        content: faker.lorem.sentence(5),
        likes: faker.datatype.number({
          min: 1,
          max: 200,
        }),
      });
    }
  
    await Tweet.insertMany(tweets);
    console.log("[Database] Se corrió el seeder de Tweets.");
  };