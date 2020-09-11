'use strict'

const router = require('express').Router()
const userController = require('../pages/user/controller/user.controller');

router.get('/users', userController.getAllUser);
router.post('/register', userController.createLocalUser);
router.post('/login', userController.login);

module.exports = router;