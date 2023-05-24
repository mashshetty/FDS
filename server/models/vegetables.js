const mongoose = require("mongoose");

const veg = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    // required: true,
  },

  shopname: {
    type: String,
   
  },
});

module.exports = mongoose.model("veg", veg);
