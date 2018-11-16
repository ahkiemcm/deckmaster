const mongoose = require('./connection')
const User = require('../models/User')
const MonsterCard = require('../models/MonsterCard')
const Non_MonsterCard = require('../models/Non_MonsterCard')
const Deck = require('../models/Deck')

//Cards
const Kuriboh = new MonsterCard({
    name: 'Kuriboh',
    image: '',
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
    image: '',
    category: 'Continuous Spell',
    text: 'Activate this card by paying 1000 LP.'
})

const M_Reborn = new Non_MonsterCard({
    name: 'Monster Reborn',
    image: '',
    category: 'Spell',
    text: 'Revives one monster and returns them from the graveyard to the field.'
})

const RedEyesBlkDragon = new MonsterCard({
    name: 'Red Eyes Black Dragon',
    image: '',
    category: 'Normal Monster',
    type: 'Dragon',
    attribute: 'DARK',
    stars: 7,
    text: 'A ferocious dragon with a deadly attack.',
    atk: 2400,
    def: 2000
})

const CelticWarrior = new MonsterCard({
    name: 'Celtic Warrior',
    image: '',
    category: 'Normal Monster',
    type: 'Warrior',
    attribute: 'LIGHT',
    stars: 3,
    text: 'A warrior.',
    atk: 1300,
    def: 1100
})

//Decks
const Test = new Deck({
    name: 'Test Deck',
    category: 'Main Deck',
    cards: [Kuriboh, RedEyesBlkDragon, ToonWorld]
})

const Test2 = new Deck({
    name: 'Test Deck #2',
    category: 'Main Deck',
    cards: [CelticWarrior, M_Reborn]
})

//Users
const Xeke = new User({
    username: 'duelmaster - X',
    password: 'test',
    decks: [Test]
})

const Zero = new User({
    username: 'requiemzero',
    password: 'playstation',
    decks: [Test2]
})

// const Gabe = new User({
//     username: 'bboi_slim',
//     password: 'flare'
// })

//Deletes all current users and contained content
User.deleteMany({})
Deck.deleteMany({})
MonsterCard.deleteMany({})
Non_MonsterCard.deleteMany({})
    //Creates all instances...
    .then(() => MonsterCard.insertMany([RedEyesBlkDragon, Kuriboh, CelticWarrior]))
    .then(() => Non_MonsterCard.insertMany([ToonWorld, M_Reborn]))
    //Saves the top instance that all lower instances are stored in
    .then(() => Test.save())
    .then(() => Test2.save())
    .then(() => Xeke.save())
    .then(() => Zero.save())
    // // Success console prompt
    .then(() => console.log("Database seeded success"))
    // Automatically closes mongoose
    .then(() => mongoose.connection.close())
