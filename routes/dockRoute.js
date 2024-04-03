const express = require('express')
const router = express.Router();

const {
    getAllShippingDock,
    getSingleShippingDock,
    createShippingDock,
    updateShippingDock,
    deleteShippingDock
} = require('../controllers/dock')

router.route('/').get(getAllShippingDock).post(createShippingDock)
router.route('/:id').get(getSingleShippingDock).patch(updateShippingDock).delete(deleteShippingDock)

module.exports = router;