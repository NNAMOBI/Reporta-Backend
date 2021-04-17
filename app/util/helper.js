'use strict'
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * * importing libraries: - 1
 * function that handles all the errors in the app -2
 * function to generate random string-3
 * function to hash password using encoding algorithms with salt-4
 * function to sign their credentials using JsonWebTokens to initiate sessions-5
 * function to verify the JWT -6
 * function to compare password-7
 * 
 */


//-1
const randomString = require('randomstring');  //library to generate random string
const bcrypt = require('bcrypt');       // library to hash password
const jwt = require('jsonwebtoken');     //jwt to create sessions
const axios = require('axios')          // library to make post request to the application server





//-2
let successResponse = (res, data, code = 200) => {
    if ((data && data.docs)) {
        data.data = data.docs;
        delete data.docs;
        return res.status(code).json({data});
    }
    return res.status(code).json({data});
};

//-2
let errorResponse = (res, error = "Oops. An Error Occurred", code = 500) => { //-2
    return res.status(code).json({error: error});
};

//-3
let generateString = () => {
    return randomString.generate({
        length: 10
    }) 
}
//-4
let hashPassword = async (payload) => {
 return ( await bcrypt.hashSync( 
        payload, 
       bcrypt.genSaltSync()
 ))
}

//-5
let sign = async (payload, secretKey, expires) => {
return jwt.sign(payload, secretKey, expires)
}
//-6
let verify = async (token, secretKey) => {
    return jwt.verify(token, secretKey);
}

//-7
let comparePassword =  (newPassword, confirmPassword) => {
    if(newPassword !== confirmPassword )
        return false;
    return true;
};




let postCallDetails = async (data, callId)=> {
    try {
        console.log(data, callId)
        let url = `http://localhost:5000/api/users/calldetails/${callId}`;
        
        const {body} = await axios.post(url, data);
        return body;
    } catch (error) {
        console.log(error);
        return error;
    }

}







module.exports = {
    successResponse,
    errorResponse,
    generateString,
    hashPassword,
    sign,
    verify,
    comparePassword,
    postCallDetails
    
}