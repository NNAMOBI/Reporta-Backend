
"use strict"

//libraries
const router = require('express').Router();
const contactController = require('../../app/contactus/contactusController')
const userValidate = require('../../app/users/userValidation')


// router.get('/', userController.createUser);


//create user  
router.post('/contactus', contactController.sendQuery) //organization creates user




module.exports = router;