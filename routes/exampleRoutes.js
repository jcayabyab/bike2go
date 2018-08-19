const mongoose = require("mongoose");
const Example = mongoose.model("example");

module.exports = app => {
  app.get("/example", (req, res) => {
    res.send("This example route sends back a string.");
  });

  app.post("/example/new", (req, res) => {
    new Example({ example: "Example data" }).save();
  });
};
