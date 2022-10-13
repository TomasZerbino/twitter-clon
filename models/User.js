const { mongoose, Schema } = require("../dbInitialSetup");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  tweets: {
    type: Schema.Types.ObjectId,
    ref: "Tweet",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
