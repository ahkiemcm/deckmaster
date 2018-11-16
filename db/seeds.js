const mongoose = require('./connection')
const User = require('../models/User')

const Xeke = new User({
    username: 'duelmaster - X',
    password: 'test'
    // decks: []
})

const Zero = new User({
    username: 'requiemzero',
    password: 'playstation'
    // decks: []
})

const Gabe = new User({
    username: 'bboi_slim',
    password: 'flare'
})

