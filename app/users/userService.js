 /**
     * service layer (business logic) to Create a user from  Admin
     * @param req
     * @param res
     * @param next
     */

    const OrganizationRepository = require('../organization/organizationRepository'); //organization model
    const jwt = require('../util/helper');  
    const UserRepository = require('../users/userRepository'); // user model
    const user = require('../../models/user');


const findUser = async(token) => {

    const decoded = await jwt.verify(token, process.env.Secret) // decode the token in the querystring
    if(!decoded){
        return ('Failed to authenticate token! Please see your system administrator')
    }else {
        const userRecord = await OrganizationRepository.find(decoded.id); // check if after decoding the user exist in the database match
        return userRecord;
}
} 
 const fetchAllUsers = async(token)=> {
     try {
        const decoded = await jwt.verify(token, process.env.Secret) // decode the token in the querystring
        if(!decoded){
            return ('Failed to authenticate token! Please see your system administrator')
        }else {
            const userRecord = await UserRepository.findAll({orgId: decoded.id},
                                               ['id', 'name','email','phoneNo','status','createdAt','updatedAt']); // check if after decoding the user exist in the database match
            console.log(userRecord)
            return userRecord; 
     }

     }catch(err){
      console.error(err.message)
     }
    }
    

 const addUser = async (data) => {
    console.log("data->: ", data)
     let {
         name,
         email,
         phone,
         status,
         token
        } = data
        let usertype;
    const decoded = await jwt.verify(token, process.env.Secret) // decode the token in the querystring
    if(!decoded){
        return ('Failed to authenticate token! Please see your system administrator')
    }else {
        if(status == 'Supervisor') {
            usertype = 'Admin';
        }else {
            usertype = 'user'
        }
        const userRecord = await UserRepository.create({
            name,
            email,
            phoneNo: phone,
            status, 
            usertype,
            orgId: decoded.id
        }); // check if after decoding the user exist in the database match
        if(!userRecord)
        return ('your credentials does not exist, Please see your system administrator' );
        return (userRecord)
    }

    }



module.exports = {
    findUser,
    addUser,
    fetchAllUsers
}