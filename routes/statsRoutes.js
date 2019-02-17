const mongoose = require("mongoose");
const User = mongoose.model("users");
const Ride = mongoose.model("rides");
const functions = require("../utils/functions");
const constants = require("../utils/constants");
module.exports = app => {
  //req.user is going to have an id
  app.post("/api/ride/new", async (req, res) => {
    const user = await User.findById(req.body.id).populate("rides");
    console.log(user);

    const ride = await new Ride({
      distance: functions.assignSpeed(),
      time: functions.assignTime(),
      completed: false,
      _user: user.id
    }).save();
    user.totalTime += ride.time;
    user.totalDistance += ride.distance;
    user.balance = constants.rate * user.totalTime;
    console.log(functions.milliToHour(user));
    await user.save();

    const rides = await Ride.find({ _user: req.body.id });

    res.send({ user, rides });
  });

  app.post("/api/ride", async (req, res) => {
    console.log("Obtained");
    console.log(req.body.id);
    const rides = await Ride.find({ _user: req.body.id });
    res.send(rides);
  });
};
