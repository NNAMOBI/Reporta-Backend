"use strict"


const router = require('express').Router();
const userController = require('../../app/users/userController')
const userValidate = require('../../app/users/userValidation')


// router.get('/', userController.createUser);


//create user  
router.post('/create/token', userValidate.userInput, userController.createAdminUser)
router.get('/credentials/token',  userController.findUser)





module.exports = router;