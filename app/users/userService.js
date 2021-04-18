 /**
     * service layer (business logic) to Create a user from  Admin
     * @param req
     * @param res
     * @param next
     */

    const OrganizationRepository = require('../organization/organizationRepository'); //organization model
    const CallDetailsRepository = require('../calldetails/calldetailsRepository');
    const jwt = require('../util/helper');  
    const UserRepository = require('../users/userRepository'); // user model
    const user = require('../../models/user');
const calldetailsrecord = require('../../models/calldetailsrecord');


const findUser = async(token) => {

    const decoded = await jwt.verify(token, process.env.Secret) // decode the token in the querystring
    if(!decoded){
        return ('Failed to authenticate token! Please see your system administrator')
    }else {
        const userRecord = await OrganizationRepository.find(decoded.id); // check if after decoding the user exist in the database match
        const cdrRecord = await CallDetailsRepository.findAll({orgId: userRecord.id},
            ['id', 'time_start','time_end','time_answered','from_no','to_no','duration','reason_terminated','date'])
        return {
            userRecord,
            cdrRecord
        };
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