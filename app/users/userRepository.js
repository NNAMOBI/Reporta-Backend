const { Sequelize } = require('sequelize'); 
const connection = require('../../startUps/database')
const userModel = require('../../models/user')(  connection,Sequelize)
const Repository = require('../util/Repository');




class UserRepository extends Repository{
    constructor(){
       super(userModel)
    }
    
    
}



module.exports = (new UserRepository());