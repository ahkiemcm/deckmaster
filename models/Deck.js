const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Deck = new Schema({
    name: String,
    category: String,
    cards: []
})

module.exports = mongoose.model('Deck', Deck)