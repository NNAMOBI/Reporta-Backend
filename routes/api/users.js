"use strict"

//libraries
const router = require('express').Router();
const userController = require('../../app/users/userController')
const userValidate = require('../../app/users/userValidation')


// router.get('/', userController.createUser);


//create user  
router.post('/create/token', userValidate.userInput, userController.createAdminUser) //organization creates user
router.get('/credentials/token',  userController.findUser) //find a single user
router.get('/fetch/token', userController.fetchAllUsersByOrg)  //get all users for the organization





module.exports = router;