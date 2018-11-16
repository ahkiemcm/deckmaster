const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Non_MonsterCard = new Schema({
    name: String,
    image: String,
    category: String,
    text: String
})

module.exports = mongoose.model('Spell/Trap', Non_MonsterCard)