const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    status: {
        type: String,
        enum: ["Pending", "Completed", "Not Started"],
        default: "Pending"
    },
    start_date: Date,
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Todo", TodoSchema);