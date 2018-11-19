const User = require('../models/User')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                res.send(user)
            })
    },
    new: (req, res) => {

        res.send("New: I'm new here")
    },
    create: (req, res) => {
        User.create(req.body)
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
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })
    }
}

module.exports = userController