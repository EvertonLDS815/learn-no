const mongoose = require("mongoose");

const noSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    nivel: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    linkImage: {
        type: String,
        require: true
    },
    linkVideo: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("No", noSchema)