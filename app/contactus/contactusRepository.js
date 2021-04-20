"use strict";
const { Sequelize } = require('sequelize'); 
const connection = require('../../startUps/database')
const contactUsModel = require('../../models/contactus')(  connection,Sequelize)
const Repository = require('../util/Repository');




class ContactUsRepository  extends Repository{
    constructor(){
       super(contactUsModel)
    }
    
    
}



module.exports = (new ContactUsRepository());