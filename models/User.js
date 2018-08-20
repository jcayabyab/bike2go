const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" }
});

mongoose.model("users", userSchema);
