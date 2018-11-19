const Deck = require('../models/Deck')


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
    new: (req, res) => {

        res.send("New: I'm new here")
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
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((user) => {
                res.send(user)
            })
    }
}

module.exports = deckController