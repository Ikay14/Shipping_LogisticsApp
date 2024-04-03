const express = require('express')
const router = express.Router();

const {
    getAllTransaction,
    getSingleTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require('../controllers/trans')

router.route('/').get(getAllTransaction).post(createTransaction)
router.route('/:id').get(getSingleTransaction).patch(updateTransaction).delete(deleteTransaction)

module.exports = router;