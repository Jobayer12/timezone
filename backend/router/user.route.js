'use strict'

const router = require('express').Router()
const userController = require('../pages/user/controller/user.controller');
const userMiddleWare= require('../middleware/user.role');

router.get('/users', userMiddleWare.userLoginTokenVerified, userController.getAllUser);
router.post('/register', userController.createLocalUser);
router.post('/login', userController.login);

module.exports = router;