const express = require('express')
const router = express.Router()
const { getUsers, addUser, updateUser } = require('../controllers/usersControllers')

router.get('/', getUsers);
router.post('/', addUser);
router.put('/edit/:id', updateUser);

module.exports = router