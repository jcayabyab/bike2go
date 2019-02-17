const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // google
  userId: String,
  // Face API
  personId: {type: String, default: "uninitialized"},
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  // these 3 variables are based on the info inside of rides,
  // could eventually be wrong due to some bad code. We should
  // make a route that recalculates these manually.
  balance: {type: Number, default: 0},
  totalTime: {type: Number, default: 0},
  totalDistance: {type: Number, default: 0},
  _rides: [{ type: Schema.Types.ObjectId, ref: "rides" }]
});

mongoose.model("users", userSchema);
