const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const MonsterCard = new Schema({
    name: String,
    image: String,
    category: String,
    type: String,
    attribute: String,
    stars: Number,
    text: String,
    atk: Number,
    def: Number
})

module.exports = mongoose.model('Monster', MonsterCard)