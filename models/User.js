const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    decks: []
})

module.exports = mongoose.model('User', User)