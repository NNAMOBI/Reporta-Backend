"use strict";
const { Sequelize } = require('sequelize'); 
const connection = require('../../startUps/database')
const organizationModel = require('../../models/organization')(  connection,Sequelize)
const Repository = require('../util/Repository');




class OrganizationRepository extends Repository{
    constructor(){
       super(organizationModel)
    }
    
    
}



module.exports = (new OrganizationRepository());