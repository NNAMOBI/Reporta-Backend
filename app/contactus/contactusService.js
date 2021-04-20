
"use strict";

/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */

/**
 * 
 * importing libraries: - 1
 *create call details records service function -2
 * send an email to the client for user's query -3
 * 

 */


//-1
const ContactUsRepository = require('./contactusRepository'); //sub class model
const OrganizationRepository = require('../organization/organizationRepository')
const UserRepository = require('../users/userRepository')
const {
    errorResponse,
    successResponse
} = require('../util/helper');


const mailer = require('../../app/services/emailService');  //send mail function 


exports.createQuery = async (data) => {
     //  console.log("id -> ", id)
     try {
        let {
            name,
            email,
            subject,
            message
        } = data

    
        const organizationRecord = await OrganizationRepository.findOne({companyName: name})//Check the organization through the callId
        if(!organizationRecord)
        return (`Oops ! No record of this user `); 
        console.log(organizationRecord)
     const isQuerySent = await ContactUsRepository.create({  //create the user in the db
        companyName: name,
        email,
        phoneNo: organizationRecord.phoneNo,
        query: message,
        orgId: organizationRecord.id,
        })
       if(!isQuerySent ) 
       return (`Cant save your data`);
       console.log("isQuerySent:->:",isQuerySent)
       
        
       // send mail to organization user using a link to say agent ended the call but authenticate the user first
        await mailer({     //-3
            from: process.env.EMAIL_USERNAME,  //environment variables
            to: organizationRecord.email,
            subject:  subject,
            text: ` ${message}   `
        });
    //     return {
    //         organizationRecord,
    //         callDetailsRecord,
    //         mail: `A mail has be sent ${callDetailsRecord.ended_call} terminated the call for the due to ${callDetailsRecord.reason_terminated}`
    //     }
    } catch (err) {
        console.log("error", err)
        return err
    }


}