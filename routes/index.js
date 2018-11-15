const express = require('express')
const router = express.Router()
const appCtrl = require('../controllers/appController')

router.get('/', appCtrl.index)

module.exports = router