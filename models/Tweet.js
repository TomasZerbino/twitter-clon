const { mongoose, Schema } = require("../dbInitialSetup");

const tweetSchema = new Schema(
  {
    content: String,
    // likes: [ObjectId],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
