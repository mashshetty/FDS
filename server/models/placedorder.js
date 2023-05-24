const mongoose = require("mongoose");

const porder = new mongoose.Schema({
  name: {
    type: String,
    
  },

  phone: {
    type: String,
    
  },

  address: {
    type: String,
  
  },

  items: {
    type: Object,
    
  },

  total : {
    type : Number,
 
  },

  shopname : {
    type : String,
  },

  date : {
    type : String,
  },

});

module.exports = mongoose.model("porder", porder);
