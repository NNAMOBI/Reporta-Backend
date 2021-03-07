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

 //create organization route




const router = require('express').Router();
const organizationController = require('../../app/organization/organizationController');
const organizationValidator = require('../../app/organization/organizationValidation')




//create organization  
router.post('/', organizationValidator.organizationInput,
                                     organizationController.createOrganization)





module.exports = router;