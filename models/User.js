const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  faceImgURL: { type: String, default: "" },
  // these 3 variables are based on the info inside of rides,
  // could eventually be wrong due to some bad code. We should
  // make a route that recalculates these manually.
  balance: Number,
  totalTime: Number,
  totalDistance: Number,
  _rides: { type: Schema.Types.ObjectId, ref: "rides" }
});

mongoose.model("users", userSchema);
