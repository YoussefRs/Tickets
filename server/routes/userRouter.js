const express = require('express');
const router = express.Router();

const {registerUser, loginUser, getMe} = require('../controllers/userControllers');
const { protectMe } = require('../middleware/authorization')

router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/me', protectMe, getMe)

module.exports =  router 