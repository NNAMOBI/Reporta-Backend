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
 * export create organization service function -2
 * compare password and confirm password if they match, then hash the password -3
 * generate random string - 4
 * save the hashed password in the database -5
 * send an email with the hashed password string to the user inbox to change password -6
 * lastly when the organization user click on the link, it routes him to a change password route -7

 */



//-1
const OrganizationRepository = require('./organizationRepository');
const {
    errorResponse,
    successResponse
} = require('../util/helper');
const randomString = require('../../app/util/helper');
const hashString = require('../../app/util/helper');
const usersPassword = require('../../app/util/helper');
const jwt = require('../../app/util/helper');
const mailer = require('../../app/services/emailService');




//-2
exports.createOrganization = async (data) => {
    //  console.log("id -> ", id)
    try {
        let {
        companyName,
        email,
        password,
        confirmPassword,
        phoneNo,
        address,
        } = data

       const match = usersPassword.comparePassword(password, confirmPassword)  //-3
       if(!match)
       return ('Oops! password  does not match, Please input your password again');
        let randomChar = await randomString.generateString(); //-4
        let hashedPassword = await hashString.hashPassword(randomChar)  //5
        password = hashedPassword    // assign hashed password to the new matched password
        const organizationRecord = await OrganizationRepository.create({  //create the user in the db
            companyName,
            email,
            password,
            phoneNo,
            address
        })
        // return organizationRecord;

        // create accessToken  with JsonWebToken for password update. 
        const accessToken = await jwt.sign({
            id: organizationRecord.id,
            email: organizationRecord.email,
        }, process.env.Secret, {
            expiresIn: '24h'
        });
        // send mail to organization user using a link to change Password but authenticate the user first
        await mailer({     //-7
            from: process.env.EMAIL_USERNAME,  //environment variables
            to: organizationRecord.email,
            subject: 'change password',
            text: `your default password is ${organizationRecord.password}, update the password when you click on the link below!
            http://localhost:5000/api/authUser/token?token=${accessToken}`
        });
        return {
            organizationRecord,
            accessToken,
            mail: "mail has been sent to the organization, please check your inbox"
        }
    } catch (err) {
        console.log("error", err)
        return err
    }


}