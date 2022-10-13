const { mongoose, Schema } = require("../dbInitialSetup");

const tweetSchema = new Schema({
  content: String,
  likes: Number,
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;