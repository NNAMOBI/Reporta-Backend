
"use strict";
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * * importing utilities: - 1
 * Create a callRecords from backend DB -2
 * calling a service for the business logic -3
 */



const {errorResponse, successResponse} = require('../../app/util/helper'); //-1
const CallDetailsService = require('../calldetails/calldetailsService');




//-2
exports.createCallRecords = async (req, res, next) => {

    /**
     * Create a call details , save into the database
     * @param req
     * @param res
     * @param next
     */

    try {  //-2
        let callId = req.params.callId
        const data = req.body;
    
    const Payload = await CallDetailsService.createRecords(data, callId ) //-3
    return successResponse(res,  Payload, 200);

    }catch(err) {
    console.log("error", err)
    return errorResponse(res, "An exception has occurred ", 500);
    }
    
}