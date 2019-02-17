const mongoose = require("mongoose");
const User = mongoose.model("users");
const Ride = mongoose.model("rides");
const functions = require("../utils/functions");
const constants = require("../utils/constants");
module.exports = app => {
  //req.user is going to have an id
  app.post("/api/ride/new", async (req, res) => {
    const user = await User.findById(req.body.id);
    console.log(user);

    const ride = await new Ride({
      distance: functions.assignSpeed(),
      time: functions.assignTime(),
      completed: false,
      _user: user.id
    }).save();
    console.log(ride);
    //change to pass array of rides, currently only the one ride
    user.totalTime += ride.time;
    user.totalDistance += ride.distance;
    user.balance += ride.constants;
    console.log(functions.milliToHour(user));
    await user.save();

    res.send(user);
  });
};
