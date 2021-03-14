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
const organizationController = require('../../app/organization/organizationController');
const organizationValidator = require('../../app/organization/organizationValidation')
// const auth = require('../../app/middleware/auth')




//create organization  
router.post('/register', organizationValidator.organizationInput,
                                     organizationController.createOrganization)
                                   
router.post('/', organizationController.orgAuth);   //authenticate user with token to change password
router.post('/login',  organizationController.login);  //-2





module.exports = router;