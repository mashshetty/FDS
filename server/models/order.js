const mongoose = require("mongoose");

const order = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  items: {
    type: Object,
    required: true,
  },

  total : {
    type : Number,
    required: true,
  },
  date : {
    type : String,
  },
  shopname : {
    type : String,
  },

  



} ,
{ timestamps: true });

module.exports = mongoose.model("order", order);
