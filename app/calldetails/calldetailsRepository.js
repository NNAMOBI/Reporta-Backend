"use strict";
const { Sequelize } = require('sequelize'); 
const connection = require('../../startUps/database')
const callDetailsModel = require('../../models/calldetailsrecord')(  connection,Sequelize)
const Repository = require('../util/Repository');




class CallDetailsRepository  extends Repository{
    constructor(){
       super(callDetailsModel)
    }
    
    
}



module.exports = (new CallDetailsRepository ());