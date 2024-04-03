const express = require('express')
const router = express.Router()

const { 
    getOddOrders
} = require('../controllers/odd')

router.route('/').get(getOddOrders)

module.exports = router;