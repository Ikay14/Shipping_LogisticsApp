const express = require('express')
const router = express.Router();

const {
    getAllOrder,
    getSingleOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    getCursor
} = require('../controllers/order')


router.route('/').get(getAllOrder).post(createOrder)
router.route('/:id').get(getSingleOrder).patch(updateOrder).delete(deleteOrder)
router.route('/cursor').get(getCursor)


module.exports = router;
