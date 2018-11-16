const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Card = new Schema({
    name: String,
    image: String,
    category: String,
    type: String,
    attribute: String,
    stars: Number,
    text: String,
    attack: Number,
    defense: Number
})

module.exports = mongoose.model('Card', Card)