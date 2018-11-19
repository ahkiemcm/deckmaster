const express = require('express')
const router = express.Router()
const appCtrl = require('../controllers/appController')
const userCtrl = require('../controllers/userController')
const deckCtrl = require('../controllers/deckController')
// const cardCtrl = require('../controllers/cardController')

//Application Index || Splash Page
router.get('/', appCtrl.index)

//User Routes
router.get('/api/user', userCtrl.index)
// router.get('/api/user/new', userCtrl.new)
// router.post('/api/user', userCtrl.create)
// router.get('/api/user/:userId', userCtrl.show)
// router.delete('/api/user/:userId', userCtrl.delete)
// router.get('/api/user/:userId/edit', userCtrl.edit)
// router.put('/api/user/:userId', userCtrl.update)
// router.patch('/api/user/:userId', userCtrl.update)

//Deck Routes
router.get('/api/user/:userId/deck', deckCtrl.index)
router.get('/api/user/:userId/deck/new', deckCtrl.new)
router.post('/api/user/:userId/deck', deckCtrl.create)
router.get('/api/user/:userId/deck/:deckId', deckCtrl.show)
router.delete('/api/user/:userId/deck/:deckId', deckCtrl.delete)
router.get('/api/user/:userId/deck/:deckId/edit', deckCtrl.edit)
router.put('/api/user/:userId/deck/:deckId', deckCtrl.update)
router.patch('/api/user/:userId/deck/:deckId', deckCtrl.update)

//Card Routes
// router.get('/api/user/:userId/deck/:deckId:/card', cardCtrl.index)
// router.get('/api/user/:userId/deck/:deckId/card/:cardId', cardCtrl.show)
// router.delete('/api/user/:userId/deck/:deckId/card/:cardId', cardCtrl.delete)


module.exports = router