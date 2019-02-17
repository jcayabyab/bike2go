const mongoose = require("mongoose");
const User = mongoose.model("users");
const Ride = mongoose.model("rides")
const functions = require("../utils/functions");
module.exports = app => {
    //req.user is going to have an id
  app.post("/api/ride/new", async (req, res) => {
    const user = await User.findById(req.body.id);
    console.log(user);

    const ride = await new Ride({ distance: functions.assignSpeed(),
        time: functions.assignTime(),
        completed: false,
        _user: user.id
    }).save();
    console.log(ride);
    //change to pass array of rides, currently only the one ride
    functions.sumTimes([ride], user);
    console.log(functions.milliToHour(user));
    
  });
};

