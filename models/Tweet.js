const { mongoose, Schema } = require("../dbInitialSetup");

const tweetSchema = new Schema(
  {
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        maxLength: [140, "Maximo 140"],
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
