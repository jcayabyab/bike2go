const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.get("/api/face/new", (req, res) => {
    res.send("Hello");
    // base64 string for the image
    // get a user based on ID from front end

    // make a new Person inside of the API server
    // upload the face to the Person -> look at return value?
    // DATABASE **
    // assign personID to User object
  });

  app.post("/api/face/identify", (req, res) => {
    // get image, call faceDetect
    // return faceID
    // call faceIdentify with the ID
    // return the personID, and confidence

    // DATABASE **
    // Interact with model to get User object
    // send the User
    // if nothing was found, then send an error message
  });
};
