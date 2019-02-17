const mongoose = require("mongoose");
const { Schema } = mongoose;

const rideSchema = new Schema({
  // stored in km
  distance: { type: Number, default: 0 },
  time: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("rides", rideSchema);
