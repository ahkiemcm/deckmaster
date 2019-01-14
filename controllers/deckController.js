const Deck = require('../models/Deck')
const User = require('../models/User')


const deckController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('decks')
            .then((user) => {
                res.send(user.decks)
            })
    },
    show: (req, res) => {
        Deck.findById(req.params.deckId)
            .then((deck) => {
                res.send(deck)
            })
    },
    delete: (req, res) => {
        Deck.findByIdAndDelete(req.params.deckId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                Deck.create(req.body)
                    .then((newDeck) => {
                        user.decks.push(newDeck)
                        user.save()
                        res.send(newDeck)
                    })
            })
    }
}

module.exports = deckController