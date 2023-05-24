const mongoose = require('mongoose');

const onof = new mongoose.Schema({
    on : {
        type : String,
    }
})

module.exports = mongoose.model("onof",onof);
