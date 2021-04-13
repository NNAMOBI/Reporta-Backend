"use strict"

/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */
/**
 * * importing libraries: - 1
 *  function to validate the organization  -2
 * function to handle errors  -3
 *  
 */
 //-1

const Joi = require('@hapi/joi');  //library to handle the validation for the organization
const {errorResponse, successResponse} = require('../util/helper');  //-3
const usersPassword = require('../util/helper');

//-2
exports.organizationInput = async (req, res, next) => {
   
    const data = req.body;
    console.log("data->:", data)
    if(!data.companyName ){
        return ("companyName must exist")     
    }
    
    if(!data.companyName || typeof data.companyName !== 'string' ){
        return ('your username must be in characters')
    }
    if(!data.password || typeof data.password !== 'string' ){
    return ('Invalid password')
   }
   if(data.password.length < 5){
 return ('error-message','Password is too small, your password should be at least more than 5 characters')   
}
if(!data.phoneNo ){
    return ("phone number  must exist")     
}
  const match = await usersPassword.comparePassword(data.password, data.confirmPassword)  
  if(!match){
    return ('error-message','Oops! password  does not match, Please input your password')
  }
   

// const {error} = schema.validate(req.body, {
//     allowUnknown: true
// });

// if (error)
// //handle error
//     // return errorResponse(res, error.details[0].message.replace(/['"]/g, ''), 422)
//     return ('Please fill the field, It should not be empty');
return next();




}
