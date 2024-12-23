
const mongoose = require('mongoose')

require("./ArtWork");
const schema = mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    score: {
        type: Number,
        required: true,
    },


    date: {
        type: Date,
        default: () => Date.now(),
        immutable: false
    },
    isAccept: {
        type: Boolean,
        default: false
    },



    // Reference to Product
    artWorkID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ArtWork",
        required: true
    },



})

const model = mongoose.models.Comment || mongoose.model("Comment", schema)
export default model