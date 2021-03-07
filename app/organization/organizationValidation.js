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
 *  
 */



 //-1
const Joi = require('@hapi/joi');  //library to handle the validation for the organization


//-2
exports.organizationInput = async (req, res, next) => {
    console.log(req.body)

    //this is the only data the frontend needs to pass for an organization to be created in the db
    const schema = Joi.object({
        companyName: Joi.string().required(),
        email: Joi.string().email().max(256).required(),
        password: Joi.string().required(),
        phoneNo: Joi.string().required(),
        address: Joi.string().required()
    });


    const {error} = schema.validate(req.body, {
        allowUnknown: true
    });

    if (error)
    //handle error
        return errorResponse(res, error.details[0].message.replace(/['"]/g, ''), 422)
    return next();

}
