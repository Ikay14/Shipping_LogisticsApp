const express = require('express')
const router = express.Router()


const {
    getAUser,
    getAllUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/auth')

router.route('/').get(getAllUser).post(createUser)
router.route('/:id').get(getAUser).patch(updateUser).delete(deleteUser)

module.exports = router