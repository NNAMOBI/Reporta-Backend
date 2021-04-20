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
 * send an email to say reason for termination to the user inbox to 
 * lastly when the organization user click on the link, it routes him to a change password route -7

 */


//-1
const CallDetailsRepository = require('./calldetailsRepository'); //sub class model
const OrganizationRepository = require('../organization/organizationRepository')
const UserRepository = require('../users/userRepository')
const {
    errorResponse,
    successResponse
} = require('../util/helper');

const jwt = require('../../app/util/helper');  
const mailer = require('../../app/services/emailService');  //send mail function 
const bcrypt = require('bcrypt');  // library to compare hashed password with the password in the input



//-2
exports.createRecords = async (data,callId) => {
    //  console.log("id -> ", id)
    try {
        let {
            Reason_terminated,
            time_start,
            time_end,
            time_answered,
            from_no,
            to_no,
            ended_call,
            Duration,
            Date
        } = data

    
        const organizationRecord = await OrganizationRepository.findOne({id: callId})//Check the organization through the callId
        if(!organizationRecord)
        return (`Oops ! No record of this user `); 
        // const organizationRecord = await UserRepository.findOne({id: callId})
        const callDetailsRecord = await CallDetailsRepository.create({  //create the user in the db
           time_start,
           time_Answered: time_answered,
           time_End: time_end,
           from_no,
           to_no,
           ended_call,
           duration: Duration,
           reason_terminated: Reason_terminated,
           date:  Date,
           orgId: organizationRecord.id,
           userId: organizationRecord.id
        })
       if(!callDetailsRecord) 
       return (`Cant save your data`);
       console.log("no that ended call:->:",callDetailsRecord.ended_call)
       if(callDetailsRecord.ended_call === 101) {

       }
       
        
        // send mail to organization user using a link to say agent ended the call but authenticate the user first
        await mailer({     //-7
            from: process.env.EMAIL_USERNAME,  //environment variables
            to: organizationRecord.email,
            subject: 'Call details',
            text: `Your Agent with number ${callDetailsRecord.ended_call} terminated the call  due to customer ${callDetailsRecord.reason_terminated}, 
            `
        });
        return {
            organizationRecord,
            callDetailsRecord,
            mail: `A mail has be sent ${callDetailsRecord.ended_call} terminated the call for the due to ${callDetailsRecord.reason_terminated}`
        }
    } catch (err) {
        console.log("error", err)
        return err
    }


}

exports.fetchAllCdr= async (token)  => {

    const decoded = await jwt.verify(token, process.env.Secret) // decode the token in the querystring
    if(!decoded){
        return ('Failed to authenticate token! Please see your system administrator')
    }else {
        
        const cdrRecord = await CallDetailsRepository.all({orgId: decoded.id})
        return cdrRecord;

    }

}

exports.deleteCdr = async (id) => {
    
    const cdrRecordDelete = await CallDetailsRepository.destroy({id: id})
    return cdrRecordDelete;
}