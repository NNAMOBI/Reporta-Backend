
"use strict"
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/*
 * Create Call details records route /api-1
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 //create organization route -1
 //create route to login -2




const router = require('express').Router();
// const { or } = require('sequelize/types/lib/operators');
const calldetailsController = require('../../app/calldetails/calldetailsController');
const { route } = require('./users');



//create organization  
router.post('/calldetails/:callId', calldetailsController.createCallRecords)
router.get('/cdr/fetch/token', calldetailsController.fetchAllCdrByOrg)  //get all cdr's for the organization
 



module.exports = router;