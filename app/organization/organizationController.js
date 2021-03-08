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
 * Create a organization from backend DB -2
 * calling a service for the business logic -3
 */



const {errorResponse, successResponse} = require('../../app/util/helper'); //-1
const OrganizationService = require('./organizationService');





exports.createOrganization = async (req, res, next) => {

    /**
     * Create a organization from backend
     * @param req
     * @param res
     * @param next
     */

    try {  //-2
    const data = req.body;
    // const id = req.query['id'];
    // console.log(id)
    const orgPayload = await OrganizationService.createOrganization(data) //-3
    return successResponse(res, orgPayload, 200);

    }catch(err) {
    console.log("error", err)
    return errorResponse(res, "An exception has occurred ", 500);
    }
    
}