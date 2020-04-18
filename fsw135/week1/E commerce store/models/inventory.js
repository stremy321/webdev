const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Store", InventorySchema)