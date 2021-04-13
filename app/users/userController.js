/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of Users /api-1
 MVC - Controller to handle the finding the organization by id /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */





const {errorResponse, successResponse} = require('../../app/util/helper'); //-1
const UserService = require('./userService');



//-1
exports.createUser = async (req, res, next) => {
     res.send("Welcome to the server");

}

exports.fetchAllUsersByOrg =async (req, res, next)=> {
     try {
          console.log("req.query=>",req.query.token)
         const token = req.query.token;
         if(!token){
          return errorResponse(res, "Please see your administrator", 401);  //error response
        }
        const fetchUsers = await UserService.fetchAllUsers(token) //call service handler to auth user
        if(!fetchUsers){
            return errorResponse(res, "credential does not exist", 401);
        }else {
           return successResponse(res, fetchUsers, 200) // success response
        }

     }catch(err){
          console.log('err', err)
          return errorResponse(res, "You cannot update at this time", 500);
       }
     

}



exports.createAdminUser = async(req, res, next)=> {
     try {
          if(!req.body){
              return errorResponse(res, "No data ", 401);  //error response
            }
            const isCreated = await UserService.addUser(req.body) //call service handler to auth user
            if(!isCreated ){
                return errorResponse(res, "credential does not exist", 401);
            }else {
               return successResponse(res, isCreated , 200) // success response
            }
         }catch(err){
               console.log('err', err)
               return errorResponse(res, "You cannot update at this time", 500);
            }

     

}


//api-2
exports.findUser = async(req, res, next)=>{
     try {
 
 const token = req.query.token
 if(!token){
     return errorResponse(res, "No token ", 401);  //error response
   }
   const getUserRecord = await UserService.findUser(token) //call service handler to auth user
   if(!getUserRecord){
       return errorResponse(res, "credential does not exist", 401);
   }else {
      return successResponse(res, getUserRecord, 200) // success response
   }
}catch(err){
      console.log('err', err)
      return errorResponse(res, "You cannot update at this time", 500);
   }
}