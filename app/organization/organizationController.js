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
    console.log(data)
    const orgPayload = await OrganizationService.createOrganization(data) //-3
    return successResponse(res, orgPayload, 200);

    }catch(err) {
    console.log("error", err)
    return errorResponse(res, "An exception has occurred ", 500);
    }
    
}

//-4
exports.orgAuth = async(req, res, next) => {
    try {
    const data = req.body;
    const token = req.query.token ;   //token
    console.log("token->: " ,token)
    if(!token){
      return errorResponse(res, "No token ", 401);  //error response
    }
    const userHasRecord = await OrganizationService.authenticateUser(token, data) //call service handler to auth user
    if(!userHasRecord){
        return errorResponse(res, "credential does not exist", 401);
    }else {
       return successResponse(res, userHasRecord, 200) // success response
    }
        
        
    }catch(err){
       console.log('err', err)
       return errorResponse(res, "You cannot update at this time", 500);
    }
    
}

exports.login = async (req, res, next)=> {
    try {
          const userHasRecord = await OrganizationService.userLogin(req.body) //call service handler to auth user
          if(!userHasRecord){
              return errorResponse(res, "credential does not exist", 401);
          }else {
             return successResponse(res, userHasRecord, 200);
          }
    }catch(error){
        //    console.error(error)
           res.json("you are not permitted")
             }   
 }


 exports.authorize = async(req, res, next)=> {
     console.log(req)
      const token = req.query.token
      console.log("->", token)
     try {
        const userHasRecord = await OrganizationService.userAuth(token) //call service handler to auth user
        if(!userHasRecord){
            return errorResponse(res, "credential does not exist", 401);
        }else {
           return successResponse(res, userHasRecord, 200)
        }       
     }catch(error){
      // console.error(error)
           res.json("you are not permitted")
       }
 }

//route to create users
 exports.createUsers = async (req, res, next)=> {
     console.log(req.body)
 }
