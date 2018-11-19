const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Deck = new Schema({
    name: String,
    category: String,
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'MonsterCard'
    },
    {
        type: Schema.Types.ObjectId,
        ref: 'Non_MonsterCard'
    }]
})

module.exports = mongoose.model('Deck', Deck)