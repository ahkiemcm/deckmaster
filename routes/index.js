const express = require('express')
const router = express.Router()
const appCtrl = require('../controllers/appController')
const userCtrl = require('../controllers/userController')
const deckCtrl = require('../controllers/deckController')
// const cardCtrl = require('../controllers/cardController')

//Application Index || Splash Page
router.get('/', appCtrl.index)

//User Routes
router.get('/user', userCtrl.index)
router.get('/user/:userId', userCtrl.show)
router.get('/user/new', userCtrl.new)
router.post('/user', userCtrl.create)
router.delete('/user/:userId', userCtrl.delete)
router.get('/user/:userId/edit', userCtrl.edit)
router.put('/user/:userId', userCtrl.update)
router.patch('/user/:userId', userCtrl.update)

//Deck Routes
router.get('/user/:userId/deck', deckCtrl.index)
router.get('/user/:userId/deck/:deckId', deckCtrl.show)
router.post('/user/:userId/deck', deckCtrl.create)
router.delete('/user/:userId/deck/:deckId', deckCtrl.delete)

//Card Routes
// router.get('/user/:userId/deck/:deckId:/card', cardCtrl.index)
// router.get('/user/:userId/deck/:deckId/card/:cardId', cardCtrl.show)
// router.delete('/user/:userId/deck/:deckId/card/:cardId', cardCtrl.delete)


module.exports = router