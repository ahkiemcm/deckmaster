const Deck = require('../models/Deck')
const User = require('../models/User')


const deckController = {
    index: (req, res) => {
        Deck.find({})
            .then((decks) => {
                res.send(decks)
            })
    },
    show: (req, res) => {
        Deck.findById(req.params.userId).populate('decks')
            .then((user) => {
                res.send(user)
            })
    },

    edit: (req, res) => {
        var userEdit = req.params.id
        User.findById(userEdit).then(user => {
            res.render('/user/:id/edit', { user: user })
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body)
            .then((updatedUser) => {
                updatedUser.save()
                res.send(updatedUser)
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