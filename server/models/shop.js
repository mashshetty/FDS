const mongoose = require("mongoose");

const ashop = new mongoose.Schema({
  shopname: {
    type: String,
    
  },

  address: {
    type: String,
    
  },

  image: {
    type: String,
  
  },

  oc: {
    type: String,
    
  },

  holiday : {
    type : String,
 
  },

  open : {
    type : String,
 
  },

});

module.exports = mongoose.model("shops", ashop);
