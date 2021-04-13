

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
 *  function to validate the users  -2
 * function to handle errors  -3
 * function to validate admin to login -4
 *  
 */


 //-1
const Joi = require('@hapi/joi');  //library to handle the validation for the users
const {errorResponse, successResponse} = require('../util/helper');  //-3
const usersPassword = require('../../app/util/helper');

//-2
exports.userInput = async (req, res, next) => {

         const data = req.body;
         const token = req.query.token
         console.log("data->", data, token)
         if(!data.name ){
            return res.json({"error":'name does not exist'})
         }
         if(!data.name || typeof data.name !== 'string' ){
            return res.json({"error":'Invalid name'})

         }
         if(!data.phone || typeof data.phone !== 'string' ){
         return res.json({"error": "please fill your correct phone number"})
        
        }
   //      if(!data.file){
   //       return res.json({"error":"please select your file"})
           
   //  }
      
        

    // const {error} = schema.validate(req.body, {
    //     allowUnknown: true
    // });

    // if (error)
    // //handle error
    //     // return errorResponse(res, error.details[0].message.replace(/['"]/g, ''), 422)
    //     return ('Please fill the field, It should not be empty');
    req.body.token = token
    return next();

}





