const express = require('express')
const router = express.Router();

const {
    getAllOrder,
    getSingleOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    cursorQuery
} = require('../controllers/order')


router.route('/cursor').get(cursorQuery)
router.route('/').get(getAllOrder).post(createOrder)
router.route('/:id').get(getSingleOrder).patch(updateOrder).delete(deleteOrder)


module.exports = router;
