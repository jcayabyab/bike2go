const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/exampleService");
require("./models/Example");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/exampleRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
