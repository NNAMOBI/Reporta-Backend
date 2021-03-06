"use strict"
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/*
 * Create Organization route /api-1
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 //create organization route -1
 //create route to login -2




const router = require('express').Router();
// const { or } = require('sequelize/types/lib/operators');
const organizationController = require('../../app/organization/organizationController');
const organizationValidator = require('../../app/organization/organizationValidation');
const { route } = require('./users');
// const auth = require('../../app/middleware/auth')


//create organization  
router.post('/register', organizationValidator.organizationInput,
                                     organizationController.createOrganization)
                                   
router.post('/', organizationController.orgAuth);   //authenticate user with token to change password
router.post('/login',  organizationController.login);  //-2
router.get('/auth/token', organizationController.authorize); // authorize user to view dashboard
router.post("/user/register", organizationController.createUsers);//route to create users



module.exports = router;