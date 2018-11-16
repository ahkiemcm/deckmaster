const express = require('express')
const router = express.Router()
const appCtrl = require('../controllers/appController')
const userCtrl = require('../controllers/userController')

//Application Index || Splash Page
router.get('/', appCtrl.index)

//User Routes
router.get('/user', userCtrl.index) //---I don't think we'll need this for our user
router.get('/user/new', userCtrl.new)
router.post('/user', userCtrl.create)
router.get('/user/:id', userCtrl.show)
router.delete('/user/:id', userCtrl.delete)
router.get('/user/:id/edit', userCtrl.edit)
router.put('/:id', userCtrl.update)
router.patch('/:id', userCtrl.update)

//Card Routes

//

module.exports = router