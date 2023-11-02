const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/mongoose'); // Import the Mongoose object from your config folder
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/index'));

// The Mongoose object is already connected, so you don't need to call mongoose.connect here.

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Server is running ...", PORT);
});