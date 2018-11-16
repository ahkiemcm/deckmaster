const mongoose = require('./connection')
const User = require('../models/User')
const MonsterCard = require('../models/MonsterCard')
const Non_MonsterCard = require('../models/Non_MonsterCard')
const Deck = require('../models/Deck')


//Cards
const Kuriboh = new MonsterCard({
    name: 'Kuriboh',
    image: '../images/Kuriboh-card',
    category: 'Effect Monster',
    type: 'Fiend',
    attribute: 'DARK',
    stars: 1,
    text: "During your opponent's turn, at damage calculation: You can discard this card; you take no battle damage from that battle(this is a Quick Effect).",
    atk: 300,
    def: 200
})

const ToonWorld = new Non_MonsterCard({
    name: 'Toon World',
    image: '../images/toon-world-card',
    category: 'Continuous Spell',
    text: 'Activate this card by paying 1000 LP.'
})

const RedEyesBlkDragon = new MonsterCard({
    name: 'Red Eyes Black Dragon',
    image: '../images/Red-Eyes-card',
    category: 'Normal Monster',
    type: 'Dragon',
    attribute: 'DARK',
    stars: 7,
    text: 'A ferocious dragon with a deadly attack.',
    atk: 2400,
    def: 2000
})

//Decks
const Test = new Deck({
    name: 'Test Deck',
    category: 'Main Deck',
    cards: [Kuriboh, RedEyesBlkDragon, ToonWorld]
})

//Users
const Xeke = new User({
    username: 'duelmaster - X',
    password: 'test',
    decks: [Test]
})

// const Zero = new User({
//     username: 'requiemzero',
//     password: 'playstation'
//     // decks: []
// })

// const Gabe = new User({
//     username: 'bboi_slim',
//     password: 'flare'
// })

User.deleteMany({})
    //Deletes all current users and contained content
    .then(() => MonsterCard.insertMany([RedEyesBlkDragon, Kuriboh]))
    .then(() => Non_MonsterCard.insertMany([ToonWorld]))
    .then(() => Xeke.save())
    // Success console prompt
    .then(() => console.log("Database seeded success"))
    // Automatically closes mongoose
    .then(() => mongoose.connection.close())