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
const mailer = require('../../app/services/emailService');  //send mail function
const UserRepository = require('../users/userRepository'); //sub class model
const bcrypt = require('bcrypt');  // library to compare hashed password with the password in the input




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
            id:  organizationRecord.id,
            email: organizationRecord.email,
        }, process.env.Secret, {
            expiresIn: '24h'
        });
        // send mail to organization user using a link to change Password but authenticate the user first
        await mailer({     //-7
            from: process.env.EMAIL_USERNAME,  //environment variables
            to: organizationRecord.email,
            subject: 'Change Your Password',
            text: `Your default password is ${organizationRecord.password}, update the password when you click on the link below!
            http://localhost:8080/reportaApp/ReportaApp/change.html?token=${accessToken}`
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


//-10
exports.authenticateUser = async (token, data) => {
    try {
        if(data.password !== data.confirmPassword) //confirm if the user password match
            return (`Oops ! Your password does not match please try again.`); 
            let hashedPassword = await hashString.hashPassword(data.password);  //hash the user password
         let payload = {    //reassign new password
             password: hashedPassword
         }
        const decoded = await jwt.verify(token, process.env.Secret) // decode the token in the querystring
        if(!decoded){
            return ('Failed to authenticate token! Please see your system administrator')
        }else {
            const userRecord = await OrganizationRepository.find(decoded.id);
            console.log("->" ,userRecord.id, typeof userRecord.id) // check if after decoding the user exist in the database match
            if(!userRecord)
            return ('your credentials does not exist, Please see your system administrator' );
            if(userRecord.email !== decoded.email) {
                return ('your credentials does not exist, Please see your system administrator' );
            }else {
                const IsUpdatedPassword = await OrganizationRepository.updateById(payload , userRecord.id); //update the user password by changed password
                console.log(IsUpdatedPassword);//create the user in the db
                ; //update the user to an admin status by value 1
                console.log( IsUpdatedPassword);
                return ('Your password matched and change is successful, Click on the admin to log in to view you dashboard');
                // ('Your password matched and change is successful, Click on the admin to log in to view you dashboard');
            }
        }    
    }catch(err){
        console.log("error", err)
        return err
    }
  
}


exports.userLogin = async(data)=> {
     try {
        let {
            email,
            password,
            confirmPassword
            } = data

       const match = await usersPassword.comparePassword(password, confirmPassword)  //-3
       if(!match)
       return ('Oops! password  does not match, Please input your password');
        const userRecord = await OrganizationRepository.findOne({email: email});//find email if its exist in the database
        if(!userRecord)
      return ('your credentials does not exist, Please see your system administrator' );
      if (!bcrypt.compareSync(password, userRecord.password))  //unhash the password and compare with the password from the front end
      return("your credentials does not exist, Please see your system Administrator")
      const accessToken = await jwt.sign({    //if user type is 1 (admin) sign a token
        id: userRecord.id,
        email: userRecord.email,
    }, process.env.Secret, {
        expiresIn: '24h'
    })
      return ({accessToken})

     }catch(err){
        console.error(err)
      }
   
    

}