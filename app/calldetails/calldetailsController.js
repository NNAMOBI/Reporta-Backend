
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


exports.fetchAllCdrByOrg =async (req, res, next)=> {
    try {
        const token = req.query.token;
        if(!token){
         return errorResponse(res, "Please see your administrator", 401);  //error response
       }
       const fetchCdr = await CallDetailsService.fetchAllCdr(token) //call service handler to auth user
       if(!fetchCdr){
           return errorResponse(res, "credential does not exist", 401);
       }else {
           console.log("fetch->:", fetchCdr)
          return successResponse(res, fetchCdr, 200) // success response
       }

    }catch(err){
         console.log('err', err)
         return errorResponse(res, "You cannot update at this time", 500);
      }
    

}


exports.deleteCdr = async (req, res, next)=> {
    try {
   let id = req.params.id
   console.log(id)
   if(!id){
    return errorResponse(res, "Please see your administrator", 401);  //error response
  }
  const isDeleted = await CallDetailsService.deleteCdr(id) //call service handler to auth user
  if(!isDeleted ){
      return errorResponse(res, "credential does not exist", 401);
  }else {
      console.log("isDeleted ->:", isDeleted )
     return successResponse(res, isDeleted, 200) // success response
  }

}catch(err){
    console.log('err', err)
    return errorResponse(res, "You cannot update at this time", 500);
 }

}