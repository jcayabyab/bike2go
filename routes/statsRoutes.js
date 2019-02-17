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

    const rides = await Ride.find({ _user: req.body.id });
    let totalTime = 0;
    let totalDistance = 0;
    // iterate through existing users (new ride not added yet)
    rides.forEach(ride => {
      totalTime += ride.time;
      totalDistance += ride.distance;
    });

    // new ride
    totalTime += ride.time;
    totalDistance += ride.distance;

    user.totalTime = totalTime;
    user.totalDistance = totalDistance;
    user.balance = constants.rate * user.totalTime;
    await user.save();

    res.send({ user, rides });
  });

  app.post("/api/ride", async (req, res) => {
    console.log("Obtained");
    console.log(req.body.id);
    const rides = await Ride.find({ _user: req.body.id });
    res.send(rides);
  });
};
