const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const user = require("./routes/user");
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
var mongoose = require("mongoose");

const app = express();
app.use(express.json());
// PORT
const PORT = process.env.PORT || 9000;

app.use(cors());

// Middleware
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/divineexplore", {
  useNewUrlParser: true, useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("We're connected!");
});

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use('/item',itemRoutes);
app.use('/cart',cartRoutes);
app.use('/order',orderRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});